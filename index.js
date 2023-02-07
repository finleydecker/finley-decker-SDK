// Import the Axios library
const axios = require('axios');
// Import Movie class
const Movie = require('./src/movie');

// Define the API endpoint base URL
const API_BASE_URL = 'https://the-one-api.dev/v2/';

// Define the SDK class
class LordOfTheRingsSDK {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
    this.movieInstance = new Movie(this.axiosInstance);
  }

  // Method to get instance of movie class
  getMovieInstance() {
    return this.movieInstance;
  }
}

// Export the SDK class
module.exports = LordOfTheRingsSDK;
