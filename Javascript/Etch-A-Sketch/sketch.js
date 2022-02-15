
// Runs the function on page load
document.body.onload = addElement;

const mainDiv = document.getElementById("main");

// Function to add the 16 x 16 grid
function addElement() {
    for(let i = 0; i < 16; i++) {
        // Creates the Div row
        let newDiv = document.createElement("div");

        // Adds the class to the div row
        newDiv.className = "etch-row";

        // Appends the new row to Main
        mainDiv.appendChild(newDiv);

        for(let i = 0; i < 16; i++) {
            let rowItem = document.createElement("div");
            rowItem.className = "etch-item";
            newDiv.appendChild(rowItem);
        }
    }
}

// Function to reset grid items to white
function reset() {
	var elements = document.getElementsByClassName('etch-item');
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "white";
	}
}