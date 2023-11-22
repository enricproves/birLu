// JavaScript for the riddle game

// Function to start the riddle game
function startRiddleGame() {
    document.getElementById('birthday-screen').style.display = 'none';
    document.getElementById('riddle').style.display = 'block';
    displayRiddle(); // Start displaying riddles
}

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('birthday-audio').play();
});


// Riddle and answer data
const riddles = [
    { question: "What has keys but can't open locks?", answer: "Piano" },
    { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "Echo" },
    // Add more riddles and answers as needed
];

let currentRiddleIndex = 0;

// Function to display riddle
function displayRiddle() {
    const riddleText = document.getElementById('riddle-text');
    const userInput = document.getElementById('user-answer');
    const resultMessage = document.getElementById('result-message');

    if (currentRiddleIndex < riddles.length) {
        riddleText.textContent = riddles[currentRiddleIndex].question;
        userInput.value = ''; // Clear previous user input
        resultMessage.textContent = ''; // Clear previous result message
    } else {
        riddleText.textContent = "Congratulations! You've completed all the riddles.";
        userInput.style.display = 'none'; // Hide input field
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

