
const questions = [
    { question: 'In which HTML element do we put the JavaScript?', answer: '<script>' },
    { question: 'What is the index of the first element in an array?', answer: '0' },
    { question: 'How do you declare a function in JavaScript?', answer: 'function' },
    { question: 'Which method converts a JSON object into a string?', answer: 'JSON.stringify' },
    { question: 'Which operator is used to assign a value to a variable?', answer: '=' },
    { question: 'How do you write a conditional statement for executing some statements only if "i" is equal to 5?', answer: 'if (i == 5)' },
    { question: 'How do you create a loop that starts at 1 and ends at 5?', answer: 'for (let i = 1; i <= 5; i++)' },
    { question: 'What is the correct way to call a function named "myFunction"?', answer: 'myFunction()' },
    { question: 'How to append an item to an array named "myArray"?', answer: 'myArray.push(item)' },
    { question: 'What keyword is used to check whether a given property is valid or not in an object?', answer: 'in' },
    { question: 'How do you add a comment in a JavaScript?', answer: '// This is a comment' },
    { question: 'Which method can be used to find the length of a string named "myString"?', answer: 'myString.length' },
    { question: 'How do you round the number 7.25, to the nearest integer?', answer: 'Math.round(7.25)' },
    { question: 'Which JavaScript label catches all the values, except for the ones specified?', answer: 'default' },
    { question: 'How can you detect the client’s browser name?', answer: 'navigator.appName' }
];


let currentQuestion = 0;

function showQuestion() {
    const questionContainer = document.getElementById('question');
    questionContainer.textContent = questions[currentQuestion].question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const feedback = document.getElementById('feedback');
    if (userAnswer === questions[currentQuestion].answer) {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            feedback.textContent = 'Congratulations! You have answered all the questions.';
        }
    } else {
        feedback.textContent = 'Wrong! Please try again.';
        feedback.style.color = 'red';
    }
    document.getElementById('answer').value = ''; 
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);

// Oyunu başlatmak için ilk soruyu gösteriyoruz.
showQuestion();

const hints = [
    { hint: 'You use it in HTML to embed JavaScript code, between the head or body tags.' },
    { hint: 'Think of how counting starts, not with 1 but one before it.' },
    { hint: 'Start with the keyword for defining functions, followed by the function name and parentheses.' },
    { hint: 'This method is a property of the JSON object, used for stringification.' },
    { hint: 'This is the basic assignment operator, often used in variable initialization.' },
    { hint: 'This starts with an "if" followed by a condition in parentheses.' },
    { hint: 'It’s a loop that uses the keywords "for", "let", and "i" as the iterator.' },
    { hint: 'To invoke a function, you just need to write its name followed by parentheses.' },
    { hint: 'Use the method on arrays that pushes a new element to the end.' },
    { hint: 'This operator is two letters and checks for property existence in objects.' },
    { hint: 'This is how you would write non-executing text in JavaScript for readability.' },
    { hint: 'The property you would access on a string variable to get its character count.' },
    { hint: 'Use a method from the Math object that rounds to the nearest whole number.' },
    { hint: 'In a switch statement, this case will execute if no matching case values are found.' },
    { hint: 'This property of the window.navigator object returns the name of the browser.' }
];

let hintCount = 0;

document.getElementById('hint-button').addEventListener('click', function() {
    if (hintCount < 2) {
        const hintContainer = document.getElementById('feedback');
        hintContainer.textContent = hints[currentQuestion].hint;
        hintContainer.style.color = 'blue';
        hintContainer.style.visibility = 'visible';
        hintCount++;

        setTimeout(function() {
            hintContainer.style.visibility = 'hidden';
        }, 5000); // Hide the hint after 5 seconds
    } else {
        document.getElementById('feedback').textContent = 'No more hints!';
    }
});
