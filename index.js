const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('HELLO WORLD!');
})

app.listen(3000, () => {
    console.log('I am awake');
});

// from the terminal, enter "node index.js"
// or use nodemon to automatically refresh when changes are made
