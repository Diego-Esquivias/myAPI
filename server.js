// Its time for Nodemon, Postman, and Queries/APIs
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const path = require('path');
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'html');

// Load the index page
app.get('/', (req, res) => {
    res.render('index')
})

// How to get into Admin side
app.get('/admin/:password', (req, res) => {
    console.log(req.params)
    const {password} = req.params
    if(password === '18xm2p1m0pa1'){
        console.log("success")
        res.sendFile(path.join(__dirname, '/public/admin.html'))
    } else {
        res.send("error cannot access")
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

// POST: Add new movie
app.post('/movies', (req, res) => {
    const movies = getMovies();
    const {title, releaseYear} = req.body
        const newMovie = {
            id: movies.length + 1, // TODO: edit this to function properly ----------------------------------------------------------------
            title: title,
            releaseYear: releaseYear
        };
        movies.push(newMovie);
        saveMovies(movies);
        res.redirect('/');
})

// DELETE: Delete a movie
app.post('/delete', (req, res) => {
    let movies = getMovies();
    movies = movies.filter(movie => movie.id != req.body.id);
    saveMovies(movies);
    res.redirect('/');
})

// PUT: Edit a movie
app.post('/edit', (req, res) => {
    const movies = getMovies();
    const movieIndex = req.body.id;
    if (req.body.title == '') {
        movies[movieIndex].releaseYear = req.body.releaseYear;
    } else if (req.body.releaseYear == '') {
        movies[movieIndex].title = req.body.title;
    }
    saveMovies(movies);
    res.redirect('/');
})

app.listen(5000, () => {
    console.log('Server is running on port 5000...')
})