const nameChecker = require('./nameChecker');

test('the "Welcome, Captain!" alert should show for Kirk', (done) => {
    window.alert = function(text){ // mock alert method
        if (text == "Welcome, Captain!"){
            done()
        } else {
            done("Wrong text: " + text)
        }
    }
    nameChecker.checkForName("Kirk")
})