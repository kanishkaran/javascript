const questions = [
    {
      question: "What is the capital of France?",
      options: ["Madrid", "Berlin", "Paris", "Lisbon"],
      correct: 2
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Python", "Java", "C", "JavaScript"],
      correct: 3
    },
    {
      question: "What does CSS stand for?",
      options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style System", "Creative Style Syntax"],
      correct: 1
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const formEl = document.getElementById("quiz-form");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    formEl.innerHTML = "";
  
    q.options.forEach((opt, i) => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="option" value="${i}" />
        ${opt}
      `;
      formEl.appendChild(label);
    });
  
    resultEl.textContent = "";
  }
  
  nextBtn.addEventListener("click", () => {
    const selected = formEl.querySelector('input[name="option"]:checked');
    if (!selected) {
      alert("Please select an option.");
      return;
    }
  
    if (parseInt(selected.value) === questions[currentQuestion].correct) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    questionEl.textContent = "Quiz Completed!";
    formEl.style.display = "none";
    nextBtn.style.display = "none";
    resultEl.textContent = `Your Score: ${score} / ${questions.length}`;
  }
  
  loadQuestion();
  