// Import the Axios library
const axios = require('axios');
// Import Movie class
const Movie = require('./src/movie.js');

// Define the API endpoint base URL
const API_BASE_URL = 'https://the-one-api.dev/v2/';

// Define the SDK class
class LordOfTheRingsSDK {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        Authorization: `Bearer ${this.apiKey}`
      }
    })
    this.movieInstance = new Movie(this.axiosInstance);
  }

  getMovieInstance() {
    return this.movieInstance;
  }
};

// Export the SDK class
module.exports = LordOfTheRingsSDK;