import questions from "./sampquestions.js";

//Quiz State dom Elements
const quizContainer = document.getElementById("quiz-container");
const questionCount = document.querySelector(".question-count");
const quizTimerEl = document.querySelector(".quiz-timer");

const questionEl = document.querySelector(".quiz-question");
const options = document.querySelectorAll(".option");

// Result State dom
const resultContainer = document.getElementById("result-container");
const resultScore = document.getElementById("result-score");
const reset = document.getElementById("reset-btn");

let currentQuestionIndex = 0;
let score = 0;
const totalQuestion = questions.length;

// const questions: {
//   id: number;
//   question: string;
//   choices: string[];
//   correctAnswer: number;
// }

// showQuestion
function showQuestion(question) {
  questionEl.textContent = question.question;
  questionCount.textContent = `${question.id}/${totalQuestion}`;
  options.forEach((choice, index) => {
    choice.textContent = question.choices[index];
    choice.addEventListener("click", () =>
      verifyAnswer(index, question.correctAnswer)
    );
  });
}

// verify Answer
function verifyAnswer(selectedIndex, correctIndex) {
  if (selectedIndex === correctIndex) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < totalQuestion) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showResult();
  }
}

function resultDiv() {
  resultContainer.style.display = "block";
  quizContainer.style.display = "none";
}

function quizDiv() {
  resultContainer.style.display = "none";
  quizContainer.style.display = "block";
}

function showResult() {
  resultScore.textContent = `you scored ${score} out of ${totalQuestion} questions`;
  resultDiv();
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion(questions[currentQuestionIndex]);
  quizDiv();
  console.log("reset clicked ");
}

reset.addEventListener("click", () => {
  resetQuiz();
});

showQuestion(questions[currentQuestionIndex]);
