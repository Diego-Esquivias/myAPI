// Its time for Nodemon, Postman, and Queries/APIs
const express = require('express')
const app = express()
const {movies, actors} = require('./db/data')

app.use(express.static('public'));
app.set('view engine', 'html');


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/api/users/admin/:password', (req, res) => {
    console.log(req.params)
    const {password} = req.params
    if(password === '18xm2p1m0pa1'){
        res.render('admin')
    } else {
        res.status(401).json({message: 'Access denied'})
    }
})

// Return all movies
app.get('/api/movies', (req, res) => {
    const newMovies = movies.map(movie =>{
        const {id, title, releaseYear} = movie
        return {id, title, releaseYear}
    })
    res.json(newMovies)
})

// Return all actors
app.get('/api/actors', (req, res) => {
    const newActors = actors.map(actor =>{
        const {id, name, age, movie_id} = actor
        return {id, name, age, movie_id}
    })
    res.json(newActors)
})


// This is how you set up your params for the data query 
// Find a specific movie based on the id
app.get('/api/movies/:movieID', (req, res) => {
    console.log(req.query)
    const {movieID} = req.params
    const singleMovie = movies.find((movie) => movie.id === Number(movieID))
    
    if(!singleMovie){
        return res.status(404).send('Movie not found/item does not exist')
    } else if (req.query.Life == '42') {
        return res.status(202).send("You have found the easter egg")
    }
    return res.json(singleMovie)
})

// Find a specific actor based on the id
app.get('/api/actors/:actorID', (req, res) => {
    console.log(req.query)
    const {actorID} = req.params
    const singleActor = actors.find((actor) => actor.id === Number(actorID))
    
    if(!singleActor){
        return res.status(404).send('actor not found/item does not exist')
    } else if (req.query.Life == '42') { // type "?Life=42" in the url
        return res.status(202).send("You have found the easter egg")
    }
    return res.json(singleActor)
})

// app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
//     console.log(req.params)
//     console.log(Number(req.params.productID))
//     res.send("This product has been reviewed by a person: its the best there is 10/10 would buy again")
// })

// // Sets up a query that you can grab
// app.get('/api/vi/query', (req, res) => {
//     // console.log(req.query)
//     const {search, limit} = req.query
//     let sortedProducts = [...products]

//     if(search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.name.startsWith(search)
//         })
//     }
//     if(limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit))
//     }
//     if(sortedProducts.length < 1) {
//         return res.status(200).json({success:true, data:[]})
//     }
//     res.status(200).json(sortedProducts)
// })

app.listen(5000, () => {
    console.log('Server is running on port 5000...')
})