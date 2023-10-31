var startbutton = document.querySelector("#button")
var questionbox = document.querySelector(".question-box")
var startscreen = document.querySelector(".start-screen")
var qchoices = document.querySelector(".choices")
var currentQuestionIndex = 0
var score = document.querySelector(".score-counter")
var timeLeft = 60;
var elem = document.getElementById('Timer');
var timerId = setInterval(countdown, 1000);




function showQuestion() {

    var question = document.querySelector(".question")
    questionbox.classList.remove("hide")
    startscreen.classList.add("hide")
    question.textContent = questions[currentQuestionIndex].title
    for (let index = 0; index < questions[currentQuestionIndex].choices.length; index++) {
        var cbutton = document.createElement("button")
        cbutton.textContent = questions[currentQuestionIndex].choices[index]
        console.log(cbutton)
        qchoices.appendChild(cbutton)
    }
}

function countdown() {
    if (timeLeft <= 0) {
        clearInterval(timerId);
        //doSomething();
        elem.innerHTML = 'Time is up!';
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
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }
        else {
            clearInterval(timerID);
            elem.innerHTML = "Quiz Completed";
        }
    }
   var correctAnswer = questions[currentQuestionIndex].answer
   var buttonClicked = eventObject.target
   console.log.buttonClicked
   
    
    
    // if answer is correct add 1 point to score board 
    // 
    // if answer is wrong subtract 5 seconds from timer 





}

qchoices.addEventListener('click', checkAnswer)











startbutton.addEventListener("click", showQuestion);
