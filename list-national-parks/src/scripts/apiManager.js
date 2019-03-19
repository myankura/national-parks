//console.log("apiManager.js");

//GET national parks API
const getParks = () => {
    return fetch("http://localhost:9099/parks")
        .then(response => response.json())
}

//GET DarkSky API
const getDarkSky = (latitude, longitude) => {
    return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/2bfe4a70ec023acfe9dac6b2c788f175/${latitude},${longitude}`)
        .then(response => response.json())
}