const path = require('path')
const textapi = require("./textapi");
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var cors = require('cors')

const app = express()

app.use(express.static('dist'))
app.use(cors())

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
    const { text } = req.query
    if (!text){
        res.status(400).send()
        return
    }
    const response = textapi(decodeURIComponent(text), function(error, response){
        if(!error){
            const json = convertServerResponse(text, response)
            res.send(json)
        }else{
            console.log(error)
            res.status(500).send()
        }
    })
})

function getCurrentDate() {
    let d = new Date();
    return (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();
}

function convertServerResponse(text, response){
    return {
        'title': 'Semantic analysis result',
        'message': `The text "${text}" is ${response.subjectivity} and ${response.polarity}.`,
        'time': getCurrentDate()
    }
}

module.exports = { convertServerResponse }