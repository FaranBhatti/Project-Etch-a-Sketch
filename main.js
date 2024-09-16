const rows = 16;
const columns = 16;

function createGrid(rows, columns) {
    
    let gridContainer = document.querySelector('#container');

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

            // create grid item
            let gridItem = document.createElement('div');

            // style it
            gridItem.style.border = 'solid black 0.1px';
            gridItem.style.width = '50px';
            gridItem.style.height = '50px';
            

            // add to container
            gridContainer.appendChild(gridItem);
        }
    }
}