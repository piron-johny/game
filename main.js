const board = document.querySelector('#board');
const colors = ['#199c68', '#31199c', '#c41c46', '#d4e98a', '#199c9c', '#9c1982']
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mousemove', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square);
}


function setColor(elem) {
  const color = getRandomColor();
  elem.style.background = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
  elem.style.background = '#1d1d1d'
  elem.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}