# Week_4_Quiz_HW

Created online quiz that subtracts time from overall time limit for each incorrect answer and logs high score.

-HTML
-CSS
-JavaScript

/*Created container for all questions, answers, and timer*/

<div class ='container'>

        <h1 id= description>Answer each question within the time limit.</h1>

        <div id='quizbox' class="hide">

            <h1 class="time" style="text-align:center;"></h1>
            <div id="main"></div><br><br>

            <div id="question">Question</div>
            <div id="answer" class="btn-grid">
                <button class="btn">Answer 1</button>
                <button class="btn">Answer 2</button>
                <button class="btn">Answer 3</button>
                <button class="btn">Answer 4</button>
        </div>

    </div>
        <div class="controls">
            <button id='startbtn' class="startbtn btn">START!</button>
            <button id='highbtn' class="highbtn btn">HIGH SCORES</button>
            <button id='nxtbtn' class="nxtbtn btn hide">NEXT</button>
        </div>


    <script src="./Assets/style.js"></script>

    </div>

/*created buttons with separate functions to start, reset, and submit with 'hide' when clicking through quiz*/

function startGame() {
startButton.classList.add('hide')
highButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() -.5)
currentQuestionsIndex = 0
questioncontainerElement.classList.remove('hide')
setNextQuestion()

/*created variable to contain array of questions and answers*/

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

