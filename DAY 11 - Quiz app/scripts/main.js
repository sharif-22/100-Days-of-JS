import questions from "./questions.js";

//Quiz State dom Elements
const quizContainer = document.getElementById("quiz-container");
const questionCount = document.querySelector(".question-count");
const questionEl = document.querySelector(".quiz-question");
const options = document.querySelectorAll(".option");

// Result State dom
const resultContainer = document.getElementById("result-container");
const resultScore = document.getElementById("result-score");
const reset = document.getElementById("reset-btn");

// variables
let currentQuestionIndex = 0;
let score = 0;
const numQuestionsToShow = 15;
let currentQuestion = 1;
let selectedQuestions = getShuffledQuestions(numQuestionsToShow, questions);

// showQuestion
function showQuestion(data) {
  questionEl.textContent = data.question;
  questionCount.textContent = `${currentQuestion}/${numQuestionsToShow}`;
  options.forEach((choice, index) => {
    choice.textContent = data.choices[index];
    choice.removeEventListener("click", optionClickHandler); // Remove existing listener
    choice.addEventListener("click", optionClickHandler);
  });
}

// Option click handler
function optionClickHandler(event) {
  // selected String
  const selectedIndex = event.target;
  const selectedChoice = selectedIndex.textContent;

  // correct String
  const correctIndex = selectedQuestions[currentQuestionIndex].correctAnswer;
  const correctChoice =
    selectedQuestions[currentQuestionIndex].choices[correctIndex];
  verifyAnswer(selectedChoice, correctChoice);
}

// verify Answer
function verifyAnswer(selectedIndex, correctIndex) {
  if (selectedIndex === correctIndex) {
    score++;
  }
  nextQuestion();
}

// next Questions
function nextQuestion() {
  currentQuestionIndex++;
  currentQuestion++;
  if (currentQuestionIndex < numQuestionsToShow) {
    showQuestion(selectedQuestions[currentQuestionIndex]);
  } else {
    showResult();
  }
}

function showResult() {
  resultScore.textContent = `you scored ${score} out of ${numQuestionsToShow} questions`;
  // resultDiv
  resultContainer.style.display = "block";
  quizContainer.style.display = "none";
}

function resetQuiz() {
  currentQuestionIndex = 0;
  currentQuestion = 1;
  score = 0;
  // quizDiv
  resultContainer.style.display = "none";
  quizContainer.style.display = "block";
  // new Quiz
  selectedQuestions = getShuffledQuestions(numQuestionsToShow, questions);
  showQuestion(selectedQuestions[currentQuestionIndex]);
}

reset.addEventListener("click", resetQuiz);

// Display questions
showQuestion(selectedQuestions[currentQuestionIndex]);

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to get a shuffled subset of questions
function getShuffledQuestions(numQuestions, data) {
  const shuffledQuestions = [...data]; // ... used create a copy of the original array
  shuffleArray(shuffledQuestions);
  return shuffledQuestions.slice(0, numQuestions);
}
