const startButton = document.getElementById('startbtn');

const highButton = document.getElementById('highbtn');

const questioncontainerElement = document.getElementById('quizbox');

let shuffledQuestions, currentQuestionsIndex

const questionElement = document.getElementById('question')

const answerButtonsElement = document.querySelector('#answer')

const nextButton = document.getElementById('nxtbtn');
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {

    currentQuestionsIndex++
    setNextQuestion()
})


function startGame() {
startButton.classList.add('hide')
highButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() -.5)
currentQuestionsIndex = 0
questioncontainerElement.classList.remove('hide')
setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            
        }
        button.addEventListener('click', selectAnswer)
            
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {
    nextButton.classList.add('hide')

    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    const thisButton = e.target
    const correct = thisButton.dataset.correct 
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide')
    } 
    
    else {
        startButton.innerText = 'Restart'
        highButton.innerText = 'Submit'
        startButton.classList.remove('hide')
        highButton.classList.remove('hide')
        
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    
    if (correct) {
        element.classList.add('correct')
        
    }

    else {
        element.classList.add('wrong')
        
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What does HTML mean?',
        answers: [
            { text: 'Hypertext Markup Language', correct: true},
            {text: 'Hypertext Markdown Language', correct: false},
            { text: 'Hyphenated Marker Loop', correct: false},
            {text: 'Hypertype Mystery Link', correct: false}
        ]
    },

    {
        question: 'What does CSS mean?',
        answers: [
            { text: 'Complicated Super Setup', correct: false},
            {text: 'Corrugated Style Sheets', correct: false},
            { text: 'Cascading Style Sheets', correct: true},
            {text: 'Calculated Simple Syrup', correct: false}
        ]
    },
    {
        question: 'What does the git commit command do in the terminal?',
        answers: [
            { text: 'Commits changes to be pushed to repo', correct: true},
            {text: 'Commits changes to be rejected from repo', correct: false},
            { text: 'Commits additions to code to pull from repo', correct: false},
            {text: 'Creates placeholder in HTML', correct: false}
        ]
    },
    {
        question: 'Do or do not, there is no ___?',
        answers: [
            { text: 'attempt', correct: false},
            {text: 'try', correct: true},
            { text: 'giving up', correct: false},
            {text: 'surrender', correct: false}
        ]
    },
    {
        question: 'Never gonna ___?',
        answers: [
            { text: 'let you down', correct: true},
            {text: 'run around', correct: false},
            { text: 'desert you', correct: false},
            {text: 'give you up', correct: false}
        ]
    },

]

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 30;

document.getElementById('startbtn').addEventListener('click', function setTime() {
  // Sets interval in variable
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds";
    if(secondsLeft === 0) {

      clearInterval(timerInterval);
      alert("Time is up!")
      startButton.innerText = 'Restart'
        highButton.innerText = 'Submit'
        startButton.classList.remove('hide')
        highButton.classList.remove('hide')

      
    }

  }, 1000);
})

