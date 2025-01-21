"use strict"

const roll = document.querySelector('.btn--roll')
const dice = document.querySelector('.dice')
const current_0 = document.getElementById('current--0')

const handleRollDice = () => {
    const current0 = Number(current_0.textContent)
    dice.classList.remove('hidden')
    const roll = Math.floor(Math.random() * 6) + 1
    dice.src = `/img/dice-${roll}.png`

    current_0.textContent = current0 + roll
}

roll.addEventListener('click', handleRollDice)

const initialize = () => {
    dice.classList.add('hidden')
}

initialize()