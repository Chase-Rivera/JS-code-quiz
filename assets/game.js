var questionsArray = [
    {
        question: "Who is the leader of the Autobots?",
        options: ["Bumblebee", "Megetron", "Optimus Prime", "Ironhide"],
        answer: "Optimus Prime"
    },
    {
        question: "Who is Luke Skywalker's father?",
        options: ["Lando Calrissian", "Darth Vader", "Han Solo", "Obi Wan Kenobi"],
        answer: "Darth Vader"
    },
    {
        question: "Who is Bilbo's cousin?",
        options: ["Frodo", "Sam", "Mary", "Pippen"],
        answer: "Frodo"
    },
    {
        question: "Who was the first Aveneger?",
        options: ["Iron Man", "Captain America", "Thor", "The Hulk"],
        answer: "Captain America"
    }
]

var timerEl = document.querySelector("#timer")
var startPageEl = document.querySelector("#startPage")
var startBtnEl = document.querySelector("#startBtn")
var questPageEl = document.querySelector("#questPage")
var questTitleEl = document.querySelector("#questTitle")
var questOptsEl = document.querySelector("#questOpts")
var endPageEl = document.querySelector("#endPage")
var finalScoreEl = document.querySelector("#finalScore")
var plyrInitEl = document.querySelector("#plyrInit")
var submitBtnEl = document.querySelector("#submitBtn")

questPageEl.style.display="none";
endPageEl.style.display="none";

var timerId;
var timerLeft=60;
var questionIndex=0;
var score=0;

function countdown(){
    timerLeft--;
    timerEl.textContent=`time:${timerLeft}`;
    if (timerLeft <= 0){
        complete();
    }
};

function startGame(){
    timerId=setInterval(countdown, 1000);
    startPageEl.style.display="none";
    questPageEl.style.display="block";
    genQuests();
};

function genQuests(){
    questOptsEl.innerHTML="";
    var currentQuest= questionsArray[questionIndex];
    questTitleEl.textContent= currentQuest.questions;
    currentQuest.options.forEach(function(options){
        var tempBtn=document.createElement("button");
        tempBtn.setAttribute("value", options);
        tempBtn.textContent=options;
        tempBtn.onclick=compAnsw;
        questOptsEl.appendChild(tempBtn);
    });
};

function compAnsw(){
    var options=this.value;
    var answer=questionsArray[questionIndex].answer;
    if (options !== answer){
        timerLeft-=10
    };
    questionIndex++;
    if(questionIndex===questionsArray.length){
        complete();
    }else{
        genQuests();
    }

};

function complete(){
    clearInterval(timerId);
    questPageEl.style.display="none";
    endPageEl.style.display="block";
    timerEl.style.display="none";
    finalScoreEl.textContent=timerLeft;
};

function highScore(){
    endPageEl.style.display="none";
    var highScores=JSON.parse(localStorage.getItem("highscores"))|| [];
    var newScore={
        initials: plyrInitEl.value,
        score: timerLeft
    };
    highScores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highScores));
    window.location.replace("./highScores.html");
};

startBtnEl.onclick=startGame
submitBtnEl.onclick=highScore



