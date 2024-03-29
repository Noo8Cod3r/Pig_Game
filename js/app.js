
let scores, roundScores, activePlayer;
let gamePlaying = true;


init()

// On Button click - Generates random #, Displays results, and Adds up points
document.querySelector('.btn-roll').addEventListener('click', () => {
  if(gamePlaying) {
    // Generates Random #
    let dice = Math.floor(Math.random() * 6) + 1; 

    // Displays Results
    let diceRoll = document.querySelector('.dice');
    diceRoll.style.display = 'block';
    diceRoll.src = 'dice-' + dice + '.png';

    // Adds up points
    if ( dice !== 1 ) {
      roundScores += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScores
    } else {
      nextPlayer()
    }
  }
  
})


document.querySelector('.btn-hold').addEventListener('click', () => {
  if(gamePlaying) {
    // Adds Score
    scores[activePlayer] += roundScores;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

  if (scores[activePlayer] >= 20) {
    document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'
    document.querySelector('.dice').style.display = 'none'
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
    gamePlaying = false
  } else {
      nextPlayer()
    }
  }
  
})



const nextPlayer = () => {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  roundScores = 0
  // Resets Current User to 0
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'
  // Toggle the active Class
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')
  // Dice does not display
  document.querySelector('.dice').style.display = 'none'
}

document.querySelector('.btn-new').addEventListener('click', init)

function init () {
  scores = [ 0, 0 ];
  roundScores = 0;
  activePlayer = 0;

// Sets the Dice dispaly to none
document.querySelector('.dice').style.display = 'none'

// Set all numbers to 0
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('Winner')
document.querySelector('.player-1-panel').classList.remove('Winner')
document.querySelector('.player-0-panel').classList.remove('active')
document.querySelector('.player-1-panel').classList.remove('active')
document.querySelector('.player-0-panel').classList.add('active')

}





