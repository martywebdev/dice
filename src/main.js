"use strict"

const roll = document.querySelector('.btn--roll')
const dice = document.querySelector('.dice')
const hold = document.querySelector('.btn--hold')
const player1 = document.getElementById('current--0')
const player2 = document.getElementById('current--1')

let active = player1

const handleRollDice = () => {
    
    dice.classList.remove('hidden')

    const score1 = Number(player1.textContent)
    const score2 = Number(player2.textContent)



    const roll = Math.floor(Math.random() * 6) + 1

    dice.src = `/img/dice-${roll}.png`

    player1.textContent = score1 + roll
}

const handleHold = () => {
    active = player2

    if (active == player2) {
        player1.classList.remove('player--active')
        player2.classList.add('player--active')
    } else {
        player2.classList.remove('player--active')
        player1.classList.add('player--active')
    }
    console.log(active)
}

roll.addEventListener('click', handleRollDice)
hold.addEventListener('click', handleHold)

const initialize = () => {
    dice.classList.add('hidden')
}

initialize()