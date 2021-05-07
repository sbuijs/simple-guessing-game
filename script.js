'use strict';
/*
//selecting an element
console.log(document.querySelector('.message').textContent);

//changing the content of the element
document.querySelector('.message').textContent = '🎉 Correct Number!';


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/


let number = Math.trunc((Math.random() * 20) + 1);
console.log(`this is the secret number ${number}`);

let score = 20;
let highscore = 0;

let message = '';

function displayMessage(message) {
    document.querySelector('.message').textContent = `${message}`;
}

function displayNumber(number) {
    document.querySelector('.number').textContent = `${number}`;
}

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No number!';
        displayMessage(`⛔️ No number!`);

        //when the player wins
    } else if (guess === number) {
        displayMessage(`🎉 Correct Number!`)
        displayNumber(number);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //save highscore if the score is higher than the current highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is wrong
    } else if (guess != number) {
        console.log(`fout geraden`);
        if (score > 1) {
            displayMessage(guess > number ? 'Too high 👆' : 'Too low 👇');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage(`You lost the game! ☠️`)
            document.querySelector('.score').textContent = 0;
        }
    }

    //     //When guess is too high
    // } else if (guess > number) {
    //     if (score > 1) {
    //         //this should only happen if the score is above 1.
    //         document.querySelector('.message').textContent = 'Too high 👆';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game! ☠️';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // //When guess is too low
    // else if (guess < number) {
    //     if (score > 1) {
    //         //this should only happen if the score is above 1.
    //         document.querySelector('.message').textContent = 'Too low 👇';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game! ☠️';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});


//When the user clicks on the again button
document.querySelector('.again').addEventListener('click', function () {
    //reset score
    score = 20;
    document.querySelector('.score').textContent = score;
    //set a new secret number
    number = Math.trunc((Math.random() * 20) + 1);
    console.log(`this is the new secret number ${number}`);
    //Set message to start guessing
    displayMessage(`Start guessing..`);

    document.querySelector('.number').textContent = '?';
    displayNumber(`?`);

    //reset the guess input field
    document.querySelector('.guess').value = '';

    //reset background color and number size
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});