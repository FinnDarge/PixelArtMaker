// Select color input
const colorPicker = document.getElementById('colorPicker');

// When a box is clicked, color it in + conditional to avoid that everything gets colored
pixelCanvas.addEventListener('mousedown', function(e) {
  let color = colorPicker.value;
  if (event.target.nodeName === 'TD') {
    e.target.style.backgroundColor = color;
    }
  }
);

// Variables for sizePicker and Canvas
let sizePicker = document.getElementById("sizePicker");
let canvas = document.getElementById("pixelCanvas");

//starting with a 10x10 Grid
makeGrid(10, 10);

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  canvas.firstElementChild.remove();
  makeGrid(height, width);
});

// function to make Grid
function makeGrid(height, width) {
    for (var y = 0; y < height; y++) {
    let row = canvas.insertRow(y);
    for (var x = 0; x < width; x++) {
      let cell = row.insertCell(x);
      }
   }
}

//random Background Color (main code from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php)
function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgba(" + x + "," + y + "," + z + ", " + 0.2 + ")";

    document.body.style.background = bgColor;
    }

random_bg_color();
