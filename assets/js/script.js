// Setting Variables for Document Manipulation

// Div that holds all the startpage content
var startpageBodyEl = document.getElementById("start-page");
// Start Button
var startBtnEl = document.getElementById("btn-start");
// View High Scores Button
var highScoresBtnEl = document.getElementById("btn-high-scores");

// Div that holds all the Quiz content
var quizBodyEl = document.getElementById("quiz");
// Div that displays the timer
var timerEl = document.getElementById("show-timer");
// Div that displays the question
var questionsEl = document.getElementById("show-questions");
// Button for answer 1
var answerBtnOneEl = document.getElementById("answer-1");
// Button for answer 2
var answerBtnTwoEl = document.getElementById("answer-2");
// Button for answer 3
var answerBtnThreeEl = document.getElementById("answer-3");
// Button for answer 4
var answerBtnFourEl = document.getElementById("answer-4");
// Div that displays correct or incorrect after each question
var resultValueEl = document.getElementById("question-result");

// Div that holds all the Gameover content
var gameOverBodyEl = document.getElementById("game-over");
// Div that displays the user's score
var displayScoreEl = document.getElementById("show-score");
// Input form for the user to enter their initials
var playerInputEl = document.getElementById("player-initials");
// Button to save user's score
var saveScoreBtnEl = document.getElementById("save-score");

// Div that holds all the high scores content
var highScoresBodyEl = document.getElementById("high-scores");
// Ordered list that displays the user's high scores
var listScoresEl = document.getElementById("list-scores");
// Button to return to startpage and play again
var playAgainBtnEl = document.getElementById("play-again");
// Button to delete all saved scores
var clearScoresBtnEl = document.getElementById("clear-scores");

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
            timerEl.textContent = "Time Remaining: " + timeLeft;
        }
        else if (timeLeft === 0) {
            displayScore();
        }
        else {
            clearInterval(timeInterval);
            // Game over function
        }
    }, 1000);
}

var generateQuestion = function(count) {

    if (count < questionSet.length) {
        questionsEl.textContent = questionSet[count].question;
        answerBtnOneEl.textContent = questionSet[count].answers[0];
        answerBtnTwoEl.textContent = questionSet[count].answers[1];
        answerBtnThreeEl.textContent = questionSet[count].answers[2];
        answerBtnFourEl.textContent = questionSet[count].answers[3];
    }
    else {
        displayScore();
    }
}

var checkAnswer = function(event) {
    event.preventDefault();

    if (questionSet[currentQuestionIndex].correctAnswer === event.target.textContent) {
        resultValueEl.innerHTML = "<p>Correct!</p>";
        playerScore++;
    }
    else if (questionSet[currentQuestionIndex].correctAnswer !== event.target.textContent) {
        resultValueEl.innerHTML = "<p>Incorrect.</p>";
        timeLeft = timeLeft - 10;
    }

    if (currentQuestionIndex < questionSet.length) {
        currentQuestionIndex++;
    }

    generateQuestion(currentQuestionIndex);
}

var startQuiz = function() {
    // hide other content
    startpageBodyEl.style.display = "none";
    highScoresBodyEl.style.display = "none";
    gameOverBodyEl.style.display = "none";
    quizBodyEl.style.display = "block";

    startTimer();
    generateQuestion(currentQuestionIndex);

}

var displayScore = function() {
    startpageBodyEl.style.display = "none";
    quizBodyEl.style.display = "none";
    highScoresBodyEl.style.display = "none";
    gameOverBodyEl.style.display = "block";
    displayScoreEl.textContent = "You answered " + playerScore + " question(s) correctly out of " + questionSet.length + "!"; 
    
}

var addScore = function() {
    highScoresList.push({
        name: playerInputEl.value,
        score: playerScore
    });

    listScoresEl.innerHTML = "";
    for (i = 0; i < highScoresList.length; i++) {
        var li = document.createElement("li");
        li.textContent = highScoresList[i].name + ": " + highScoresList[i].score;
        listScoresEl.appendChild(li);
    }
    
    saveScore();
    viewScores();
}

var saveScore = function() {
    localStorage.setItem("Player's High Scores", JSON.stringify(highScoresList));
}

var viewScores = function() {
    gameOverBodyEl.style.display = "none";
    highScoresBodyEl.style.display = "block";

    var storedScoresList = JSON.parse(localStorage.getItem("Player's High Scores"));
    
    if (storedScoresList !== null) {
    highScoresList = storedScoresList;
    }

}

var clearScore = function() {
    localStorage.clear();
    listScoresEl.innerHTML = "";
}

var playAgain = function() {
    highScoresBodyEl.style.display = "none";
    startpageBodyEl.style.display = "block";
    currentQuestionIndex = 0;
    playerScore = 0;
    timeLeft = 100;
}

var toggleScores = function() {
    if (highScoresBodyEl.style.display === "none") {
        highScoresBodyEl.style.display = "block";
    }
    else if (highScoresBodyEl.style.display === "block") {
        highScoresBodyEl.style.display = "none";
    }
}


startBtnEl.addEventListener("click", startQuiz);
answerBtnOneEl.addEventListener("click", checkAnswer);
answerBtnTwoEl.addEventListener("click", checkAnswer);
answerBtnThreeEl.addEventListener("click", checkAnswer);
answerBtnFourEl.addEventListener("click", checkAnswer);

saveScoreBtnEl.addEventListener("click", addScore);

clearScoresBtnEl.addEventListener("click", clearScore);

playAgainBtnEl.addEventListener("click", playAgain);

highScoresBodyEl.addEventListener("click", toggleScores);


