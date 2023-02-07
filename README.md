# The Lord of the Rings SDK

An SDK for The One API (only movies for now): https://the-one-api.dev/v2

<hr>

## Installation

`npm i finley-decker-sdk`

<hr>

## Authorization

To access the movie endpoints, you will need an API key.

Sign up using the following link to receive one: https://the-one-api.dev/sign-up

<hr>

## Quick Start

Shows all available methods:

```js
const LordOfTheRingsSDK = require("finley-decker-sdk");

const apiKey = "<YOUR_API_KEY_HERE>";

const sdk = new LordOfTheRingsSDK(apiKey);
const movie = sdk.getMovieInstance();

movie.getMovies()
  .then((movies) => {
    console.log(movies);
  })
  .catch((error) => {
    console.error(error);
  });

const movieID = "5cd95395de30eff6ebccde5c";

movie.getMovieById(movieID)
  .then((movie) => {
    console.log(movie);
  })
  .catch((error) => {
    console.error(error);
  });

movie.getMovieQuotesById(movieID)
  .then((quotes) => {
    console.log(quotes);
  })
  .catch((error) => {
    console.error(error);
  });
```

<hr>

## Testing

1. Clone repo
2. Install dependencies
3. Use the `npm run test` command in the terminal

<hr>

## Future Features

Implement the following classes:

- Book
- Character
- Quote
- Chapter
