const question = document.getElementById("question");
let myBody = document.getElementById("Start");
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progresstext = document.getElementById('progresstext');
const scoretext = document.getElementById('score');
const progressbarfull= document.getElementById("progressbarfull");

let currentquestion = {};
let acceptingAnswers = false;
let score = 0;
let counter = 0;
let availablequestions =[];


let questions = [
    {
        question: "How can you detect the client's browser name?",
        choice1: "client.navName",
        choice2: "navigator.appName",
        choice3: "browser.name",
        choice4: "JAY-Z",
        
        answer: 2
    },

    {
        question: "How to write an IF statement in JavaScript?",
        choice1: "if i = 5",
        choice2: "if i = 5 then",
        choice3: "if i == 5 then",
        choice4: "if(i == 5)",
        
        answer: 4
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<scripting>",
        choice2: "<script>",
        choice3: "<javascript>",
        choice4: "<js>",
        
        answer: 2
    },

    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element here? -> <p id='demo'>This is a demonstration.</p>",
        choice1: "#demo.innerHTML = 'Hello World!';",
        choice2: "document.getElementByName('p').innerHTML = 'Hello World!';",
        choice3: "document.getElement('p').innerHTML = 'Hello World!';",
        choice4: "document.getElementById('demo').innerHTML = 'Hello World!';",
        
        answer: 4
    },

    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "The external script is sketchy so none below will work",
        choice2: "<script href='xxx.js'>",
        choice3: "<script name='xxx.js'>",
        choice4: "<script src='xxx.js'>  ",
        
        answer: 4
    },

    {
        question: "The external JavaScript file must contain the <script> tag.",
        choice1: "Yes",
        choice2: "Possibly",
        choice3: "False",
        choice4: "True",
        
        answer: 3
    },

    {
        question: "How does a WHILE loop start",
        choice1: "while (i <= 10)",
        choice2: "while i = 1 to 10",
        choice3: "while (i != == 10)",
        choice4: "while (i <= 10; i++)",
        
        answer: 1
    },

    {
        question: "What is the correct way to write a JavaScript array",
        choice1: "var colors = (1:'red', 2:'green', 3:'blue')",
        choice2: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        choice3: "var colors = ['red', 'green', 'blue']",
        choice4: "var colors = 'red', 'green', 'blue'",
        
        answer: 3
    },

    {
        question: "How do you round the number 7.25, to the nearest integer?",
        choice1: "rnd(7.25)",
        choice2: "Math.round(7.25)",
        choice3: "round(7.25)",
        choice4: "Math.rnd(7.25)",
        
        answer: 2
    },

    {
        question: "What is the correct JavaScript syntax for opening a new window called 'w2' ?",
        choice1: "w2 = window.new('http://www.google.com');",
        choice2: "w2 = window.open('http://www.google.com');",
        choice3: "w2 = window.popup('http://www.google.com');",
        choice4: "w2 = window.appear('http://www.google.com');",
        
        answer: 2
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choice1: "onchange",
        choice2: "onmouseclick",
        choice3: "onclick",
        choice4: "ongang",
        
        answer: 3
      
    }
  
];

const correct_bonus = 10;
const max_questions = 5
 
startgame = () => {

    counter = 0;
    score = 0;
    availablequestions = [...questions];
    getnew();
};

getnew = () => {
    if (availablequestions.length === 0 || counter >= max_questions) {
        localStorage.setItem('mostrecentscore', score);
        return window.location.assign("quiz.end.html");
      }

    counter++;
    
    progresstext.innerText = 'Question ' + counter + '/' + max_questions;
    const x = (counter/max_questions)*100;
    progressbarfull.style.width = x + "%";

    const questionindex = Math.floor(Math.random() * availablequestions.length);
    currentquestion = availablequestions[questionindex];
    question.innerText = currentquestion.question;
    

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentquestion["choice" + number];
    });

    availablequestions.splice(questionindex,1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e=> {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedchoice = e.target;
        const selectedanswer = selectedchoice.dataset['number'];
        
        const classtoapply  = selectedanswer == currentquestion.answer ? 'correct' : 'incorrect' ;

        if(classtoapply === 'correct')
        {
            incrementscore(correct_bonus);
        }

        selectedchoice.parentElement.classList.add(classtoapply);

        setTimeout(() => {
            selectedchoice.parentElement.classList.remove(classtoapply);
            getnew();
        }, 1000);
    });
});

incrementscore = num => {
    score += num;
    scoretext.innerText = score;
};

startgame();
 