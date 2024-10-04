
# My API

This api can allow users to view all 50 movies and actors available or specific ones depending on their id. On the admin side, the admin can add new movies or actors, delete existig ones, or update current ones.

## Deployment

Open the code in Github Desktop where you will download the file and open it up in VS Code 

Open the terminal and then type in:

```bash
  npm server.js
```

To see the website type this into your browser 

```
http://localhost:5000/
```

npm i the following:
- fs
- node
- nodemon
- express
- ejs

## API Endpoints

### Admin Authentication
- **GET** `/admin/:password`
  - **Description**: Access the admin page. Requires the correct password (`18xm2p1m0pa1`).

### Movies
- **GET** `/api/movies`
  - **Description**: Fetch all movies.

- **GET** `/api/movies/:movieID`
  - **Description**: Fetch a specific movie by its ID.

- **POST** `/admin/:password/movies`
  - **Description**: Add a new movie (Admin only).
  - **Request Body**:
    - `title` (String): The title of the movie.
    - `releaseYear` (Number): The release year of the movie.

- **DELETE** `/admin/:password/delete/movie`
  - **Description**: Delete a movie by its ID (Admin only).
  - **Request Body**:
    - `id` (Number): The ID of the movie to delete.

- **PUT** `/admin/:password/edit/movie`
  - **Description**: Edit a movie's details (Admin only).
  - **Request Body**:
    - `id` (Number): The ID of the movie to edit.
    - `title` (String, optional): The new title of the movie.
    - `releaseYear` (Number, optional): The new release year of the movie.

### Actors
- **GET** `/api/actors`
  - **Description**: Fetch all actors.

- **GET** `/api/actors/:actorID`
  - **Description**: Fetch a specific actor by their ID.

- **POST** `/admin/:password/actors`
  - **Description**: Add a new actor (Admin only).
  - **Request Body**:
    - `name` (String): The name of the actor.
    - `age` (Number): The age of the actor.
    - `movie_id` (Number): The ID of the movie the actor is associated with.

- **DELETE** `/admin/:password/delete/actor`
  - **Description**: Delete an actor by their ID (Admin only).
  - **Request Body**:
    - `id` (Number): The ID of the actor to delete.

- **PUT** `/admin/:password/edit/actor`
  - **Description**: Edit an actor's details (Admin only).
  - **Request Body**:
    - `id` (Number): The ID of the actor to edit.
    - `name` (String, optional): The new name of the actor.
    - `age` (Number, optional): The new age of the actor.
    - `movie_id` (Number, optional): The new movie ID the actor is associated with.

### Example JSON File Structure for Postman (Admin Side Only)

```bash
// For Movies
{
    "id": 1,
    "title": "Movie Title",
    "releaseYear": 2022
}

// For Actors
{
    "id": 1,
    "name": "Actor Name",
    "age": 30,
    "movie_id": 1
}
```

## License
This project is licensed under the MIT License.