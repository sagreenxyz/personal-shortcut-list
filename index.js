require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('HOME PAGE');
})

app.get('/two', function (req, res) {
    res.send('PAGE TWO');
})

app.get('/research/:animal', function (req, res) {
    res.send('Research ' + req.params.animal);
}) // http://localhost:3000/research/dog ==> query parameter

app.get('/square/:x', function (req, res) {
    let x = Number(req.params.x);
    let result = x * x;
    res.send(`${x} squared is ${result}.`)
}) // http://localhost:3000/square/5 ==> query parameter

app.listen(process.env.PORT, () => {
    console.log('I am awake again!...');
});

// from the terminal, enter "node index.js"
// or use nodemon to automatically refresh when changes are made
