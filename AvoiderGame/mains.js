const cells = Array.from(document.querySelectorAll('.cell'));
const enemyCells = cells.slice(0,30);
const playerCells = cells.slice(30);
const scoreDisplay = document.querySelector('.score');

let dropCount, speed, score;

reset()

document.addEventListener('keydown', (e) => {
  if(!dropCount){
    startGame()
  }

  const player = document.querySelector('.player');

  if(e.key === 'ArrowLeft' && playerCells.includes(player.parentElement.previousElementSibling)){
    player.parentElement.previousElementSibling.appendChild(player)
  }

  if(e.key === 'ArrowRight' && playerCells.includes(player.parentElement.nextElementSibling)){
    player.parentElement.nextElementSibling.appendChild(player)
  }
})

function reset(){
  score = 0;
  dropCount = 0;
  speed = 1000;
  scoreDisplay.innerHTML = '0';
  

  cells.forEach(cell => {
    cell.innerHTML = '';
  })
  playerCells[1].innerHTML = '<div class="player"></div>';
  console.log(playerCells[1])
}

function startGame(){
  reset();
  loop();
}

function loop(){
  let stopGame = false;

  for( let i = enemyCells.length - 1; i >= 0; i-- ){
    const cell = enemyCells[i];
    const nextCell =  cells[i+3];
    const enemy = cell.children[0];

    if(!enemy){
      continue;
    }

    nextCell.appendChild(enemy)

    if (playerCells.includes(nextCell)) {
      if(nextCell.querySelector('.player')){
        stopGame = true;
      }
      else{
        speed = Math.max(500,speed - 25);
        score++ ;
        scoreDisplay.innerHTML = score;
        enemy.remove();
      }
    }
  }

  if( dropCount % 2 === 0){
    const position = Math.floor( Math.random() * 3)
    enemyCells[position].innerHTML = '<div class="enemy"></div>';
  }
  
  if(stopGame){
    alert(`Score:${score}. 
          do you want to restart?`)
    reset()
  }else{
    dropCount++;
    setTimeout(loop, speed)
    
  }
}
