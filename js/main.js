'use strict';

var inputUSer = document.querySelector('.number');
var btnPrueba = document.querySelector('.btn');
var messageFeedback = document.querySelector('.feedback');
var conterChance = document.querySelector('.conter');
var conterStart = 0;
var randomNumber = getRandomNumber(100);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);

console.log('El número creado por "el juego":  ', randomNumber);

function showNumber () {
  conterStart = conterStart +1;
  conterChance.innerHTML= conterStart;
  if (inputUSer.value === randomNumber) {
    messageFeedback.value = '¡HAS GANADO, CAMPEONA!';
    return(messageFeedback.value)
  } else if (inputUSer.value > randomNumber) {
    messageFeedback.value = 'demasiado alto';
    return(messageFeedback.value)
} else {
  messageFeedback.value = 'demasiado bajo';
  return(messageFeedback.value)
}

}

btnPrueba.addEventListener('click', showNumber);
