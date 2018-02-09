const clearBtn = document.getElementById("clearBtn");
      generateNewGrid = document.getElementById("generateNewGrid");
      rainbowColors = document.getElementById("Rainbow2");
      container = document.getElementById("grid-container");
      pencilMde = document.getElementById("pencil");
      colorPicker = document.getElementById("colorpick");
      erase = document.getElementById("eraser");

let input = document.querySelector("input[name='gridSet']");
let type = 'pencil';
let colorV;
let isDrawing = false;


generateNewGrid.addEventListener("click", () => {
   if (isDrawing == false) {
      isDrawing = true;
   }
   generateGrid();
})

rainbowColors.addEventListener("click", () => {
   isDrawing = true;
   type = "rainbow";
})

pencilMde.addEventListener("click", () => {
   isDrawing = true;
   type = "pencil";
})

colorPicker.addEventListener("click", () => {
   isDrawing = true;
   type = "custom";
   customColor();
})

erase.addEventListener("click", () => {
   isDrawing = true;
   type = "eraser";
})

clearBtn.addEventListener("click", () => {
   clearGrid();
})

container.addEventListener("mousedown", () => {
   isDrawing = !isDrawing;
})

function generateGrid() {
   restartGrid();
   let gridSize = input.value || 16;
   if (input.value <= 0 || isNaN(input.value)) {
      input.value = 16;
      gridSize = 16;
   }

   document.body.style.setProperty('--gridSize', gridSize);

   for (i = gridSize ** 2; i > 0; i--) {
      const square = document.createElement("div");
      square.classList.add("grid-item");
      container.appendChild(square);
   }
   colorSquares();
}

function colorSquares() {
   let AllSquares = document.querySelectorAll(".grid-item");
   AllSquares.forEach((square) => {

      // FIXME: when painting enabled, it does not immediately act if mouse is already on a cell
      square.addEventListener("mouseover", function() {
         if (isDrawing == true) {
            switch (type) {
               case 'rainbow':
                  this.removeAttribute("style");
                  this.style.background = randomColor();
                  break;
               case 'pencil':
                  pencil(this);
                  break;
               case 'custom':
                  this.removeAttribute("style");
                  this.style.background = customColor(this);
                  break;
               case 'eraser':
                  this.removeAttribute("style");
                  break;
               default:
                  break;
            }
         }
      })
   })
}


function customColor(square) {
   colorPicker.addEventListener("input", () => {
      colorV = colorPicker.style.backgroundColor;
   }, false);

   colorPicker.addEventListener("change", () => {
      colorV = colorPicker.style.backgroundColor;
   }, false);

   return colorV;
}

function pencil(square) {
   square.style.background = "rgb(0, 0, 0)";
   square.style.opacity = (parseFloat((square.style.opacity) + 0) + 0.1);
}

function restartGrid() {
   while (container.firstChild) {
      container.removeChild(container.firstChild);
   }
}

function clearGrid() {
   let AllSquares = document.querySelectorAll(".grid-item");
   AllSquares.forEach(square => {
      square.style.background = "";
      if (square.style.opacity) {
         square.style.opacity = "";
      }
   })
}

generateGrid();
