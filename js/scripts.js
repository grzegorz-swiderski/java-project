﻿// scripts.js


var newGameBtn = document.getElementById('js-newGameButton');
var pickRock = document.getElementById('js-playerPick_rock');
    pickPaper = document.getElementById('js-playerPick_paper');
    pickScissors = document.getElementById('js-playerPick_scissors');
    
var gameState = 'notStarted',  
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    }
    
var newGameElem = document.getElementById('js-newGameElement');
    pickElem = document.getElementById('js-playerPickElement');
    resultsElem = document.getElementById('js-resultsTableElement');

var playerPointsElem = document.getElementById('js-playerPoints');
    playerNameElem = document.getElementById('js-playerName');
    computerPointsElem = document.getElementById('js-computerPoints');

var playerPickElem = document.getElementById('js-playerPick');
    computerPickElem = document.getElementById('js-computerPick');
    playerResultElem = document.getElementById('js-playerResult');
    computerResultElem = document.getElementById('js-computerResult');

newGameBtn.addEventListener('click', newGame);

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });
	
function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Try again - maybe now?';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

setGameElements();
	
function newGame() {
  player.name = prompt('Please enter your name', 'Player name...');
  
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();
    playerNameElem.innerHTML = player.name;  
  }

}

function playerPick(playerPick) {
    console.log(playerPick);
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}
	
function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
        playerResultElem.innerHTML = 'Draw!';
        computerResultElem.innerHTML = 'Draw!';
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = 'You win!';
        computerResultElem.innerHTML = 'Computer loose!';
        player.score++;
        
        
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = 'Computer win!';
        playerResultElem.innerHTML = 'You loose!';
        computer.score++;
   	
    }
	
	setGamePoints(); 
	endedGame();
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function endedGame() {
	
	 if (player.score == 10) {
    	gameState = 'ended';
    	setGameElements();
        alert('You are amaizing! You win :D');
        
    } else if (computer.score == 10) {
        gameState = 'ended';
    	setGameElements();
        alert('Computer win! Maybe next time...');
    }
}
