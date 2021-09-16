// Setting Variables for Document Manipulation

// Section that holds all the startpage content
var startPageBody = document.getElementById("start-page");
// Start Button
var startButton = document.getElementById("btn-start");
// View High Scores Button
var viewScoresButton = document.getElementById("btn-high-scores");

// Section that holds all the Quiz content
var quizBody = document.getElementById("quiz");
// Div that displays the timer
var timerEl = document.getElementById("show-timer");
// Span that displays the numerical timer
var redNumber = document.getElementById("red");
// Div that displays the question
var questionsEl = document.getElementById("show-questions");
// Button for answer 1
var answerButton1 = document.getElementById("answer-1");
// Button for answer 2
var answerButton2 = document.getElementById("answer-2");
// Button for answer 3
var answerButton3 = document.getElementById("answer-3");
// Button for answer 4
var answerButton4 = document.getElementById("answer-4");
// Div that displays correct or incorrect after each question
var questionResultEl = document.getElementById("question-result");

// Section that holds all the Gameover content
var gameOverBody = document.getElementById("game-over");
// Div that displays the user's score
var showScoreEl = document.getElementById("show-score");
// Input form for the user to enter their initials
var playerInput = document.getElementById("player-initials");
// Button to save user's score
var saveScoreButton = document.getElementById("save-score");

// Section that holds all the high scores content
var highScoresBody = document.getElementById("high-scores");
// Ordered list that displays the user's high scores
var listScoresEl = document.getElementById("list-scores");
// Button to return to startpage and play again
var playAgainButton = document.getElementById("play-again");
// Button to delete all saved scores
var clearScoresButton = document.getElementById("clear-scores");

// Global variables
var currentQuestionIndex = 0;
var playerScore = 0;
var timeLeft = 100;
var highScoresList = [];

// Main Array of Objects
var questionSet = [
    // Each object has its own question, multiple choice answers, and the correct answer
    {
        question: "Commonly used data types do NOT include: ",
        answers: ["1. Strings", "2. Alerts", "3. Numbers", "4. Booleans"],
        correctAnswer: "2. Alerts"
    },
    {
        question: "Arrays in Javascript can be used to store: ",
        answers: ["1. Booleans", "2. Numbers and Strings", "3. Other Arrays", "4. All of the above"],
        correctAnswer: "4. All of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["1. Quotes", "2. Commas", "3. Parentheses", "4. Curly Brackets"],
        correctAnswer: "1. Quotes"
    },
    {
        question: "The condition in an if/else statement is enclosed within: ",
        answers: ["1. Curly Brackets", "2. Quotes", "3. Parentheses", "4. Square Brackets"],
        correctAnswer: "3. Parentheses"
    },
    {
        question: "The correct syntax of making a comment in Javascript uses: ",
        answers: ["1. <-- -->", "2. //", "3. \\\\", "4. `` ``"],
        correctAnswer: "2. //"
    },
    {
        question: "In this example, function (x, y), x and y are known as: ",
        answers: ["1. Variables", "2. Values", "3. Sub functions", "4. Parameters"],
        correctAnswer: "4. Parameters"
    }
]

// Copy of Main Array for Randomization
var copyArray = questionSet.slice();

// Randomize Array function
var randomizeArray = function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
}

// Timer function
var startTimer = function() {

    var timeInterval = setInterval(function() {
        if (currentQuestionIndex === copyArray.length) {
            clearInterval(timeInterval);
        }
        else if (timeLeft >= 1) {
            timeLeft--;
            redNumber.textContent = timeLeft;
        }
        else if (timeLeft === 0) {
            clearInterval(timeInterval);
            gameOver();
        }
        else {
            clearInterval(timeInterval);
        }
    }, 1000);
}

// Function used to generate the question and display the content of each object to the user
var generateQuestion = function(count) {

    if (count < copyArray.length) {
        questionsEl.textContent = copyArray[count].question;
        answerButton1.textContent = copyArray[count].answers[0];
        answerButton2.textContent = copyArray[count].answers[1];
        answerButton3.textContent = copyArray[count].answers[2];
        answerButton4.textContent = copyArray[count].answers[3];
    }
    else {
        gameOver();
    }
}

// Function used to determine if what the user clicked on is the correct answer
var checkAnswer = function(event) {
    event.preventDefault();

    setTimeout(function() {
        questionResultEl.innerHTML = "";
    }, 1000);

    if (copyArray[currentQuestionIndex].correctAnswer === event.target.textContent) {
        questionResultEl.innerHTML = "<p>Correct!</p>";
        playerScore++;
    }
    else if (copyArray[currentQuestionIndex].correctAnswer !== event.target.textContent) {
        questionResultEl.innerHTML = "<p>Incorrect. Minus <span id='red-2'>10</span> seconds</p>";
        timeLeft = timeLeft - 10;
    }

    if (currentQuestionIndex < copyArray.length) {
        currentQuestionIndex++;
    }

    generateQuestion(currentQuestionIndex);
}

// Function used to Start the Quiz
var startQuiz = function() {
    startPageBody.style.display = "none";
    quizBody.style.display = "flex";

    startTimer();
    randomizeArray(copyArray);
    generateQuestion(currentQuestionIndex);
}

// Function used to End the Quiz
var gameOver = function() {
    quizBody.style.display = "none";
    gameOverBody.style.display = "flex";
    showScoreEl.textContent = "You answered " + playerScore + " question(s) correctly out of " + copyArray.length + "!"; 
}

// Function used to have player input their name and add their score
var addScore = function() {

    if (playerInput.value === "") {
        alert("Please enter your name or initials!");
        return;
    }
    else {
        highScoresList = JSON.parse(localStorage.getItem("Player's High Scores")) || [];
    }
    
    highScoresList.push({
    name: playerInput.value,
    score: playerScore
    });
    
    
    saveScore();
    viewScores();
}

// Function to save the player's scores to a list
var saveScore = function() {
    localStorage.setItem("Player's High Scores", JSON.stringify(highScoresList));
}

// Function used to go to the high scores page and display the list of all the player's persisted scores
var viewScores = function() {
    gameOverBody.style.display = "none";
    highScoresBody.style.display = "flex";

    listScoresEl.innerHTML = "";
    for (i = 0; i < highScoresList.length; i++) {
        var newLi = document.createElement("li");
        newLi.textContent = highScoresList[i].name + ": " + highScoresList[i].score;
        listScoresEl.appendChild(newLi);
    }
}

// function to delete all player scores from storage
var clearScore = function() {
    localStorage.clear();
    listScoresEl.innerHTML = "";
}

// Function for the player to play again and reset all the necessary variables back to their starting position
var playAgain = function() {
    highScoresBody.style.display = "none";
    startPageBody.style.display = "flex";
    currentQuestionIndex = 0;
    playerScore = 0;
    timeLeft = 100;
    redNumber.textContent = "100";
    playerInput.value = "";
}

// Function used for the player to toggle the high scores page on or off when clicked
var toggleScores = function() {

    if (highScoresBody.style.display === "flex") {
        highScoresBody.style.display = "none";
    }
    else {
        highScoresBody.style.display = "flex";
    }
}

// Adding event listeners to all necessary buttons

startButton.addEventListener("click", startQuiz);
answerButton1.addEventListener("click", checkAnswer);
answerButton2.addEventListener("click", checkAnswer);
answerButton3.addEventListener("click", checkAnswer);
answerButton4.addEventListener("click", checkAnswer);

saveScoreButton.addEventListener("click", addScore);

clearScoresButton.addEventListener("click", clearScore);

playAgainButton.addEventListener("click", playAgain);

viewScoresButton.addEventListener("click", toggleScores);
