//console.log("domManager.js");

//container is ID for the div thats in index.html
const container = document.querySelector("#display-container");

//Call getParks function.
getParks()
    .then(natlParks => {
        console.log(natlParks)
        for (let i = 0; i < natlParks.length; i++) {
            let articleItem = document.createElement("article");
            articleItem.className = "articleClass";

            //creates elements for textContent to be placed into.
            let headerEl = document.createElement("h3");
            let paragraphEl = document.createElement("p");

            //grab data from api by key and concatenates element
            headerEl.textContent = "Name : " + natlParks[i].name;
            paragraphEl.textContent = "State : " + natlParks[i].state;

            //appends value from api to DOM.
            articleItem.appendChild(headerEl);
            articleItem.appendChild(paragraphEl);

            //create park object.
            let parkObj = getDarkSky(natlParks[i].latitude, natlParks[i].longitude).then(weather => {

                //create object to store each current, weekly, & hourly weather reports for each park.
                let natlParkWeather = {
                    current: weather.currently.summary,
                    weekly: weather.hourly.summary,
                    hourly: weather.daily.summary
                }

                // create variables to store the values from DarkSky API
                let current = natlParkWeather.current;
                let today = natlParkWeather.weekly;
                let weekly = natlParkWeather.hourly;
                console.log(current, today, weekly)

                //Create an unordered list to place each list item into
                let unorderedItem = document.createElement("ul")
                unorderedItem.className = "weather";
                //create list item elements
                let currentEl = document.createElement("li");
                let todayEl = document.createElement("li");
                let weeklyEl = document.createElement("li");

                //print text to each element
                currentEl.textContent = "Current : " + current;
                todayEl.textContent = "Today : " + today;
                weeklyEl.textContent = "Weekly : " + weekly;

                //append each element to DOM
                unorderedItem.appendChild(currentEl);
                unorderedItem.appendChild(todayEl);
                unorderedItem.appendChild(weeklyEl);
                //append unorderedItem elements to articleItem
                articleItem.appendChild(unorderedItem);

                return natlParkWeather;
            })


            //checks to see if national park has been visited or not.
            if (natlParks[i].visited) {
                articleItem.classList.add("visited");
            } else {
                articleItem.classList.add("notVisited");
            }


            //targets display-container
            container.appendChild(articleItem)
        }

    })

//fragment
let frag = document.createDocumentFragment();

//function to create basic elements to append to DOM
function createElement(elementName, text, content, class1) {
    let element = document.createElement(elementName);
    element.type = text;
    element.textContent = content;
    element.className = class1;
    frag.appendChild(element);
}


//create title
createElement("h1", "", "National Parks", "parks_title");
container.appendChild(frag);