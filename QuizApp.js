const readline = require('readline');
const readlineSync = require('readline-sync');

let questions = [
    { question: "What is the capital of Italy?", answer: "Rome" },
    { question: "Who wrote 'Hamlet'?", answer: " William Shakespeare" },
    { question: "What is the chemical symbol for Gold?", answer: "Au" },
    { question: "What is the process of the formation of egg and sperm cells?", answer: "Meiosis" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    { question: "What is the largest planet in our Solar System?", answer: "Jupiter" },
    { question: "What is the powerhouse of the cell?", answer: "Mitochondria" },
    { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
    { question: "What is the smallest prime number?", answer: "2" },
    { question: "What is the longest river in the world?", answer: "Nile" }
];


let totalQuizTime = 220; // Total time for the quiz in seconds
let questionTime = 20; // Time per question in seconds
let currentQuestionIndex = 0;
let score = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (questionObj) => {
    console.log(`\n${questionObj.question}`);
    let timeRemaining = questionTime;
    let userInput = '';
    
    const handleAnswer = (answer) => {
        if (!answer.trim()) {
            console.log('Invalid input. Please provide an answer.');
            console.log(`Time remaining: ${timeRemaining} seconds`);
            rl.question('Your answer: ', handleAnswer);
            return;
        }
        
        clearInterval(questionInterval);
        if (answer.trim().toLowerCase() === questionObj.answer.trim().toLowerCase()) {
            console.log('Correct!');
            score += 1;
        } else {
            console.log(`Incorrect. The correct answer was: ${questionObj.answer}`);
        }
        moveToNextQuestion();
    };

    // Store the initial cursor position
    process.stdout.write(`\n${questionObj.question}\n`);
    process.stdout.write(`Time remaining: ${timeRemaining} seconds\n\n`);
    process.stdout.write('Your answer: ');

    const questionInterval = setInterval(() => {
        timeRemaining -= 1;
        
        // Move cursor up 3 lines and clear
        process.stdout.write('\x1B[3A\x1B[0J');
        
        // Redraw the question and timer
        process.stdout.write(`${questionObj.question}\n`);
        process.stdout.write(`Time remaining: ${timeRemaining} seconds\n\n`);
        process.stdout.write('Your answer: ');
        
        if (timeRemaining <= 0) {
            clearInterval(questionInterval);
            console.log('\nTime is up!');
            console.log(`The correct answer was: ${questionObj.answer}`);
            moveToNextQuestion();
        }
    }, 1000);

    rl.question('', handleAnswer);
};

const moveToNextQuestion = () => {
    currentQuestionIndex += 1;
    if (currentQuestionIndex < questions.length) {
        askQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
};

const endQuiz = () => {
    console.log(`\nQuiz Over! Your score is: ${score}`);
    rl.close();
    process.exit(0);
};

const startQuiz = () => {
    console.log('\n=== Welcome to the Quiz! ===');
    console.log(`You have ${totalQuizTime} seconds to complete ${questions.length} questions.`);
    console.log(`Each question has a ${questionTime} second time limit.`);
    console.log('Good luck!\n');
    
    let totalTimeRemaining = totalQuizTime;
    const quizInterval = setInterval(() => {
        totalTimeRemaining -= 1;
        if (totalTimeRemaining <= 0) {
            clearInterval(quizInterval);
            console.log('\nTotal quiz time is up!');
            endQuiz();
        }
    }, 1000);

    askQuestion(questions[currentQuestionIndex]);
};

startQuiz();
