console.log("domManager.js");
//container is ID for the div thats in index.html
const container = document.querySelector("#display-container");

//fragment
let frag = document.createDocumentFragment();

//function to create basic elements to append to DOM
function createElement (elementName, text, content, class1){
    let element = document.createElement(elementName);
    element.type = text;
    element.textContent = content;
    element.className = class1;
    frag.appendChild(element);
}

//create title
createElement("h1", "", "National Parks", "parks_title");


container.appendChild(frag);

