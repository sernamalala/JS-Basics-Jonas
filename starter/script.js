'use strict';
//DOM MANIPULATION
const message = document.querySelector(".message");
console.log(message)

const score = document.querySelector(".score");
const number = document.querySelector(".number");

score.textContent = 13;
number.textContent = 20;

const guess = Number(document.querySelector(".guess").value);

//EVENT LISTENER

const checkButton = document.querySelector(".check");
checkButton.addEventListener("click",function(){
    const guessValueFromUser = Number(document.querySelector(".guess").value);
    console.log(guessValueFromUser, typeof guess);

    //evaluation

    if(!guess){
        message.textContent = "❌ Not a number";
    }
});