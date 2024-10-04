// Its time for Nodemon, Postman, and Queries/APIs
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const path = require('path');
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'html');

// Middleware to parse JSON body data
app.use(express.json());``

// Load the index page
app.get('/', (req, res) => {
    res.render('index')
})

// How to get into Admin side
app.get('/admin/:password', (req, res) => {
    console.log(req.params)
    const {password} = req.params
    if(password === '18xm2p1m0pa1'){
        res.sendFile(path.join(__dirname, '/public/admin.html'))
    } else {
        res.send("Access denied, you are not an admin")
    }
})

// Load movies from JSON file
const getMovies= () => {
    const data = fs.readFileSync('./db/movies.json', 'utf8');
    return JSON.parse(data);
}

const saveMovies = (tasks) => {
    fs.writeFileSync('./db/movies.json', JSON.stringify(tasks, null, 2));
};

// Load actors from JSON file
const getActors = () => {
    const data = fs.readFileSync('./db/actors.json', 'utf8');
    return JSON.parse(data);
}

const saveActors = (events) => {
    fs.writeFileSync('./db/actors.json', JSON.stringify(events, null, 2));
};

// Routes

// GET: Show all movies
app.get('/api/movies', (req, res) => {
    const movies = getMovies();
    res.json(movies)
});

// GET: Show all actors
app.get('/api/actors', (req, res) => {
    const actors = getActors();
    res.json(actors)
});


// This is how you set up your params for the data query 
// Find a specific movie based on the id
app.get('/api/movies/:movieID', (req, res) => {
    const movies = getMovies();
    const {movieID} = req.params
    const singleMovie = movies.find((movie) => movie.id === Number(movieID))
    
    if(!singleMovie){
        return res.status(404).send('Movie not found/item does not exist')
    } 
    return res.json(singleMovie)
})

// Find a specific actor based on the id
app.get('/api/actors/:actorID', (req, res) => {
    const actors = getActors();
    const {actorID} = req.params
    const singleActor = actors.find((actor) => actor.id === Number(actorID))
    
    if(!singleActor){
        return res.status(404).send('actor not found/item does not exist')
    } 
    return res.json(singleActor)
})

// TODO: Need to have admin in the url to work ------------------------------------------------------------------------------------------

// POST: Add new movie (Admin Mode)
app.post('/admin/:password/movies', (req, res) => {
    const { password } = req.params;
    const { title, releaseYear } = req.body;

    // Admin password check
    if (password !== '18xm2p1m0pa1') {
        return res.status(403).send("Access denied, you are not an admin");
    }

    // Validate required fields
    if (!title || !releaseYear) {
        return res.status(400).send("Title and release year are required");
    }

    // Get the current list of movies
    const movies = getMovies();

    // Find the max ID in the current list
    const maxId = movies.length > 0 ? Math.max(...movies.map(m => m.id)) : 0;

    // Create a new movie with a unique ID
    const newMovie = {
        id: maxId + 1,
        title: title,
        releaseYear: releaseYear
    };

    // Add the new movie to the array and save
    movies.push(newMovie);
    saveMovies(movies);

    // Redirect or send a success response
    res.redirect('/');
});

// POST: Add new actor (Admin Mode)
app.post('/admin/:password/actors', (req, res) => {
    const { password } = req.params;
    const { name, age, movie_id } = req.body; // Added movie_id

    // Admin password check
    if (password !== '18xm2p1m0pa1') {
        return res.status(403).send("Access denied, you are not an admin");
    }

    // Validate required fields
    if (!name || !age || !movie_id) { // Updated to include movie_id
        return res.status(400).send("Name, age, and movie ID are required");
    }

    // Get the current list of actors
    const actors = getActors(); // Changed to getActors()

    // Find the max ID in the current list
    const maxId = actors.length > 0 ? Math.max(...actors.map(a => a.id)) : 0;

    // Create a new actor with a unique ID
    const newActor = {
        id: maxId + 1,
        name: name,
        age: age, // Updated to use age instead of birthdate
        movie_id: movie_id // Added movie_id to the new actor object
    };

    // Add the new actor to the array and save
    actors.push(newActor);
    saveActors(actors); // Changed to saveActors()

    // Redirect or send a success response
    res.redirect('/');
});

// DELETE: Delete a movie
app.delete('/admin/:password/delete/movie', (req, res) => {
    const { password } = req.params; // Extract the password from the URL
    const { id } = req.body; // Extract the movie ID from the request body

    // Check if the provided password is correct
    if (password !== '18xm2p1m0pa1') {
        return res.status(403).send("Access denied, you are not an admin");
    }

    // Get the current list of movies
    let movies = getMovies();
    
    // Check if the ID was provided
    if (!id) {
        return res.status(400).send("Movie ID is required");
    }

    // Filter out the movie with the given ID
    movies = movies.filter(movie => movie.id != id);

    // Save the updated list of movies
    saveMovies(movies);
    
    // Send a success response or redirect
    res.redirect('/');
});

// DELETE: Delete an actor
app.delete('/admin/:password/delete/actor', (req, res) => {
    const { password } = req.params; // Extract the password from the URL
    const { id } = req.body; // Extract the actor ID from the request body

    // Check if the provided password is correct
    if (password !== '18xm2p1m0pa1') {
        return res.status(403).send("Access denied, you are not an admin");
    }

    // Get the current list of actors
    let actors = getActors(); // Change to get the list of actors
    
    // Check if the ID was provided
    if (!id) {
        return res.status(400).send("Actor ID is required");
    }

    // Filter out the actor with the given ID
    actors = actors.filter(actor => actor.id != id);

    // Save the updated list of actors
    saveActors(actors); // Change to save the updated list of actors
    
    // Send a success response or redirect
    res.redirect('/');
});

// PUT: Edit a movie
app.put('/admin/:password/edit/movie', (req, res) => {
    const { password } = req.params; // Extract the password from the URL
    const { id, title, releaseYear } = req.body; // Extract the movie ID, title, and release year from the request body

    // Check if the provided password is correct
    if (password !== '18xm2p1m0pa1') {
        return res.status(403).send("Access denied, you are not an admin");
    }

    // Get the current list of movies
    const movies = getMovies();

    // Validate that the movie exists
    const movieIndex = movies.findIndex(movie => movie.id == id);
    if (movieIndex === -1) {
        return res.status(404).send("Movie not found");
    }

    // Update the movie's title and/or release year based on provided data
    if (title) {
        movies[movieIndex].title = title; // Update title if provided
    }
    if (releaseYear) {
        movies[movieIndex].releaseYear = releaseYear; // Update release year if provided
    }

    // Save the updated movies array
    saveMovies(movies);

    // Send a success response or redirect
    res.redirect('/');
});


// PUT: Edit an actor
app.put('/admin/:password/edit/actor', (req, res) => {
    const { password } = req.params; // Extract the password from the URL
    const { id, name, age, movie_id } = req.body; // Extract the actor ID, name, age, and movie ID from the request body

    // Check if the provided password is correct
    if (password !== '18xm2p1m0pa1') {
        return res.status(403).send("Access denied, you are not an admin");
    }

    // Get the current list of actors
    const actors = getActors(); // Changed to getActors()

    // Validate that the actor exists
    const actorIndex = actors.findIndex(actor => actor.id == id);
    if (actorIndex === -1) {
        return res.status(404).send("Actor not found");
    }

    // Update the actor's name, age, and/or movie ID based on provided data
    if (name) {
        actors[actorIndex].name = name; // Update name if provided
    }
    if (age) {
        actors[actorIndex].age = age; // Update age if provided
    }
    if (movie_id) {
        actors[actorIndex].movie_id = movie_id; // Update movie_id if provided
    }

    // Save the updated actors array
    saveActors(actors); // Changed to saveActors()

    // Send a success response or redirect
    res.redirect('/');
});



app.listen(5000, () => {
    console.log('Server is running on port 5000...')
})