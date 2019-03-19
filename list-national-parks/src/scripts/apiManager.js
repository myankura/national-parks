console.log("apiManager.js");


//GET request
const getParks = () => {
    return fetch("http://localhost:9099/parks")
        .then(response => response.json())
}

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