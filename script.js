const GRID_SIZE = 16;

const grid_container = document.querySelector('#grid-container');
grid_container.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 1fr)`;

for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  grid_container.appendChild(square);
}