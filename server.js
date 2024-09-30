const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('User Hit Resource')
    res.status(200).send('Home Page Found')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page Found')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>')
})

app.listen(5000, () => {
    console.log('Listening on http://localhost5000')
})