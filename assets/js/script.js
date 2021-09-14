var startpageBodyEl = document.getElementById("start-page");
var startBtnEl = document.getElementById("btn-start");
var highScoresBtnEl = document.getElementById("btn-high-scores");

var quizBodyEl = document.getElementById("quiz");
var timerEl = document.getElementById("show-timer");
var questionsEl = document.getElementById("show-questions");
var answerBtnOneEl = document.getElementById("answer-1");
var answerBtnTwoEl = document.getElementById("answer-2");
var answerBtnThreeEl = document.getElementById("answer-3");
var answerBtnFourEl = document.getElementById("answer-4");
var resultValueEl = document.getElementById("question-result");

var gameOverBodyEl = document.getElementById("game-over");
var displayScoreEl = document.getElementById("show-score");
var playerInputEl = document.getElementById("player-initials");
var saveScoreBtnEl = document.getElementById("save-score");

var highScoresBodyEl = document.getElementById("high-scores");
var playerNameEl = document.getElementById("user-name");
var playerScoreEl = document.getElementById("user-score");

var endpageBodyEl = document.getElementById("end-page");
var playAgainBtnEl = document.getElementById("play-again");
var clearScoresBtnEl = document.getElementById("clear-scores");









var questionSet = [
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

// Timer function
var startTimer = function() {
    var timeLeft = 100;

    var timeInterval = setInterval(function() {
        if (timeLeft >= 1) {
            // display timer
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            // Game over function
        }
    }, 1000);
}



