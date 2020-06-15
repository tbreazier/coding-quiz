var highScores = document.getElementById("high-scores");
var timerDisplay = document.getElementById("countdown")
var startPage = document.getElementById("start");
var startBtn = document.getElementById("start-quiz");
var quiz = document.getElementById("quiz");
var question = document.getElementById ("question");
var options = document.getElementById ("options");
var choiceA = document.getElementById ("A");
var choiceB = document.getElementById ("B");
var choiceC = document.getElementById ("C");
var choiceD = document.getElementById ("D");
var countDown = 60;

var questions = [
    {
        question    : "What does HTML stand for?",
        choiceA     : "How Tall Monkeys Live", 
        choiceB     : "Hypertext Markup Language", 
        choiceC     : "Hottext Markup Lounge", 
        choiceD     : "Hypertext Markup Lorem",
        correctAns  : "B"
    },
    {
        question    : "What does CSS stand for?",
        choiceA     : "Cascading Style Steps", 
        choiceB     : "Cascading Simple Sheets", 
        choiceC     : "Crappy Style Sheets", 
        choiceD     : "Cascading Style Sheets",
        correctAns  : "D"
    },
    {
        question    : "What does JS stand for?",
        choiceA     : "Javascript", 
        choiceB     : "Jambascript", 
        choiceC     : "Jukescript", 
        choiceD     : "Java",
        correctAns  : "A"
    },
    {
        question    : "What does DOM stand for?",
        choiceA     : "Dudes Object Model", 
        choiceB     : "Document Override Model", 
        choiceC     : "Document Object Model", 
        choiceD     : "Document Object Modal",
        correctAns  : "C"
    }
];
var questionStart = 0;
var lastQuestion = questions.length - 1;



function createQuestion() {
    let q = questions[questionStart];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
};

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    createQuestion();
    timer();
};

function timer() {
    var time = function() {
        countDown--;
        countDown> 0 ? (timerDisplay.innerHTML = countDown) : (timerDisplay.innerText = 0);
        if (counter === 0) {
            clearInterval(startTime);
            gamerOver();
        }
    }
}

function checkAnswer(answer) {
    if(answer === questions[questionStart].correctAns) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
};
