// Import the axios library
const axios = require('axios');
// Import the Movie class
const Movie = require('../src/movie.js');
// Define the API endpoint base URL
const API_BASE_URL = 'https://the-one-api.dev/v2/';

jest.mock('axios');

describe('Movie', () => {
  let movieInstance;

  beforeEach(() => {
    movieInstance = new Movie(axios);
  });

  describe('getMovies', () => {
    it('should make a GET request to the correct URL', async () => {
      const mockData = { data: 'mock data' };
      axios.get.mockResolvedValue(mockData);
      const result = await movieInstance.getMovies();
      expect(axios.get).toHaveBeenCalledWith('movie');
      expect(result).toEqual(mockData.data);
    });

    it('should throw an error if the request fails', async () => {
      const mockError = new Error('Request failed');
      axios.get.mockRejectedValue(mockError);
      try {
        await movieInstance.getMovies();
      } catch (error) {
        expect(error).toEqual(mockError);
      }
    });
  });

  describe('getMovieById', () => {
    it('should make a GET request to the correct URL', async () => {
      const mockData = { data: 'mock data' };
      const id = '123';
      axios.get.mockResolvedValue(mockData);
      const result = await movieInstance.getMovieById(id);
      expect(axios.get).toHaveBeenCalledWith(`${API_BASE_URL}movie/${id}`);
      expect(result).toEqual(mockData.data);
    });

    it('should throw an error if the request fails', async () => {
      const mockError = new Error('Request failed');
      const id = '123';
      axios.get.mockRejectedValue(mockError);
      try {
        await movieInstance.getMovieById(id);
      } catch (error) {
        expect(error).toEqual(mockError);
      }
    });
  });

  describe('getMovieQuotesById', () => {
    it('should return movie quotes for the given id', async () => {
      const mockMovieQuotes = [
        {
          "id": "5cd95395de30eff6ebccde5c",
          "quote": "All we have to decide is what to do with the time that is given us.",
          "author": "Gandalf",
          "movieId": "5cd95395de30eff6ebccde5c"
        },
        {
          "id": "5cd95395de30eff6ebccde5d",
          "quote": "I will not say: do not weep; for not all tears are an evil.",
          "author": "Gandalf",
          "movieId": "5cd95395de30eff6ebccde5c"
        }
      ];

      axios.get.mockResolvedValue({ data: mockMovieQuotes });
      
      const movieId = '5cd95395de30eff6ebccde5c';
      const result = await movieInstance.getMovieQuotesById(movieId);

      expect(axios.get).toHaveBeenCalledWith(`https://the-one-api.dev/v2/movie/${movieId}/quote`);
      expect(result).toEqual(mockMovieQuotes);
    });
    
    it('should throw an error if the request fails', async () => {
      const errorMessage = 'Request failed with status code 404';
      axios.get.mockRejectedValue(new Error(errorMessage));

      const movieId = '5cd95395de30eff6ebccde5c';
      try {
        await movieInstance.getMovieQuotesById(movieId);
      } catch (error) {
        expect(error.message).toEqual(errorMessage);
      }
    });
  })
});