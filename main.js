const rows = 16;
const columns = 16;

function createGrid(rows, columns) {
    
    let gridContainer = document.querySelector('#container');
    let oldGridItems = document.querySelectorAll('#grid-item');
    
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
            gridItem.style.width = '60px';
            gridItem.style.height = '60px';
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
            createGrid(rows, columns);
        });
}


playEtchASketch();