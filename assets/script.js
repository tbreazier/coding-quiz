var highScores = document.getElementById("high-scores");
var timerDisplay = document.getElementById("countdown")
var content = document.getElementById("content");
var startPage = document.getElementById("start");
var startBtn = document.getElementById("start-btn");

var countDown = 60;
var scores = loadScores() || [];
var questions = [
    {
        question    :
        "What does HTML stand for?",
        options     : [ "How Tall Monkeys Live", "Hypertext Markup Language", "Hottext Markup Lounge", "Hypertext Markup Lorem"],
        correctAns  : 1
    }
    {
        question    :
        "What does CSS stand for?",
        options     : [ "Cascading Style Steps", "Cascading Simple Sheets", "Crappy Style Sheets", "Cascading Style Sheets"],
        correctAns  : 3
    }
    {
        question    :
        "What does JS stand for?",
        options     : [ "Javascript", "Jambascript", "Jukescript", "Java"],
        correctAns  : 0
    }
    {
        question    :
        "What does DOM stand for?",
        options     : [ "Dudes Object Model", "Document Override Model", "Document Object Model", "Document Object Modal"],
        correctAns  : 2
    }
]
