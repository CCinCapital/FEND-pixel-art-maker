// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const sizePicker = document.getElementById('sizePicker');

sizePicker.addEventListener('submit', function(event){
	event.preventDefault();
	let height = document.getElementById('input_height').value;
	let width = document.getElementById('input_width').value;

	clearGrid();
	makeGrid(height, width);
})

// When size is submitted by the user, call makeGrid()
const table = document.getElementById('pixel_canvas');

function makeGrid(height, width) {
	for(let r = 0; r < height; r++) {
		// insert rows into the table
		const row = table.insertRow(r);
		for(let c = 0; c < width; c++) {
			// insert cells into each of the row
			const cell = row.insertCell(c);

	    cell.addEventListener('click', function(){ 
	      cell.style.backgroundColor = colorPicker.value; 
	    }) 
		}
	}
}

// When new size is submitted by the user, clear previous grid.
function clearGrid() {
	// if child not found => tbody === null
	const tbody = table.firstChild;
	// if tbody !== null, (null == false)
	if (tbody) {
		table.removeChild(tbody);
	}
}