import questions from "./questions.js";

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const optionContainer = document.getElementById("option-container");
const options = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;

function showQuestion(question) {
  questionElement.innerText = question.question;
  options.forEach((option, index) => {
    option.innerText = question.choices[index];
    option.addEventListener("click", () => selectOption(index));
  });
}

function selectOption(optionIndex) {
  if (optionIndex === questions[currentQuestionIndex].correctAnswer) {
    options[optionIndex].style.backgroundColor = "#5cb85c";
  } else {
    options[optionIndex].style.backgroundColor = "#d9534f";
  }
  options.forEach((option) => (option.disabled = true));
  nextButton.style.display = "block";
}

function showNextQuestion() {
  options.forEach((option) => {
    option.style.backgroundColor = "#007bff";
    option.disabled = false;
  });
  nextButton.style.display = "none";
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    questionContainer.innerHTML = "<h2>Quiz completed!</h2>";
  }
}

showQuestion(questions[currentQuestionIndex]);
nextButton.addEventListener("click", showNextQuestion);
