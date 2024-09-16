const rows = 16;
const columns = 10;

let gridContainer = document.querySelector('#container');

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        
        // create a grid item
        let gridItem = document.createElement('div');
        
        // give it it's style
        gridItem.style.border = 'solid black 0.1px';
        gridItem.style.width = "50px";
        gridItem.style.height = "50px";
        gridContainer.appendChild(gridItem);
    }   
}