const formHandler = require('./formHandler');

test('the text should be sent using fetch method', (done) => {
    window.fetch = url => new Promise(resolve=> { // mock fetch method
        if (url.includes("bla")){
            done()
        } else {
            done("Url doesn't contain the text: " + url)
        }
    })
    document.getElementById = function(name){ // mock the input element
        return { "value": "bla" }
    }
    formHandler.handleSubmit({ // mock an event
        preventDefault: function(){}
    })
})