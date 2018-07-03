'use strict';


// Step 2
// function getRandomNumber(max) {
//   return Math.ceil(Math.random() * max);
// }
//
// //console.log('El número creado por "el juego":  ' + getRandomNumber(100));



// Step 3
// var inputUSer = document.querySelector(".number")
// var btnPrueba = document.querySelector(".btn")
//
// function showNumber (e) {
//   console.log(inputUSer.value);
// }
//
// btnPrueba.addEventListener("click", showNumber);


//Step 4
// function getRandomNumber(max) {
//   return Math.ceil(Math.random() * max);
// }
//
// var randomNumber = getRandomNumber(100);
//
// var inputUSer = document.querySelector(".number")
// var btnPrueba = document.querySelector(".btn")
// var messageFeedback = document.querySelector(".feedback")
//
// console.log('El número creado por "el juego":  ', randomNumber);
//
// function showNumber () {
//   if (inputUSer.value == randomNumber) {
//     messageFeedback.value = "¡HAS GANADO, CAMPEONA!";
//     return(messageFeedback.value)
//   } else if (inputUSer.value > randomNumber) {
//     messageFeedback.value = "demasiado alto";
//     return(messageFeedback.value)
// } else {
//   messageFeedback.value = "demasiado bajo";
//   return(messageFeedback.value)
// }
// }
//
// btnPrueba.addEventListener("click", showNumber);

// Step 05
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

var randomNumber = getRandomNumber(100);

var inputUSer = document.querySelector(".number");
var btnPrueba = document.querySelector(".btn");
var messageFeedback = document.querySelector(".feedback");
var conterChance = document.querySelector(".conter");
var conterStart = 0

console.log('El número creado por "el juego":  ', randomNumber);

function showNumber () {
  if (inputUSer.value == randomNumber) {
    messageFeedback.value = "¡HAS GANADO, CAMPEONA!";
    return(messageFeedback.value)
  } else if (inputUSer.value > randomNumber) {
    messageFeedback.value = "demasiado alto";
    return(messageFeedback.value)
} else {
  messageFeedback.value = "demasiado bajo";
  return(messageFeedback.value)
}
conterStart = conterStart +1;
conterChance.innerHTML= conterStart;
}

btnPrueba.addEventListener("click", showNumber);
