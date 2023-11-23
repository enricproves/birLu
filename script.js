/*
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('birthday-audio');
    const startAudioButton = document.getElementById('startAudio');

    startAudioButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play(); // If audio is paused, play it
        } else {
            audio.pause(); // If audio is playing, pause it
        }
    });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startAudio').addEventListener('click', function() {
        document.getElementById('birthday-audio').play();
    });
});

// Your existing JavaScript code for the riddle game goes here
// Make sure to include the existing logic for the riddles, startRiddleGame(), displayRiddle(), checkAnswer(), etc.

// JavaScript for the riddle game

// Function to start the riddle game
function startRiddleGame() {
    document.getElementById('birthday-screen').style.display = 'none';
    document.getElementById('riddle').style.display = 'block';
    displayRiddle(); // Start displaying riddles
}

//document.getElementById('startAudio').addEventListener('click', function() {
//    document.getElementById('birthday-audio').play();
//});

// Riddle and answer data
const riddles = [
    { question: "What has keys but can't open locks?", answer: "Piano" },
    { question: "Which is Lu's power animal?", answer: "Squirrel" },
    { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "Echo" },
    { question: "The more you take, the more you leave behind. What am I?", answer: "Footsteps" },
    { question: "I am not alive, but I can grow. I don't have lungs, but I need air. What am I?", answer: "Fire" },
    { question: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?", answer: "Pencil" }      
    // Add more riddles and answers as needed
];

let currentRiddleIndex = 0;

// Function to display riddle
function displayRiddle() {
    const riddleText = document.getElementById('riddle-text');
    const userInput = document.getElementById('user-answer');
    const resultMessage = document.getElementById('result-message');
    const completionGif = document.getElementById('completion-gif');

    if (currentRiddleIndex < riddles.length) {
        riddleText.textContent = riddles[currentRiddleIndex].question;
        userInput.value = ''; // Clear previous user input
        resultMessage.textContent = ''; // Clear previous result message
        completionGif.style.display = 'none'; // Hide the GIF if it was displayed previously
    } else {
        riddleText.textContent = "Congratulations! You've completed all the riddles.";
        userInput.style.display = 'none'; // Hide input field
        completionGif.src = 'congratulations-african.gif'; // Replace 'completion.gif' with your GIF file
        completionGif.style.display = 'block'; // Display the GIF
    }
}


// Function to check user's answer
function checkAnswer() {
    const userInput = document.getElementById('user-answer').value.toLowerCase();
    const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();
    const resultMessage = document.getElementById('result-message');

    if (userInput === correctAnswer) {
        resultMessage.textContent = 'Correct! Well done!';
    } else {
        resultMessage.textContent = 'Incorrect. Try again!';
    }

    currentRiddleIndex++;
    setTimeout(displayRiddle, 2000); // Display next riddle after 2 seconds
}

