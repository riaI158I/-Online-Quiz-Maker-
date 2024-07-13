const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    },
    // Add more questions as needed
];

const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const questionHTML = `
        <h3>${currentQuestion.question}</h3>
        ${currentQuestion.options.map(option => `
            <label>
                <input type="radio" name="option" value="${option}"> ${option}
            </label>
        `).join('')}
    `;
    quizContainer.innerHTML = questionHTML;
}

function showResult() {
    localStorage.setItem('score', score);
    localStorage.setItem('total', quizData.length);
    window.location.href = 'results.html';
}

submitBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        userAnswers.push(selectedOption.value);
        if (selectedOption.value === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an option before submitting.");
    }
});

loadQuestion();
