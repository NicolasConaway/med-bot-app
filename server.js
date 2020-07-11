const express = require('express');
const path = require('path');
require('dotenv').config()
let apiKey = process.env.APIkey;
const server = express();
const GOOGLE_APPLICATION_CREDENTIALS = require('./welcome.json')
const message = GOOGLE_APPLICATION_CREDENTIALS.userSays[0].data[0].text
console.log(message);

// Server Requests
server.use('/static', express.static('public'))
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
});

server.get('/', (req,res) => {
})

server.post('/', (req, res) => {
    req.body.trainingPhrases;
})

// Creating the server
const port = process.env.PORT || 1320;
server.listen(port, () => {
    console.log(`This server is running on ${port}`)
})
