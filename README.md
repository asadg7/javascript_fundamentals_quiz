# Web APIs Challenge: Code Quiz

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

### Deployed Webpage

https://asadg7.github.io/javascript_fundamentals_quiz/

### Description

This website serves as a quiz testing the user on javascript fundamentals. The quiz consists of 6 questions with 4 multiple choice answers for each question. There is a timer of 100 seconds to complete the quiz. Every incorrect answer to a question will subtract 10 seconds from the user's time. If a user runs out of the time, the game is over.

The user can save and view their score when finished and the scores will persist into Local Storage.

### Screenshots

Screenshot of the website on initial page load/home page.

![](./assets/images/pageload.PNG)

Screenshot of the website during the quiz.

![](./assets/images/quiz.PNG)

Screenshot of the website when the quiz is over.

![](./assets/images/gameover.PNG)

Screenshot of the website when viewing High Scores.

![](./assets/images/highscores.PNG)

### License

MIT License

Copyright (c) 2021 Alex Sadrgilany

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.