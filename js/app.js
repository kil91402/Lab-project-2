'use strict'

let userScore = 0
let answerOne = prompt("Do I like to travel?").toLowerCase()
let answerTwo = prompt("Am I a people person?").toLowerCase()
let answerThree = prompt ("Do I love my job?").toLowerCase()
let answerFour = prompt ("Did I win a state championship in High School?").toUpperCase()
let answerFive = prompt ("Have I ever lived outside of the United States?").toUpperCase()
let answerSix = prompt ("Guess my favorite number.")
let favNum = 5
let answerSeven = prompt ("Name one of my favorite sports.")
// if 'y' then you are correct

if(answerOne === 'y' ||
 answerOne ==='yes') {
   userScore ++;
} else {
    // if 'n' then you are incorrect
    alert("You are incorrect!");
}    

if(answerTwo === 'y' ||
 answerTwo ==='yes') {
    userScore ++;
} else {
    // if 'n' then you are incorrect
    alert("You are incorrect!");
}

if(answerThree === 'n' ||
 answerThree ==='no') {
    userScore ++;
} else {
    // if 'y' then you are incorrect
    alert("You are incorrect!");
}

if(answerFour === 'y' ||
 answerFour ==='yes') {
    userScore ++;
} else {
    // if 'n' then you are incorrect
    alert("You are incorrect!")
}

if(answerFive === 'n' ||
answerFive ==='no') {
    userScore ++;
} else {
   // if 'y' then you are incorrect
   alert("Negative!!!");
}

while(counter <= 6){
    let number = prompt("Guess my favorite number")
    console.log("user guess num it: " + number)
    if (number < 5) {
        alert('Sorry, too low!!');
        counter ++;
    }
    else if (number > 5) {
        alert('Nope, too high!!');
        counter ++;
    }
    else if (number == 5) {
        userScore ++;
        break;
    } else {
        alert('Sorry, game over!! My favorite number is ' + favNum); 
    }
}

let answer;
let correctAns = "football" || "basketball" || "tennis" || "baseball" || "golf" || "hockey";
let counter = 0
let question = "Choose one of my favorite sports.";
let a = true;

while(a && counter <=6){
    answer = prompt (question);
    if(answer === correctAns) {
        userScore ++;
    a = false
    } else {
        counter ++;
        console.log("Sorry, Gameover.");
    }
} 

alert('Your total is' + userScore + 'points.');


//Lab-03 Done


