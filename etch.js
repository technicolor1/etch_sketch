const clearBtn = document.getElementById("clearBtn");
generateNewGrid = document.getElementById("generateNewGrid");
rainbowColors = document.getElementById("Rainbow2");
container = document.getElementById("grid-container");
pencilMde = document.getElementById("pencil");
colorPicker = document.getElementById("colorpick");

var input = document.querySelector("input[name='gridSet']");
var type = 'pencil';
var colorV;


generateNewGrid.addEventListener("click", () => {
   generateGrid();
})

rainbowColors.addEventListener("click", () => {
   type = "rainbow";
})

pencilMde.addEventListener("click", () => {
   type = "pencil";
})

colorPicker.addEventListener("click", () => {
   type = "custom";
})

function generateGrid() {
   let gridSize = input.value || 16;
   if (input.value <= 0 || isNaN(input.value)) {
      input.value = 16;
      gridSize = 16;
   }

   document.body.style.setProperty('--gridSize', gridSize);
   restartGrid();

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
      square.addEventListener("mouseover", function() {
         if (type === 'rainbow') {
            this.removeAttribute("style");
            this.style.background = randomColor();
         } else if (type === 'pencil') {
            pencil(this);
         } else if (type === 'custom') {
            this.removeAttribute("style");
            this.style.background = customColor(this);
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

function pencil(event) {
   event.style.background = "rgb(0, 0, 0)";
   event.style.opacity = (parseFloat((event.style.opacity) + 0) + 0.1);
}

function restartGrid() {
   while (container.firstChild) {
      container.removeChild(container.firstChild);
   }
}

generateGrid();
