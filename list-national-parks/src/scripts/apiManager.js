console.log("apiManager.js");



const getParks = (value) => {
    return fetch("http://localhost:9099/parks")
        .then(response => response.json())
}

getParks()
    .then(parsedValue => {
        console.log(parsedValue)
        for (let i = 0; i < parsedValue.length; i++) {
            let articleItem = document.createElement("article");
            articleItem.className = "articleClass";

            //creates elements for textContent to be placed into.
            let headerEl = document.createElement("h3");
            let paragraphEl = document.createElement("p");

            //does something
            headerEl.textContent = "Name : " + parsedValue[i].name;
            paragraphEl.textContent = "State : " + parsedValue[i].state;

            articleItem.appendChild(headerEl);
            articleItem.appendChild(paragraphEl)

            if (parsedValue[i].visited){
                articleItem.classList.add("visited");
            } else {
                articleItem.classList.add("notVisited");
            }

            container.appendChild(articleItem)
        }

    })