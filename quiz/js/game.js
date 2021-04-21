const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
console.log("Hello world from game!");

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
        "question": "You need to pick a location for a photoshoot, which one is the best for your brand?",
        "choice1": "Bali",
        "choice2": "Glasgow",
        "choice3": "London",
        "choice4": "Paris",
        "max_points": 2,
        "med_points": 3,
        "min_points": 1,
        "lose_points": 4, 
    },
    {
        "question": "What do you think your followers would like to see you do?",
        "choice1": "Clothing",
        "choice2": "Tech",
        "choice3": "Travelling",
        "choice4": "Gaming",
        "max_points": 3,
        "med_points": 2,
        "min_points": 4,
        "lose_points": 1,
    },
];

/*fetch('questions.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });*/

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_BONUS = 1000;
const MED_BONUS = 500;
const MIN_BONUS = 250;
const LOSE_BONUS = -250;
const MAX_QUESTIONS = 3;
console.log("Still here");

startGame = () => {
    console.log("lost here?");
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    console.log(availableQuesions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

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

        const classToApply =
           // selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
            selectedAnswer == currentQuestion.answer ? 'max_points' : 'med_points';// 
            selectedAnswer == currentQuestion.answer ? 'min_points' : 'lose_points';

        /*if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }*/

        if (classToApply === 'max_points') {
            incrementScore(MAX_BONUS);
        }

        if (classToApply === 'med_points') {
            incrementScore(MED_BONUS);
        }

        if (classToApply === 'min_points') {
            incrementScore(MIN_BONUS);
        }

        if (classToApply === 'lose_points') {
            incrementScore(LOSE_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

startGame();