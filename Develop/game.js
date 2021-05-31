document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start-button')
    let timeLeft = 75

    function countDown(){
        setInterval(function(){
            if(timeLeft <= 0 ) {
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        }, 1000)
    }

     startBtn.addEventListener('click', countDown)
})







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

    // Access the current question datta from question index array