// global variable to pass current colorPicker value.
let color = '#000000'

// Select color input
$('#colorPicker').on('change',function(){
	color = $('#colorPicker').val()
	$('#colorPicker_color').text(color) // show the current color picker value
})

// Select size input
$('#sizePicker').on('submit',function(event){
	event.preventDefault()

	let height = $('#input_height').val()
	let width = $('#input_width').val()

	clearGrid()
	makeGrid(height, width)
})


// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
	// draw rows
	for(let r = 0; r < height; r++) {
		$('#pixel_canvas').append('<tr></tr>')		
	}
	// draw columns
	for(let c = 0; c < width; c++) {
		$('tr').append('<td></td>')
	}
	// add event listener to all table cells
	$('td').on('click',function(){
		$(this).css('background-color',color)
	})

}

// When new size is submitted by the user, clear previous grid.
function clearGrid() {
	$('tbody').remove()
}