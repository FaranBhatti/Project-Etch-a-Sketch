let CANVAS_PIXELS = 960;

/**
 * Creates the sketchpad for Etch a Sketch game dynamically based off of the number of squares a user wants on one side.
 * 
 * @param {integer} squaresPerSide 
 */
function createGrid(squaresPerSide) {
    
    let gridContainer = document.querySelector('#container');
    let oldGridItems = document.querySelectorAll('#grid-item');
    let rows = squaresPerSide;
    let columns = squaresPerSide;
    let sideSize = (CANVAS_PIXELS / squaresPerSide);

    if (oldGridItems) {
        oldGridItems.forEach(oldGridItem => {
            oldGridItem.remove();
        });
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

            // create grid item
            let gridItem = document.createElement('div');

            // style it
            gridItem.style.width = sideSize + 'px';
            gridItem.style.height = sideSize + 'px';
            gridItem.id = "grid-item";
            
            gridItem.addEventListener('mouseover', (e) => {
                gridItem.style.backgroundColor = 'black';
            });

            // add to container
            gridContainer.appendChild(gridItem);
        }
    }
}

/**
 * Function that checks the user's input of squares per side
 * @param   {integer} squaresPerSide 
 * @returns {boolean} true if the chosen number of squares per side is valid; false if chosen number of squares per side is not valid
 */
function isChosenSquaresPerSideValid(squaresPerSide) {

    const isSquaresChosenOdd = (CANVAS_PIXELS % squaresPerSide == 0) === 0;
    const isSquaresChosenGreaterThan100 = (squaresPerSide > 100) === 0;

    if (isSquaresChosenOdd) {
        return false;
    }

    if (isSquaresChosenGreaterThan100) {
        return false;
    }

    return true;
}


function playEtchASketch() {

    let resetBtn = document.querySelector("#reset");

        resetBtn.addEventListener('click', (e) => {

            squaresPerSide = prompt("How many squares per side do you want for the new grid?");

            if (isChosenSquaresPerSideValid(squaresPerSide)) {
                createGrid(squaresPerSide);
            } else {
                console.log("Chosen squares per side didn't pass the checks. Please input an even number of squares & don't choose a number greater than 100.");
            }
        });
}

playEtchASketch();