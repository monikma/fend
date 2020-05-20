const textapi = require("./textapi")

test('basic call to textapi should work', done => {
    try {
        textapi('John is a very good football player!', function(error, response){
            expect(response.polarity).toBe("positive")
            done()
        })
    } catch (error) {
        done(error)
    }
});