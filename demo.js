/* eslint-disable no-console */

// Import the SDK
const LordOfTheRingsSDK = require('./index');
// Insert your api key here
const apiKey = 'xbrK_NYKref0KmoTHm2k';

// Create an instance of the SDK
const sdk = new LordOfTheRingsSDK(apiKey);
const movie = sdk.getMovieInstance();

// Call the getMovies method
movie.getMovies()
  .then((movies) => {
    console.log(movies);
  })
  .catch((error) => {
    console.error(error);
  });

// Store ID of the movie
const movieID = '5cd95395de30eff6ebccde5c';

// Call the getMovieById method
movie.getMovieById(movieID)
  .then((myMovie) => {
    console.log(myMovie);
  })
  .catch((error) => {
    console.error(error);
  });

// Call the getMovieQuotesById method
movie.getMovieQuotesById(movieID)
  .then((quotes) => {
    console.log(quotes);
  })
  .catch((error) => {
    console.error(error);
  });
