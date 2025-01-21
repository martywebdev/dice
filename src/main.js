"use strict"

const roll = document.querySelector('.btn--roll')
const dice = document.querySelector('.dice')

const handleRollDice = () => {
    dice.classList.remove('hidden')
    const roll = Math.floor(Math.random() * 6) + 1
    dice.src = `/img/dice-${roll}.png`
}

roll.addEventListener('click', handleRollDice)

const initialize = () => {
    dice.classList.add('hidden')
}

initialize()