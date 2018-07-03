'use strict';

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log('El número creado por "el juego":  ' + getRandomNumber(100));
