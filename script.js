'use strict';
//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let player = 0;

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore0 = 0;
let currentScore1 = 0;

btnRoll.addEventListener('click', function(){
    //1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    //2. display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for a rolled 1: If true, switch to next player.
    
    if (player === 0 && dice !== 1) {
            currentScore0 += dice;
            current0El.textContent = currentScore0; 
        }
    if (player === 1 && dice !== 1) {
            currentScore1 += dice;
            current1El.textContent = currentScore1;
        }
    if (player === 0 && dice === 1){
        //switch to the next player
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
        player = 1;
    }
    if (player === 1 && dice === 1) {
        player0.classList.add('player--active');
        player1.classList.remove('player--active');
        player = 0;
    } 
});

