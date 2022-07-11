const table = document.querySelector('#pixelCanvas');
const sizePicker = document.querySelector('#sizePicker');
const submit = document.querySelector('#submit');

sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    while (table.firstChild) {
        table.removeChild(table.lastChild);
    }
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    for (let i = 1; i <= height; i++) {
        let row = document.createElement("tr");
        table.appendChild(row);
        for (let j = 1; j <= width; j++) {
            let col = document.createElement("td");
            row.appendChild(col);
            col.addEventListener("click", function() {
                const color = document.querySelector('#colorPicker').value;
                this.style.background = color;
            });
        }
    }
});