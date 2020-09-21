window.addEventListener('load', start);

// Variáveis Gloabis.
var red = null;
var green = null;
var blue = null;
var rValue = null;
var gValue = null;
var bValue = null;
var divColor = null;

function start() {
  /* starting the Elements

  input's Range e Input's Text

  */
  red = document.querySelector('#red');
  green = document.querySelector('#green');
  blue = document.querySelector('#blue');
  rValue = document.querySelector('#rednumber');
  gValue = document.querySelector('#greennumber');
  bValue = document.querySelector('#bluenumber');
  addEvents();
}

// function to add event's change on inputs range
function addEvents() {
  red.addEventListener('change', changeRed);
  green.addEventListener('change', changeGreen);
  blue.addEventListener('change', changeBlue);
}

function changeRed(event) {
  rValue.value = event.target.value;
  changeColor();
}
function changeGreen(event) {
  gValue.value = event.target.value;
  changeColor();
}
function changeBlue(event) {
  bValue.value = event.target.value;
  changeColor();
}

function changeColor() {
  r = rValue.value;
  g = gValue.value;
  b = bValue.value;
  divColor = document.querySelector('#color');
  divColor.style.backgroundColor = `rgb(${r},${g},${b})`;
}
