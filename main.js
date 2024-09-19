let CANVAS_PIXELS = 450;
let RGB = false;

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

                if(RGB) {

                } else {
                    gridItem.style.backgroundColor = 'black';
                }
            });

            // add to container
            gridContainer.appendChild(gridItem);
        }
    }
}


/**
 * Clears the sketchpad
 */
function clearScreen() {

    let oldGridItems = document.querySelectorAll('#grid-item');

    if (oldGridItems) {
        oldGridItems.forEach(oldGridItem => {
            oldGridItem.remove();
        });
    }
}

/**
 * Function that checks the user's input of squares per side
 * @param   {integer} squaresPerSide 
 * @returns {boolean} true if the chosen number of squares per side is valid; false if chosen number of squares per side is not valid
 */
function isChosenSquaresPerSideValid(squaresPerSide) {

    const isNotDivisible = (CANVAS_PIXELS % squaresPerSide) !== 0;
    const isSquaresChosenGreaterThan100 = squaresPerSide > 100;

    if (isNotDivisible) {
        return false;
    }

    if (isSquaresChosenGreaterThan100) {
        return false;
    }

    return true;
}

/**
 * 
 * @returns string to set css style property for javascript
 */
function generateRandomRGB() {

    let red = Math.round(getRandomNumber(0, 255));
    let green = Math.round(getRandomNumber(0, 255));
    let blue = Math.round(getRandomNumber(0, 255));

    return ("rgb(" + red + ", " + green + ", " + blue + ")")
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function playEtchASketch() {

    let changeGridBtn = document.querySelector("#change-grid");
    let clearScreenBtn = document.querySelector("#clear-btn");
    let rgbBtn = document.querySelector("#rgb-btn");

    changeGridBtn.addEventListener('click', (e) => {
        squaresPerSide = prompt("Input Grid Size (1-100)");

        if (isChosenSquaresPerSideValid(squaresPerSide)) {
            createGrid(squaresPerSide);
        } else {
            window.alert("Invalid input.");
        }
    });

    clearScreenBtn.addEventListener('click', (e) => {
        clearScreen();
    })
    
    rgbBtn.addEventListener('click', (e) => {
        RGB = !RGB;

        if(RGB) {
            rgbBtn.textContent = "Rainbow Mode";
            rgbBtn.style.backgroundColor = "green";
        } else {
            rgbBtn.textContent = "Rainbow Mode";
            rgbBtn.style.backgroundColor = "red";
        }
    })
    
}

playEtchASketch();