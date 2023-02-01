const cells = Array.from(document.querySelectorAll('.cell'));
const enemyCells = cells.slice(0,30);
const playerCells = cells.slice(30);
const scoreDisplay = document.querySelector('.score')

let dropCount, speed, score;

document.addEventListener('keydown', e => {
  const player = document.querySelector('.player');

  if(e.key === 'ArrowRight' && playerCells.includes(player.parentElement.nextElementSibling)){
    player.parentElement.nextElementSibling.appendChild(player);
  }

  if(e.key === 'ArrowLeft' && playerCells.includes(player.parentElement.previousElementSibling)){
    player.parentElement.previousElementSibling.appendChild(player);
  }
})



