var clearBtn = document.getElementById("clearBtn");
var generateNewGrid = document.getElementById("generateNewGrid");
var rainbowColors = document.getElementById("Rainbow2");
var input = document.querySelector("input");
var container = document.getElementById("grid-container");
var defaultShade = document.getElementById("deShade");

var rainbowColorsFired = false;

generateNewGrid.addEventListener("click", function() {
   console.log("Generate btn clicked");
   generateGrid();
})

rainbowColors.addEventListener("click", function() {
   rainbowColorsFired = true;
   colorSquares();
})

defaultShade.addEventListener("click", function() {
   rainbowColorsFired = false;
   colorSquares();
})


function generateGrid() {
   let gridSize = input.value || 16;

   document.body.style.setProperty('--gridSize', gridSize);
   restartGrid();

   for (i = gridSize ** 2; i > 0; i--) {

      // console.log("This is a test of the for loop *** " + [i]);
      const square = document.createElement("div");
      square.classList.add("grid-item");
      container.appendChild(square);
   }
   colorSquares();
}

function colorSquares() {
   let AllSquares = document.querySelectorAll(".grid-item");

   if (rainbowColorsFired) {
      AllSquares.forEach((square) => {
         square.addEventListener("mouseover", function(event) {
            event.target.style.background = randomColor();
            console.log(event.target.style.background);
            // #8c0032
         })
      })
   } else if (!rainbowColorsFired) {
      AllSquares.forEach((square) => {
         square.addEventListener("mouseover", function(event) {
            event.target.style.background = "rgb(115, 115, 115)";
            console.log(event.target.style.background);
         })
      })
   }
}

function restartGrid() {
   while (container.firstChild) {
      container.removeChild(container.firstChild);
   }
}

generateGrid();
