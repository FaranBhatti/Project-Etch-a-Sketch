let CANVAS_PIXELS = 960;


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

function playEtchASketch() {

    let resetBtn = document.querySelector("#reset");

        resetBtn.addEventListener('click', (e) => {
            squaresPerSide = prompt("How many squares per side do you want for the new grid?");
            if (CANVAS_PIXELS % squaresPerSide === 0) {
                createGrid(squaresPerSide)
            } else {
                console.log("That doesn't fit nicely into the canvas");
            }
        });
}

playEtchASketch();