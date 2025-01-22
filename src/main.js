"use strict"

const rollButton = document.querySelector('.btn--roll')
const dice = document.querySelector('.dice')
const holdButton = document.querySelector('.btn--hold')
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const newGameButton = document.querySelector('.btn--new')

let active = player1

const handleRollDice = () => {    
    dice.classList.remove('hidden')
    const scoreElement = active.querySelector('.current-score')
    const playerScore = Number(scoreElement.textContent)
    
    const roll = Math.floor(Math.random() * 6) + 1

    dice.src = `/img/dice-${roll}.png`
    scoreElement.textContent = playerScore + roll

    if (roll === 1) {
        handleHold(false)
    }
    
}

const handleActiveStyles = () => {
    if (active === player2) {
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
    } else {
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
    }
}

const handleHold = (roll = true ) => {
    
    let score = active.querySelector('.score')
    const scoreElement = active.querySelector('.current-score')

    if(roll) {
        score.textContent = Number(score.textContent) + Number(scoreElement.textContent) 
    }
   
    scoreElement.textContent = 0
    
    if (Number(score.textContent) >= 20) {
        rollButton.disabled = true
        holdButton.disabled = true
        active.classList.add('player--winner')
    }
    active = active === player1 ? player2 : player1;

    handleActiveStyles()     
}

const handleReset = () => {
    active = player1
    player1.querySelector('.score').textContent = 0
    player2.querySelector('.score').textContent = 0
    player1.querySelector('.current-score').textContent = 0
    player2.querySelector('.current-score').textContent = 0
    active.classList.remove('player--winner')
    rollButton.removeAttribute('disabled')
    holdButton.removeAttribute('disabled')
    handleActiveStyles()
}

rollButton.addEventListener('click', handleRollDice)
holdButton.addEventListener('click', handleHold)
newGameButton.addEventListener('click', handleReset)

dice.classList.add('hidden')