'use strict';

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//console.log('El número creado por "el juego":  ' + getRandomNumber(100));

var inputUSer = document.querySelector(".number")
var btnPrueba = document.querySelector(".btn")

function showNumber (e) {
  console.log(inputUSer.value);
}

btnPrueba.addEventListener("click", showNumber);
