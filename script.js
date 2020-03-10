// Pseudocode:
// create nav bar with name of game, option to view scores, and remaining time.
// done in html
// create title page with button to start game(title page is all centered)

// create modular button class to streamline question development
// create hidden <div></div> with text that shows wrong or right depending on answer
// include functionality so that button answers change
// create objectArray, with wuestions as object
// code individual question objects, with individual choices for each object
// include ticking down clock in right corner, time taken with wrong answer
// when question is wrong, take time away and display wrong
// when time is up, display game over screen with form with 1 dropdown that for name
// save name in local storage
// include names in high score page
// button to clear memory.

// Variables:
var seconds = 75;
// this is the score/time element featured in the top right corner. It ticks down at rate of one per second
// and will go down by 10 immediately if question is wrong.
var questionArray = [question1, question2, question3, question4];
// this is the array containing each of the question objects. 
var startBtn = document.getElementById("start-button")
var startPage = document.getElementById("start-page")
var questionDiv = document.getElementById("question-div")
var hiddenDiv = document.getElementById("correct-wrong")



// Objects:
var question1 = {
    True1:"Javascript",
    True2:"CSS",
    False:"Python",
    True3:"HTML"
}

var question2 = {
    True1:"Javascript",
    True2:"CSS",
    False:"Python",
    True3:"HTML"
}

var question3 = {
    True1:"Javascript",
    True2:"CSS",
    False:"Python",
    True3:"HTML"
}

var question4 = {
    True1:"Javascript",
    True2:"CSS",
    False:"Python",
    True3:"HTML"
}



// Functions:

startBtn.addEventListener("click", function(){
    startPage.setAttribute("style", "display: none")
    
    questionDiv.textContent = "this is a test of question div"
    hiddenDiv.textContent = "this is a test of hidden div"
})
