// Define the API endpoint base URL
const API_BASE_URL = 'https://the-one-api.dev/v2/';

// Define the Movie class
class Movie {
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  // Method to retrieve all movies
  async getMovies() {
    const response = await this.axiosInstance.get('movie');
    return response.data;
  }

  // Method to retrieve a movie by ID
  async getMovieById(id) {
    const response = await this.axiosInstance.get(`${API_BASE_URL}movie/${id}`);
    return response.data;
  }

  // Method to retrieve quotes from a movie by ID
  async getMovieQuotesById(id) {
    const response = await this.axiosInstance.get(`${API_BASE_URL}movie/${id}/quote`);
    return response.data;
  }
}

// Export the Movie class
module.exports = Movie;
