var timerEl = document.getElementById('timeleft');
var startEl = document.querySelector("#start");
var optionEls = document.getElementsByClassName("option");
var quizIndex = 0;
var CORRECT = "Correct!";
var WRONG = "Wrong";
var timeLeft;  

var questions = ["question1", "question2", "question3", "question4", "question5"];
var answerA = ["question1A", "question2A", "question3A", "question4A", "question5A"];
var answerB = ["question1b", "question2b", "question3b", "question4b", "question5b"];
var answerC = ["question1c", "question2c", "question3c", "question4c", "question5c"];
var answerD = ["question1d", "question2d", "question3d", "question4c", "question5d"];
var correctAnswer = ["A", "B", "C", "D", "A"];

startEl.addEventListener("click", function(){
    timeLeft = 75;
    quizIndex = 0;  
    hideAllpages();
    document.getElementById("quizpage").style.display="block";
    var timeInterval = setInterval(function () {
      if (timeLeft >= 1) {
        timerEl.textContent = 'Time left: ' + timeLeft;
        timeLeft--;
      } else {
        clearInterval(timeInterval);
        hideAllpages();
      }
    }, 1000);
    initializeQuizQuestion(quizIndex);
});
for (var i=0; i<optionEls.length; i++) {
    optionEls[i].addEventListener("click", function(event) {
        var selection = event.target.value;
        var result = "";
        if (selection === correctAnswer[quizIndex] ){
            result = CORRECT;
        } else {
            result= WRONG;
            timeLeft = timeLeft - 10;
            hideAllpages();
            document.getElementById("signuppage").style.display = "block";
        }
        quizIndex++;
        initializeQuizQuestion(quizIndex);
        var resultEl;
        if (quizIndex<questions.length){
            resultEl = document.getElementById("result");
        } else{
            quizIndex = 0;
            resultEl = document.getElementById("lastresult");
        }
        resultEl.textContent = result;
        resultEl.style.display = "block";
    });

}


function hideAllpages() {
    document.getElementById("welcomepage").style.display = "none";
    document.getElementById("quizpage").style.display = "none";
    document.getElementById("signuppage").style.display = "none";
    document.getElementById("highscorepage").style.display = "none";
}

function initializeQuizQuestion(index){
    if (index >= questions.length){
        hideAllpages();
        document.getElementById("signuppage").style.display = "block";
    } else {
        var currentQuestion = questions[index];
        var currentAnswerA = answerA[index];
        var currentAnswerB = answerB[index];
        var currentAnswerC = answerC[index];
        var currentAnswerD = answerD[index];
        document.getElementById("question").textContent= currentQuestion;
        document.getElementById("answerA").textContent = "A." + currentAnswerA;
        document.getElementById("answerB").textContent = "B." + currentAnswerB;
        document.getElementById("answerC").textContent = "C." + currentAnswerC;
        document.getElementById("answerD").textContent = "D." + currentAnswerD;
    }
    
}


