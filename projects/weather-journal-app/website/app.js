// Personal API Key for OpenWeatherMap API
const apiKey = "a8e0f9e6690428bc6ff0a514cb07c017";
const weatherURL = 'http://api.animalinfo.org/data/?animal='
const baseURL = 'http://api.animalinfo.org/data/?animal='

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */
function performAction(event) {
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    if (zip && feelings) {
        getWeather(weatherURL, zip, apiKey)
            .then(weather => postData(baseURL, {
                weather: weather,
                feelings: feelings,
                date: getCurrentDate()
            }))
            .then(() => getData(baseURL))
            .then(data => updateUi(data));
    } else {
        alert("You need to provide both your Zipcode and how you are feeling.");
    }
}

/* Function to GET Web API Data*/
document.getElementById('generate').addEventListener('click', performAction);

const getWeather = async (baseURL, zip, key) => {
    //const res = await fetch(baseURL+zip+key)
    try {
        //const data = await res.json();
        //console.log(data)
        //return data;
        return "Sunny";
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

/* Function to POST data */
const postData = async (baseURL, data) => {
    console.log(data);
}

/* Function to GET Project Data */
const getData = async (baseURL) => {
    return {date:"rwerr", weather:"SUnny !", feelings: "Alles vorbei"};
}

/* Function to update UI*/
const updateUi = async (data) => {
    console.log(data);
    const entryHolder = document.getElementById("entryHolder");
    entryHolder.querySelector("#date").innerHTML = data.date;
    entryHolder.querySelector("#temp").innerHTML = data.weather;
    entryHolder.querySelector("#content").innerHTML = data.feelings;
}

/* Global Variables */

// Create a new date instance dynamically with JS
function getCurrentDate() {
    let d = new Date();
    return (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();
}