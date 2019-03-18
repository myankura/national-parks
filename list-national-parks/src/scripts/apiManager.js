console.log("apiManager.js");

const getParks = (value) => {
    return fetch("http://localhost:9099/parks")
    .then(response => response.json())
}
getParks()
.then(parsedValue => {
    console.log(parsedValue)
})