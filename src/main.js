"use strict"

const roll = document.querySelector('.btn--roll')
const dice = document.querySelector('.dice')
const hold = document.querySelector('.btn--hold')
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')

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

const handleHold = (roll = true ) => {
    
    let score = active.querySelector('.score')
    const scoreElement = active.querySelector('.current-score')

    if(roll) {
        score.textContent = Number(score.textContent) + Number(scoreElement.textContent) 
    }
   
    scoreElement.textContent = 0
    
    active = active === player1 ? player2 : player1;

    if (active === player2) {
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
    } else {
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
    }
}

roll.addEventListener('click', handleRollDice)
hold.addEventListener('click', handleHold)

const initialize = () => {
    dice.classList.add('hidden')
}

initialize()