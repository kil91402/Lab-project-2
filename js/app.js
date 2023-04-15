'use strict'

let answerOne = prompt("Do I like to travel?").toLowerCase()
let answerTwo = prompt("Am I a people person?").toLowerCase()
let answerThree = prompt ("Do I love my job?").toLowerCase()
let answerFour = prompt ("Did I win a state championship in High School?").toLowerCase()


// if 'y' then you are correct
if(answerOne === 'y' ||
 answerOne ==='yes'){
    alert("You are correct!")
    console.log("You are correct.");
} else {
    // if 'n' then you are incorrect
    alert("You are incorrect!")
    console.log("You are incorrect!");
}
if(answerTwo === 'y' ||
 answerTwo ==='yes'){
    alert("You are correct!")
    console.log("You are correct.");
} else {
    // if 'n' then you are incorrect
    alert("You are incorrect!")
    console.log("You are incorrect!");
}
if(answerThree === 'n' ||
 answerThree ==='no'){
    alert("You are correct!")
    console.log("You are correct.");
} else {
    // if 'y' then you are incorrect
    alert("You are incorrect!")
    console.log("You are incorrect!");
}
if(answerFour === 'y' ||
 answerFour ==='yes'){
    alert("You are correct!")
    console.log("You are correct.");
} else {
    // if 'n' then you are incorrect
    alert("You are incorrect!")
    console.log("You are incorrect!");
}