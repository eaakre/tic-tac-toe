const spot1 = document.getElementById('spot-1');
const spot2 = document.getElementById('spot-2');
const spot3 = document.getElementById('spot-3');
const spot4 = document.getElementById('spot-4');
const spot5 = document.getElementById('spot-5');
const spot6 = document.getElementById('spot-6');
const spot7 = document.getElementById('spot-7');
const spot8 = document.getElementById('spot-8');
const spot9 = document.getElementById('spot-9');

const playerTurn = document.getElementById('player-turn');
const player1Wins = document.getElementById('player1-wins');
const player2Wins = document.getElementById('player2-wins');

let p1Wins = 0;
let p2Wins = 0;

let player1turn = true;
let allSpots = [spot1, spot2, spot3, spot4, spot5, spot6, spot7, spot8, spot9]

let winningCases = [
  [spot1, spot2, spot3], 
  [spot4, spot5, spot6], 
  [spot7, spot8, spot9], 
  [spot1, spot5, spot9], 
  [spot3, spot5, spot7], 
  [spot1, spot4, spot7], 
  [spot2, spot5, spot8], 
  [spot3, spot6, spot9]
]

function checkWin(value, player) {
  for (let i=0; i<winningCases.length; i++) {
    let option = winningCases[i]
    if (option[0].innerHTML == value && option[1].innerHTML == value && option[2].innerHTML == value) {
      playerTurn.innerHTML = `Game Over! ${player} wins!`
      option[0].style.background = "green";
      option[1].style.background = "green";
      option[2].style.background = "green";
      for (let i=0; i<allSpots.length; i++) {
        allSpots[i].disabled = true;
      }
      if (player == "Player 1") {
        p1Wins += 1;
        player1Wins.innerHTML = p1Wins
      } else {
        p2Wins += 1;
        player2Wins.innerHTML = p2Wins
      }
    }
  }
}

function playMove(spot) {
  if (player1turn) {
    if (spot.innerHTML == '') {
      spot.innerHTML = 'X';
      player1turn = !player1turn;
      playerTurn.innerHTML = "Player 2's Turn";
      checkWin('X', 'Player 1')
    } else {console.log('Cannot play here.')}
  } else {
    if (spot.innerHTML == '') {
      spot.innerHTML = 'O';
      player1turn = !player1turn;
      playerTurn.innerHTML = "Player 1's Turn";
      checkWin('O', 'Player 2')
    } else {console.log('Cannot play here.')}
  }
}

function restartGame() {
  for (let i=0; i<allSpots.length; i++) {
    allSpots[i].innerHTML = '';
    allSpots[i].style.background = "rgb(254, 252, 252";
    allSpots[i].disabled = false;
  }
  player1turn = true;
  // p1Wins = 0;
  // player1Wins.innerHTML = p1Wins;
  // p2Wins = 0;
  // player2Wins.innerHTML = p2Wins;
  playerTurn.innerHTML = "Player 1's Turn"
}