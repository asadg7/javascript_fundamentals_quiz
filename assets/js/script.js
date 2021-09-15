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
// <p> tag that displays the question
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

// Global variables
var currentQuestionIndex = 0;
var playerScore = 0;
var timeLeft = 100;
var highScoresList = [];


// Timer function
var startTimer = function() {

    var timeInterval = setInterval(function() {
        if (currentQuestionIndex === questionSet.length) {
            clearInterval(timeInterval);
        }
        else if (timeLeft >= 1) {
            timeLeft--;
            var redNumber = document.getElementById("red");
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

var generateQuestion = function(count) {

    if (count < questionSet.length) {
        questionsEl.textContent = questionSet[count].question;
        answerButton1.textContent = questionSet[count].answers[0];
        answerButton2.textContent = questionSet[count].answers[1];
        answerButton3.textContent = questionSet[count].answers[2];
        answerButton4.textContent = questionSet[count].answers[3];
    }
    else {
        gameOver();
    }
}

var checkAnswer = function(event) {
    event.preventDefault();

    setTimeout(function() {
        questionResultEl.innerHTML = "";
    }, 1000);

    if (questionSet[currentQuestionIndex].correctAnswer === event.target.textContent) {
        questionResultEl.innerHTML = "<p>Correct!</p>";
        playerScore++;
    }
    else if (questionSet[currentQuestionIndex].correctAnswer !== event.target.textContent) {
        questionResultEl.innerHTML = "<p>Incorrect.</p>";
        timeLeft = timeLeft - 10;
    }

    if (currentQuestionIndex < questionSet.length) {
        currentQuestionIndex++;
    }

    generateQuestion(currentQuestionIndex);
}

var startQuiz = function() {
    // hide other content
    startPageBody.style.display = "none";
    quizBody.style.display = "block";

    startTimer();
    generateQuestion(currentQuestionIndex);

}

var gameOver = function() {
    quizBody.style.display = "none";
    gameOverBody.style.display = "block";
    showScoreEl.textContent = "You answered " + playerScore + " question(s) correctly out of " + questionSet.length + "!"; 
    
}

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

var saveScore = function() {
    localStorage.setItem("Player's High Scores", JSON.stringify(highScoresList));
}

var viewScores = function() {
    gameOverBody.style.display = "none";
    highScoresBody.style.display = "block";

    listScoresEl.innerHTML = "";
    for (i = 0; i < highScoresList.length; i++) {
        var newLi = document.createElement("li");
        newLi.textContent = highScoresList[i].name + ": " + highScoresList[i].score;
        listScoresEl.appendChild(newLi);
    }
}

var clearScore = function() {
    localStorage.clear();
    listScoresEl.innerHTML = "";
}

var playAgain = function() {
    highScoresBody.style.display = "none";
    startPageBody.style.display = "block";
    currentQuestionIndex = 0;
    playerScore = 0;
    timeLeft = 100;
}

var toggleScores = function() {

    if (highScoresBody.style.display === "none") {
        highScoresBody.style.display = "block";
    }
    else if (highScoresBody.style.display === "block") {
        highScoresBody.style.display = "none";
    }
}


startButton.addEventListener("click", startQuiz);
answerButton1.addEventListener("click", checkAnswer);
answerButton2.addEventListener("click", checkAnswer);
answerButton3.addEventListener("click", checkAnswer);
answerButton4.addEventListener("click", checkAnswer);

saveScoreButton.addEventListener("click", addScore);

clearScoresButton.addEventListener("click", clearScore);

playAgainButton.addEventListener("click", playAgain);

viewScoresButton.addEventListener("click", toggleScores);


