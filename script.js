const GRID_SIZE = 16;

function onHover(event) {
  this.classList.add('sketched');
}

function generateGrid(size) {
  const grid_container = document.querySelector('#grid-container');
  grid_container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseenter', onHover);
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
  let size = Math.floor(+prompt('How many squares across?'));

  if (size === NaN || size <= 0) {
    size = GRID_SIZE;
  } else if (size > 100) {
    size = 100;
  }

  resetGrid();
  generateGrid(size);
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', replaceGrid);

generateGrid(GRID_SIZE);