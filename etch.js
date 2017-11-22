$(document).ready(function() {

// generate 16x16 grid (default)
// also generate other size grids
function generateGrid(x) {
 	for (var rows = 0; rows < x; rows++) {
    	for (var columns = 0; columns < x; columns++) {
      	$('#container').append("<div class='cell'></div>");
      };
    };
   $('.cell').width(720/x);
   $('.cell').height(720/x);
		paint();
};

// paint cells with default color
function paint() {
	$('.cell').hover(function() {
		$(this).css('background-color', 'hsl(0, 0%, 90%)');
});
}

// Clears grid
$("#clearBtn").on("click", function() {
	$('.cell').css('background-color', 'white');
});

// generate a new grid
$("#generateNewGrid").on("click", function() {
	var n = prompt("Please enter size of grid (not too high, else page will lag!)");

	if (n === null) {
		return;
	}

	while (isNaN(n) || n === "" || n <= 0) {
		var n = prompt("A (positive) number, please");

		if (n === null) {
		return;
		}
	}
	$('.cell').remove();
	generateGrid(n);
});

// random colors
$('#Rainbow2').on('click', function() {
	$('.cell').hover(function() {
		$(this).css('background-color', randomColor());
	});
});

// default shade
$('#deShade').on('click', function() {
	paint();
});


generateGrid(16);
});
