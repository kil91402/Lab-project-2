let number = prompt("Guess my favorite number")
console.log("user guess num it: " + number)

let favNum = 5;
let counter = 0;

while(counter <= 6){
   
    if (number < 5) {
        alert('Sorry, too low!!');
        counter++;
    }
    else if (number > 5) {
        alert('Nope, too high!!');
        counter++;
    }
    else if (number == 5) {
        alert('Bust a move, you got it!!!');
                break;
    }

    alert('Sorry, game over!! My favorite number is ' + favNum);
}

let answer;
let correctAns = "football" || "basketball" || "tennis" || "baseball" || "golf" || "hockey";
let count = 0
let question = "Choose one of my favorite sports.";
let a = true;

while(a && count <=6){
    answer = prompt (question);
    if(answer === correctAns) {
        console.log("Do your happy dance!!!");
          
     a = false
    
    } else {
        count++;
        console.log("Sorry, Gameover.");
    }
      
} 

alert( 'Thanks for playing, goodbye.')

//Lab-03 Done


