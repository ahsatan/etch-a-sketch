const COLORS = [
  'red',
  'lightcoral',
  'darkorange',
  'orange',
  'gold',
  'yellow',
  'green',
  'limegreen',
  'navy',
  'deepskyblue',
  'indigo',
  'blueviolet',
  'darkmagenta',
  'violet',
  'mediumvioletred',
  'lightpink',
  'saddlebrown',
  'black',
  'white'
]

let color = '#000000';
let is_rainbow = false;

function setColor(event) {
  is_rainbow = false;
  color = event.target.value;
}

function setRainbow(event) {
  is_rainbow = true;
}

function onHover(event) {
  if (is_rainbow) {
    const random_color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.style.backgroundColor = random_color;
  } else {
    this.style.backgroundColor = color;
  }
}

function generateGrid() {
  const grid_size = document.querySelector('#grid-size');
  const size = grid_size.value;

  const grid_container = document.querySelector('#grid-container');
  grid_container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseenter', onHover);
    square.addEventListener('touchmove', onHover);
    grid_container.appendChild(square);
  }
}

function resetGrid() {
  const grid_container = document.querySelector('#grid-container');
  while (grid_container.firstChild) {
    grid_container.removeChild(grid_container.firstChild);
  }

  generateGrid();
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGrid);

const color_picker = document.querySelector('#color-picker');
color_picker.addEventListener('change', setColor);

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', setRainbow)

generateGrid();