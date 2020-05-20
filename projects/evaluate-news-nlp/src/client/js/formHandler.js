import { checkForName } from './nameChecker'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    // clean results and errors
    document.getElementById('results').innerHTML = ""
    document.getElementById('errors').innerHTML = ""

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/analyze?text=' + encodeURIComponent(formText))
    .then(res => {
         if (res.status == 400){
                document.getElementById('errors').innerHTML = "You need to provide some text"
         }
         if (res.status == 500) {
                document.getElementById('errors').innerHTML = "Internal error, contact the site admin"
         }
         return res.json()})
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
