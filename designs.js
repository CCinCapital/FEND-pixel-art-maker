// Select color input
const colorPicker = document.getElementById('colorPicker');
let color = colorPicker.value;

colorPicker.addEventListener('change', function(){
	color = colorPicker.value;
})

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
	const tbody = document.createElement('tbody');

	// tbody is required for JS to append node into table
	table.appendChild(tbody);

	// draw rows
	for(let r = 0; r < height; r++) {
		tbody.appendChild( makeNewRow(width) );	
	}

	// add event listener to all table cells
	const td = document.getElementsByTagName('td');

	Array.prototype.forEach.call(td, function(td){
		td.addEventListener('click', function(){
			td.style.backgroundColor = color;
		})
	})

	// populate one row with columns = width
	function makeNewRow ( columns ) {
		let tr = document.createElement('tr');

		for(let c = 0; c < columns; c++) {
			tr.appendChild( document.createElement('td') );
		}

		return tr	;
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