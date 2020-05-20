const path = require('path')
const textapi = require("./textapi");
const dotenv = require('dotenv');
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}

dotenv.config();
const app = express()

app.use(express.static('dist'))
app.use(cors(corsOptions))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/analyze', function (req, res) {
    //const response = textapi(req.param)
    res.send(response)
})

