'use strict';

//QUERY SELECTORS

const userNumberInput = document.querySelector('.js__userNumberInput');
const userNumberBtn = document.querySelector('.js__userNumberBtn');
const resultPhrase = document.querySelector('.js__resultPhrase');
const resultAttempts = document.querySelector('.js__resultAttempts');
const resetBtn = document.querySelector('.js__resetBtn');

// VARIABLES de DATOS

const initialMessage = 'Escribe un número y dale a Prueba';
let randomNumber = getRandomNumber(100); 
let attempts = 0;
const attemptLimit = 10;

//FUNCTIONS

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

function getUserNumber() {
    return parseInt(userNumberInput.value);
}

function displayResult(message) {
    resultPhrase.innerHTML = message;
}

function displayAttempts() {
    attempts++;
    resultAttempts.innerHTML = `Número de intentos: ${attempts}`;
    if (attempts >= attemptLimit) {
        handleGameOver();
    } 
}

function compareNumbers() {
    const userNumber = getUserNumber();
    if (userNumber === randomNumber) {
        displayResult('Has ganado, ¡campeona!');
        userNumberBtn.disabled = true;
    } else if (userNumber < 1 || userNumber > 100) {
        displayResult('El número debe estar entre 1 y 100');
    } else if (userNumber > randomNumber) {
        displayResult('Demasiado alto');
    } else if (userNumber < randomNumber) {
        displayResult('Demasiado bajo');
    } 
}

function handleClickButton(event) {
    event.preventDefault();
    compareNumbers();
    displayAttempts();
}

function handleGameOver() {
    resultPhrase.innerHTML = `¡El juego ha terminado! Era el ${randomNumber}.`;
    emptyInput()
    attempts = 0;
    userNumberBtn.disabled = true;
}

function resetGame() {
    attempts = 0;
    randomNumber = getRandomNumber(100);
    displayResult(initialMessage);
    resultAttempts.innerHTML = `Número de intentos: ${attempts}`;
    userNumberBtn.disabled = false;
    emptyInput()
}

function emptyInput() {
    userNumberInput.value = '';
}

//EVENT

userNumberBtn.addEventListener('click', handleClickButton);

resetBtn.addEventListener('click', resetGame);

//CÓDIGO AL CARGAR LA PÁGINA

window.addEventListener('load', (event) => {
    resultPhrase.innerHTML = initialMessage;
});

