
// Runs the function on page load
const mainDiv = document.getElementById("main");
document.body.onload = addElement(16,16);



// Function to add the 16 x 16 grid
function addElement(row, column) {
    removeAllChildNodes(mainDiv);

    for(let i = 0; i < row; i++) {
        // Creates the Div row
        let newDiv = document.createElement("div");

        // Adds the class to the div row
        newDiv.className = "etch-row";

        // Appends the new row to Main
        mainDiv.appendChild(newDiv);

        for(let i = 0; i < column; i++) {
            let rowItem = document.createElement("div");
            rowItem.className = "etch-item";
            newDiv.appendChild(rowItem);
        }
    }

    $(document).ready(function(){
        $(".etch-item").hover(function(){
            $(this).css("background-color", "black");
        }); 
    });
}

// Function to reset grid items to white
function reset() {
	var elements = document.getElementsByClassName('etch-item');
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "white";
	}
}

function alertPrompt() {
    let rowDimensions = prompt("Enter Row Value: ", "16");
    let columnDimensions = prompt("Enter Column Value: ", "16");
    let addRow;
    let addColumn;
    if(rowDimensions == null || rowDimensions == "") {
        addRow = 1;
    } else {
        addRow = rowDimensions;
    }
    if(columnDimensions == null || columnDimensions == "") {
        addColumn = 1;
    } else {
        addColumn = columnDimensions;
    }
    addElement(addRow,addColumn);
}

// Gets the enter box values
function gridDimensions() {
    // Logs the input values
    console.log(document.getElementById("rows").value);
    console.log(document.getElementById("columns").value);

    // Determines the row value
    let rows = document.getElementById("rows").value;
    if (rows > 100) {
        rows = 100;
        alert("Maximum row size is 100.");
    } else if (rows < 1) {
        rows = 1;
        alert("Minimum row size is 1.");
    } else if (rows == null || rows == "") {
        rows = 1;
    }

    // Determines the column value
    let columns = document.getElementById("columns").value;
    if (columns > 100) {
        columns = 100;
        alert("Maximum column size is 100.");
    } else if (columns < 1) {
        columns = 1;
        alert("Minimum column size is 1.");
    } else if (columns == null || rows == "") {
        columns = 1;
    }


    addElement(rows,columns);
}

// Removes child elements
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}