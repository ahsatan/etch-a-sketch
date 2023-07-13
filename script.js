const GRID_SIZE = 16;

let color = 'rgb(0, 0, 0)';

function changeColor(event) {
  const style = getComputedStyle(event.target);
  color = style.backgroundColor;
}

function onHover(event) {
  this.style.backgroundColor = color;
}

function generateGrid(size) {
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
}

function replaceGrid(event) {
  const grid_size = document.querySelector('#grid-size');
  resetGrid();
  generateGrid(grid_size.value);
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', replaceGrid);

const colors = document.querySelectorAll('.color');
colors.forEach(color => color.addEventListener('click', changeColor))

generateGrid(GRID_SIZE);