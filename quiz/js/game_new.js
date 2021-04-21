const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [    
    {
        "question": "You have been approached by the following brands to promote their brands, which one would you like to use?",
        "choice1": "Cocky-Cola",
        "choice2": "Slim-Slow",
        "choice3": "EggsBox",
        "choice4": "Popular Clothing Brand",
        "max_points": 3,
        "med_points": 4,
        "min_points": 1,
        "lose_points": 2,
        "answer": 2,
    },
    {
        "question": "Question 2",
        "choice1": "Answer 1",
        "choice2": "Answer 2",
        "choice3": "Answer 3",
        "choice4": "Answer 4",
        "max_points": 2,
        "med_points": 3,
        "min_points": 1,
        "lose_points": 4 
    },
    {
        "question": "Question 3",
        "choice1": "Answer 1",
        "choice2": "Answer 2",
        "choice3": "Answer 3",
        "choice4": "Answer 4",
        "max_points": 3,
        "med_points": 2,
        "min_points": 4,
        "lose_points": 1
    },
];
    
//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();