const aylien = require("aylien_textapi")
const util = require('util')
const dotenv = require('dotenv');

dotenv.config();

const api = new aylien({
    application_id: process.env.AYLIEN_API_ID,
    application_key: process.env.AYLIEN_API_KEY
})

function textapi(text, callback) {
    console.log("textapi.js: Calling textapi with text: " + text)
    api.sentiment({
      'text': text
    }, function(error, response){
        if (!error){
            console.log("textapi.js: Got response: " + JSON.stringify(response))
        }else{
            console.log("textapi.js: Got error: " + JSON.stringify(error))
        }
        callback(error, response)
    })
}

module.exports = textapi
