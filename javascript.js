const gridContainer = document.getElementById("grid-container");
let colorOfBoxes = "black";

function createGrid(a) {
    let numOfColumns = a;
    let gridSize = Math.pow(numOfColumns, 2);    

    for (i=0; i< gridSize; i++) {
        let div = document.createElement("div");
        div.classList.add("boxes");
        gridContainer.appendChild(div);
    }; 

    let columnWidth = (440 / numOfColumns);
    gridContainer.style.cssText = `grid-template-columns: repeat(${numOfColumns}, ${columnWidth}px);`;

    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => box.addEventListener("mouseover", function() {changeColor(box)}));

}
createGrid(16);

function removeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

const resizeButton = document.getElementById("resizeButton");
resizeButton.addEventListener("click", function() {
    removeGrid();
    let userInput = prompt("Enter a number between 4 and 100");
    createGrid(userInput);
});

function changeColor(box) {
    box.style.cssText = `background-color: ${colorOfBoxes};`
}

const randomColorsButton = document.querySelector("#random-colors");
randomColorsButton.addEventListener("click", changeColorRandom);
function changeColorRandom() {
     colorOfBoxes = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

const rainbowColorButton = document.querySelector("#rainbow-colors");
rainbowColorButton.addEventListener("click", changeColorRainbow);
function changeColorRainbow() {
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => box.addEventListener("mouseover", () => 
    {colorOfBoxes = `#${Math.floor(Math.random()*16777215).toString(16)}`}));
}

const userColorButton = document.querySelector("#color-chooser");
userColorButton.addEventListener("input", updateColorValue);
function updateColorValue(e) {
    colorOfBoxes = e.target.value;
}



const startOverButton = document.querySelector("#start-over");
startOverButton.addEventListener("click", function() {
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => box.style.cssText = 'white');
});

//this is just making them light grey
/*const greyscaleButton = document.querySelector("#greyscale");
greyscaleButton.addEventListener("click", changeColorGreyscale);

function changeColorGreyscale(box) {
    let opacity = 0.1;
    colorOfBoxes = `rgba(0,0,0,0.1)`;
    }
*/