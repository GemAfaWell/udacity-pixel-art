//set global variables
const table = document.querySelector('#pixelCanvas');
const sizePicker = document.querySelector('#sizePicker');
const submit = document.querySelector('#submit');

// table refresher - clears table for every new entry to make room for new table
sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    while (table.firstChild) {
        table.removeChild(table.lastChild);
    }
    // set function values, create table
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    for (let i = 1; i <= height; i++) {
        let row = document.createElement("tr");
        table.appendChild(row);
        for (let j = 1; j <= width; j++) {
            let col = document.createElement("td");
            row.appendChild(col);
            //add color to boxes
            col.addEventListener("click", function() {
                const color = document.querySelector('#colorPicker').value;
                this.style.background = color;
            });
        }
    }
});