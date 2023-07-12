const GRID_SIZE = 16;

function onHover(event) {
  this.classList.add('sketched');
}

const grid_container = document.querySelector('#grid-container');
grid_container.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 1fr)`;

for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseenter', onHover);
  grid_container.appendChild(square);
}