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





function startGame() {
    
    startButton.classList.add('hide')
    
    currentQuestionindex = questions
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    startTimer();
    timerLeft = 75
}

function setNextQuestion() {
    showQuestion([currentQuestionIndex])

}



function showQuestion(question) {
    questionElement.innerText = question.question

}

function selectAnswer() {

}

var questions =  [
    {
       question: 'who is the leader of the Autobots',
       answers: [
           { text: 'Optimus Prime', correct: true},
           { text: 'Megatron', correct: false},
           { text: 'Bumblebee', correct: false},
           { text: 'Starscream', correct: false}
       ]
    
    }
]



function startTimer() {
    var timerLeft = 75
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        
        if (isWin && timerCount > 0) {
          
          clearInterval(timer);
          winGame();
        }
      }
      
      if (timerCount === 0) {
        
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

  startButton.addEventListener('click', startGame)














// DECLARE a starting 'score'

// DECLARE an array list of 'questions'
    // Where each value is an object to define a question and its properties

// DECLARE a 'questionIndex' to point to the current question

// store a reference to the element for the 'timerDisplayEL'
//store a ref to the 'startButtonEl'


// create 'startGame' function
    
    // Call 'startTimer'
    //Hide the start screen element and show the first question


// Create 'endGame' function

// Cerate 'startTimer' function
    
    // initializing the string 'timeLeft' value
    //start the running countdown on the timer

// Create 'answerQuestion' function

    // get the value associated with the clicked 'button'
    // Compare against the corect answer for the current question

        // If correct ...
        // If incorrect ..
            // Subtract points from 'score'

        // Continue to the next question 'renderCurrentQuestion()'

// Creat 'renderCurrentQuestion' function

    // Access the current question datta from question index array*/