'use strict';
const minNum = 1;
const maxNum = 20;
let randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);
console.log(randomNumber);

let userInput = document.querySelector(".guess");
let checkBTN = document.querySelector(".check");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");

checkBTN.addEventListener("click", function () {
    console.log("USER:",userInput.value)

    let guess = Number(userInput.value);

    if (guess === randomNumber) {
        score.textContent = Number(score.textContent) + 1;
        if(Number(highscore.textContent) < Number(score.textContent)){
            highscore.textContent = Number(score.textContent);
        }
        
    }
    else{
        score.textContent = Number(score.textContent) - 1;
    }
})

