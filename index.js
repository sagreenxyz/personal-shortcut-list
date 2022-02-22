require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('HELLO WORLD!  Again');
})

app.listen(process.env.PORT, () => {
    console.log('I am awake again!...');
});

// from the terminal, enter "node index.js"
// or use nodemon to automatically refresh when changes are made
