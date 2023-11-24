
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

document.addEventListener('DOMContentLoaded', function() {
    const startSnakeButton = document.getElementById('startSnakeButton');
    const initialScreen = document.getElementById('initialScreen');
    const snakeCanvas = document.getElementById('snakeCanvas');
    const ctx = snakeCanvas.getContext('2d');

    let snake = [{ x: 10, y: 10 }]; // Initial snake position
    let food = { x: 15, y: 15 }; // Initial food position
    let dx = 1; // Movement direction (initially to the right)
    let dy = 0;

    const snakeHeadImg = new Image();
    snakeHeadImg.src = 'LuSnake.png'; // Path to snake head image

    const fruitImg = new Image();
    fruitImg.src = 'WhiteChipCookie.png'; // Path to fruit image


    startSnakeButton.addEventListener('click', function() {
        initialScreen.style.display = 'none'; // Hide initial screen
        snakeCanvas.style.display = 'block'; // Display Snake canvas
        document.addEventListener('keydown', changeDirection); // Listen for arrow key presses
        setInterval(gameLoop, 100); // Start the game loop
        snakeCanvas.addEventListener('touchstart', handleTouchStart);
        snakeCanvas.addEventListener('touchmove', handleTouchMove);
    });

    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    }

    function handleTouchMove(event) {
        if (!touchStartX || !touchStartY) {
            return;
        }

        const touchEndX = event.touches[0].clientX;
        const touchEndY = event.touches[0].clientY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (deltaX > 0 && dx !== -1) {
                dx = 1;
                dy = 0;
            } else if (deltaX < 0 && dx !== 1) {
                dx = -1;
                dy = 0;
            }
        } else {
            // Vertical swipe
            if (deltaY > 0 && dy !== -1) {
                dx = 0;
                dy = 1;
            } else if (deltaY < 0 && dy !== 1) {
                dx = 0;
                dy = -1;
            }
        }

        touchStartX = 0;
        touchStartY = 0;
    }

    function changeDirection(event) {
        const keyPressed = event.key;
        // Set direction based on arrow keys (up, down, left, right)
        if (keyPressed === 'ArrowUp' && dy !== 1) {
            dx = 0;
            dy = -1;
        } else if (keyPressed === 'ArrowDown' && dy !== -1) {
            dx = 0;
            dy = 1;
        } else if (keyPressed === 'ArrowLeft' && dx !== 1) {
            dx = -1;
            dy = 0;
        } else if (keyPressed === 'ArrowRight' && dx !== -1) {
            dx = 1;
            dy = 0;
        }
    }

    function gameLoop() {
        // Update snake position based on direction
        const newHead = { x: snake[0].x + dx, y: snake[0].y + dy };
        snake.unshift(newHead); // Add new head to snake

        // Check if the snake has collided with the wall or itself (game over conditions)
        if (newHead.x < 0 || newHead.x >= snakeCanvas.width / 10 ||
            newHead.y < 0 || newHead.y >= snakeCanvas.height / 10 ||
            snake.slice(1).some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
            // End the game
            alert('Game Over!');
            document.location.reload(); // Reload the page to restart the game
        }

        // Check if the snake has eaten the food
        if (newHead.x === food.x && newHead.y === food.y) {
            // Increase snake length and place new food
            food = { x: Math.floor(Math.random() * (snakeCanvas.width / 10)), y: Math.floor(Math.random() * (snakeCanvas.height / 10)) };
        } else {
            // Remove the tail segment if the snake hasn't eaten food
            snake.pop();
        }

        // Clear canvas and redraw snake and food
        ctx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);
        drawSnake();
        drawFood();
    }

    function drawSnake() {
        // Draw the snake's head as an image
        ctx.drawImage(snakeHeadImg, snake[0].x * 10, snake[0].y * 10, 10, 10);

        ctx.fillStyle = 'black';
        snake.forEach(segment => {
            ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10);
        });
    }

    function drawFood() {
        // Draw the fruit as an image
        ctx.drawImage(fruitImg, food.x * 10, food.y * 10, 10, 10);
    }
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

