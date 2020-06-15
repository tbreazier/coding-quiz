var highScores = document.getElementById("high-scores");
var timerDisplay = document.getElementById("countdown")
var startPage = document.getElementById("start");
var startBtn = document.getElementById("start-quiz");
var quiz = document.getElementById("quiz");
var question = document.getElementById ("question");
var choicesEl = document.getElementById("choices");
var countDown = 60;

var questions = [
    {
        question    :  "What does DOM stand for?",  
        choices     : ["Dude", "Docs", "object", "model"],
        correctAns  : "Docs"  
    },
    {
        question    :  "What does HTML stand for?",  
        choices     : ["HTML", "H", "B", "D"],
        correctAns  : "HTML"  
    }
];
var currentQuestion= 0;
var lastQuestion = questions.length - 1;

function questionClick () {
    var answer = this.value
    
    if(answer === questions[currentQuestion].correctAns) {
        alert("Correct!");
        currentQuestion++
    } else {
        alert("Incorrect!");
        currentQuestion++
    }
    createQuestion()
        /*if (questionStart < lastQuestion) {
            questionStart++;
            createQuestion();
        } else {
            alert("Done");
        }*/
};

function createQuestion() {
    let q = questions[currentQuestion];
    question.innerHTML = "<h2>" + q.question + "</h2>";
    //console.log(q);
    //we could unhide it here
    choicesEl.innerHTML = ""
    q.choices.forEach(function(choice) {
       
        //console.log(choice);
        var opBtn = document.createElement('button');
        console.log(opBtn);
        opBtn.setAttribute("class", "choiceBtn");
        opBtn.setAttribute("value", choice)
        opBtn.textContent = choice;
        opBtn.addEventListener("click", questionClick);
        choicesEl.appendChild(opBtn);
        
    })
    //what if something is going to hide it after this line
    
};



startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    createQuestion();
    timer();
    startPage.style.display = "none";
};

function timer() {
   
}


