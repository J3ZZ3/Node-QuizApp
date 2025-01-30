# Command Line Quiz Application

A Node.js-based interactive quiz application that tests users' knowledge with timed questions and real-time feedback.

## Features

- Timed questions with individual countdown timers
- Overall quiz timer
- Real-time score tracking
- Dynamic question progression
- Input validation
- Case-insensitive answer checking
- Clean command-line interface with persistent display

## Prerequisites

Before running this application, make sure you have:

- Node.js installed (v12.0.0 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:


git clone https://github.com/J3ZZ3/Node-QuizApp.git

cd Node-QuizApp

2. Install dependencies:

npm install

3. Start the quiz:

npm start


## Usage

1. Start the quiz:


node QuizApp.js

2. Follow the on-screen instructions:
   - Read each question carefully
   - Type your answer and press Enter
   - Watch the timer for each question
   - Complete all questions before the total time runs out

## Game Rules

- Total quiz duration: 220 seconds
- Time per question: 20 seconds
- 10 questions in total
- One point for each correct answer
- Case-insensitive answer checking
- Empty answers are not accepted
- Quiz ends when:
  - All questions are answered
  - Total time runs out
  - User exits the application


## Question Format

Questions are stored in an array of objects with the following structure:

```javascript
{
    question: "What is the capital of Italy?",
    answer: "Rome"
}
```

## Technical Details

### Key Components

- `readline`: Handles user input
- `setInterval`: Manages question and quiz timers
- ANSI escape codes: Manages command-line display
- Asynchronous operations: Handles user input without blocking

### Functions

- `startQuiz()`: Initializes the quiz and total timer
- `askQuestion()`: Displays questions and handles user input
- `handleAnswer()`: Validates and processes user answers
- `moveToNextQuestion()`: Progresses to the next question
- `endQuiz()`: Concludes the quiz and displays final score

## Error Handling

The application handles various edge cases:
- Empty inputs
- Invalid answers
- Timer expiration
- Quiz completion
