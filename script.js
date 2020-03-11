// Pseudocode:
// create nav bar with name of game, option to view scores, and remaining time.!
// done in html
// create title page with button to start game(title page is all centered)!

// create modular button class to streamline question development
// create hidden <div></div> with text that shows wrong or right depending on answer
// include functionality so that button answers change
// create objectArray, with questions as object!
// code individual question objects, with individual choices for each object!
// include ticking down clock in right corner, time taken with wrong answer !/
// when question is wrong, take time away and display wrong
// when time is up, display game over screen with form with 1 dropdown that for name!
// save name in local storage!
// include names in high score page

// Variables:
var seconds = 75;
var time = document.getElementById("time")
// this is the score/time element featured in the top right corner. It ticks down at rate of one per second
// and will go down by 10 immediately if question is wrong.
var questionsArr = [
    {
        question: 'What is Javascript?',
        answers: ["A programming language","A form of writing which uses coffee beans", 
        "A content delivery network", "The script for a play about the island of Java"],
        answer: 'A programming language'
    },
    {
        question: 'What does HTML stand for?',
        answers: ["Hyper Tax Man Larry","Highly Technical Managing Language", "Hyper Text Markup Language", "Half To Mario Link"],
        answer: 'Hyper Text Markup Language'
    },{
        question: 'What is not an example of a Content Delivery Network?',
        answers: ["Bootstrap","Cloudflare", "Google", "Streamzilla"],
        answer: 'Google'
    },
    {
        question: 'What should you do first when coding?',
        answers: ["Code the entire project", "Pseudocode", "Buy coffee", 
        "Question your ability to code correctly"],
        answer: 'Pseudocode'
    }
]
// this is the array containing each of the question objects. 
var startBtn = document.getElementById("start-button");
// refers to the start button
var startPage = document.getElementById("start-page");
// refers to the start page
var questionDiv = document.getElementById("question-div");
// refers to the div containing the question elements
var hiddenDiv = document.getElementById("correct-wrong");
// refers to the div containing the correct/wrong dialogue
var scorescreen = document.getElementById("score-screen")
// refers to the score-screen dialogue
var submitScore = document.getElementById("score-submit")
// refers to the submit-score button
var NameValue = document.getElementById("exampleNameInput")
// Refers to the saved name/score value
// Object:




// Functions:


function setTime() {
    time.textContent = seconds
    var timerInterval = setInterval(function() {
      seconds--;
      time.textContent = "Time: " + seconds;
  
      if(seconds === 0) {
        clearInterval(timerInterval);
        console.log("time ran out!");
        questionDiv.setAttribute("style", "display: none")
        hiddenDiv.setAttribute("style", "display: none") 
        scorescreen.setAttribute("style", "display: block")
      }
  
    }, 1000);
  }
// Modified from activity  04-09

startBtn.addEventListener("click", function() {
    startPage.setAttribute("style", "display: none");

    questionDiv.setAttribute("style", "display: block");
    hiddenDiv.setAttribute("style", "display: block");

    // questionA.textContent = TestA
    // questionB.textContent = TestB
    // questionC.textContent = TestC
    // questionD.textContent = TestD
    setTime();
    question1();
    
})

function checkAnswer(){


}

function question1() {
    var questionTitle = document.createElement('h2');
    questionTitle.textContent = questionsArr[i].question;
    questionDiv.append(questionTitle);
    for (i = 0; i < questionsArr[i].answers.length; i++) {
        console.log(questionTitle.textContent)
        // set variable? so that questionArray actually pulls out questions
        // set each point of the selected questionObject on its button
        // create if else syntax so that a click on the false answer = wrong dialogue,time being taken out,
        // else everything is fine 
        // any answer quiz moves forward regardless
        // 
        // flag event so that on question 4, quiz transitions to game over screen and timer stops.
        // time stop = clearInterval(timerInterval) method
        
}}


submitScore.addEventListener("click", function(event) {
event.preventDefault();
localStorage.setItem("Name Value", NameValue.value,);
localStorage.setItem("Hi-Score", seconds)
})