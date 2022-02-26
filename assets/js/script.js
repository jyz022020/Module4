var timerEl = document.getElementById('timeleft');
var startEl = document.querySelector("#start");
var optionEls = document.getElementsByClassName("option");
var submitButton = document.getElementById("submit");
var gobackEl = document.getElementById("goback");
var clearEl = document.getElementById("clearhighcores");
var historyEl = document.getElementById("history");
var quizIndex = 0;
var CORRECT = "Correct!";
var WRONG = "Wrong";
var timeLeft;  
var timeInterval;


var questions = ["1.There are ___ levels of heading in HTML?", "2.Which of the following tags do not require a terminator?", "3.Which we use to get the ordered list?", "4.For a particular font its size attribute can be an absolute value ranging form?", "5.Which one of the following tags is used to insert graphics in the webpage?"];
var answerA = ["One", "<u>", "<h1>", "1-7", "<img>"];
var answerB = ["Three", "<br>", "<ul>", "B.1-9", "<image>"];
var answerC = ["Six", "<b>", "<ol>", "1-8", "<images>"];
var answerD = ["Ten", "none fo the above", "<ml>", "1-10", "<picture>"];
var correctAnswer = ["C", "B", "C", "D", "A"];

startEl.addEventListener("click", function(){
    timeLeft = 75;
    quizIndex = 0;  
    hideAllpages();
    document.getElementById("quizpage").style.display="block";
    timeInterval = setInterval(function () {
      if (timeLeft >= 1) {
        timerEl.textContent = 'Time left: ' + timeLeft;
        timeLeft--;
      } else {
        hideAllpages();
        initializeSignupPage();        
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
        setTimeout(() => {
            resultEl.style.display = "none";
          }, 1000)
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
        initializeSignupPage();
        // initializeSignupPage();
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

function initializeSignupPage (){
    setTimeout(() => {
        clearInterval(timeInterval);
      }, 1000)
    document.getElementById("initials").value= "";
    document.getElementById("signuppage").style.display = "block";
    document.getElementById("finalscore").textContent= "Your final score is " + timeLeft;

}

submitButton.addEventListener("click", function(){
    var name = document.getElementById("initials").value;
    if (name === "") {
        alert("Please input your initial to proceed");
    } else {
        initializeHighscorePage(name);
    }
    
})

function initializeHighscorePage(name){
    hideAllpages();
    document.getElementById("timeleft").style.display = "none";
    document.getElementById("history").style.display = "none";

    if (name){
        var newScore = document.createElement("li");
        newScore.textContent = name + "-" +timeLeft;
        document.getElementById("historyScores").appendChild(newScore);
    }
    document.getElementById("highscorepage").style.display = "block";

}

gobackEl.addEventListener("click",function(){
    hideAllpages();
    document.getElementById("welcomepage").style.display = "block";
    document.getElementById("timeleft").textContent = "Time left: 0";
    document.getElementById("timeleft").style.display = "block";
    document.getElementById("history").style.display = "block";
});

clearEl.addEventListener("click",function(){
    document.getElementById("historyScores").innerHTML = "";
});

historyEl.addEventListener("click", function(){
    initializeHighscorePage();
});



