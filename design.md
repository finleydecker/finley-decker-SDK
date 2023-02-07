# Design

## Overview

The code in this repository is an implementation of an SDK for the movie
endpoints provided by The Lord of the Rings API.

The main file "index.js" exports a class "LordOfTheRingsSDK" which takes an API
key as an argument in its constructor and creates an instance of the Axios
library. The instance of the Axios library is then passed on to the "Movie"
class, which is defined in the "src/movie.js" file.

The "Movie" class has several methods for retrieving information about movies,
such as retrieving all movies, retrieving a movie by ID, and retrieving quotes
from a movie by ID. All of these methods use the Axios instance to make GET
requests to The Lord of the Rings API.

## Usage

1. Install the SDK via a package manager and import the SDK.
2. Create a new instance of the SDK, passing in an API key
3. Create a new instance of the movie class by calling the getMovieInstance
   method on the SDK
4. Call any of the available methods from the SDK on the movie instance

## Limitations and Future Features

Currently only supports the movie endpoints. Could be expanded to cover the
books, characters, quotes, and chapter endpoints as well.

Could add pagination, sorting, and filtering capabilities.

Could provide more detailed error handling and logging capabilities.
