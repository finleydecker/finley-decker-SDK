// Import the SDK
const LordOfTheRingsSDK = require('./index.js');
// Insert your api key here
const apiKey = '<YOUR_API_KEY_HERE>';

// Create an instance of the SDK
const sdk = new LordOfTheRingsSDK(apiKey);
const movie = sdk.getMovieInstance();

// Call the getMovies method
movie.getMovies()
  .then(movies => {
    console.log(movies);
  })
  .catch(error => {
    console.error(error);
  });

// Store ID of the movie
const movieID = '5cd95395de30eff6ebccde5c';

// Call the getMovieById method
movie.getMovieById(movieID)
  .then(movie => {
    console.log(movie);
  })
  .catch(error => {
    console.error(error);
  });

// Call the getMovieQuotesById method
movie.getMovieQuotesById(movieID)
  .then(quotes => {
    console.log(quotes);
  })
  .catch(error => {
    console.error(error);
  });