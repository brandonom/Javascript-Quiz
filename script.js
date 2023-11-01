var startbutton = document.querySelector("#button");
var questionbox = document.querySelector(".question-box");
var startscreen = document.querySelector(".start-screen");
var qchoices = document.querySelector(".choices");
var currentQuestionIndex = 0;
var score = document.querySelector(".score-counter");
var timeLeft = 60;
var elem = document.getElementById('Timer');
var timerId;


function showQuestion() {
    var question = document.querySelector(".question");
    questionbox.classList.remove("hide");
    startscreen.classList.add("hide");
    question.textContent = questions[currentQuestionIndex].title;
    qchoices.innerHTML = '';

    for (let index = 0; index < questions[currentQuestionIndex].choices.length; index++) {
        var cbutton = document.createElement("button");
        cbutton.textContent = questions[currentQuestionIndex].choices[index];
        cbutton.classList.add("choice-btn"); // Add a class to identify choice buttons
        qchoices.appendChild(cbutton);
    }
}

function countdown() {
    if (timeLeft <= 0) {
        clearInterval(timerId);
        elem.innerHTML = 'Time is up!';
        // Handle end of quiz due to timeout
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

function checkAnswer(eventObject) {
    if (eventObject.target.matches(".choice-btn")) {
        var correctAnswer = questions[currentQuestionIndex].answer;
        var buttonClicked = eventObject.target;

        if (buttonClicked.textContent === correctAnswer) {
            var currentScore = parseInt(score.textContent) || 0;
            score.textContent = currentScore + 1;
        } else {
            timeLeft -= 5;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            clearInterval(timerId);
            elem.innerHTML = "Quiz Completed";
        }
    }
}

// Event listener for handling the click event on choices
qchoices.addEventListener('click', function(event) {
    if (event.target.classList.contains('choice-btn')) {
        checkAnswer(event);
    }
});

startbutton.addEventListener('click', function() {
    // Start the timer when the Start button is clicked
    timerId = setInterval(countdown, 1000);
    showQuestion(); // Display the first question when the Start button is clicked
});











startbutton.addEventListener("click", showQuestion);