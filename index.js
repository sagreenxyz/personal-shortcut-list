const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World - I am here');
})

app.listen(3000, () => {
    console.log('I am awake');
});

// from the terminal, enter "node index.js"

