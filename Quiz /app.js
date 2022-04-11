//Question
const questionBank = [
  {
    //  Q1
    question: "What does HTML stand for?",

    option: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Hyper Text Making Language",
      "Hyper Text Mark Language",
    ],
    answer: "Hyperlinks and Text Markup Language",
  },
  // Q2
  {
    question: "What year was JavaScript launched?",
    option: ["1996", "1995", "1994", "none of the above"],
    answer: "1995",
  },
  // Q3
  {
    question: "What does CSS stand for?",
    option: [
      "Colorful StyleSheet",
      "Creative Style Sheet",
      "Cascading Style Sheet",
      "Computer Style Sheet",
    ],
    answer: "Cascading Style Sheet",
  },
  //   Q4
  {
    question: "Which following statement can prevent creating sub class?",

    option: [
      "“static class test{ }",
      "public class test{ }",
      "abstract class test{ }",
      "final class test{ }",
    ],
    answer: "final class test{ }",
  },
  //   Q5
  {
    question: "Which following is a correct statement?",

    option: [
      "“if (     ) { } else { }",
      "if (     ) then { } else { }",

      "if (     ) then { } then else { }",
      "if (     ) then { } if else { }” ",
    ],
    answer: "“if (     ) { } else { }",
  },
];

const question = document.getElementById("question");
const quizContainer = document.getElementById("quiz-container");
const scorecard = document.getElementById("scorecard");
const option0 = document.getElementById("option0");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const next = document.querySelector(".next");
const points = document.getElementById("score");
const span = document.querySelectorAll("span");
let i = 0;
let score = 0;

//function to display questions
function displayQuestion() {
  for (let a = 0; a < span.length; a++) {
    span[a].style.background = "none";
  }
  question.innerHTML = "Q." + (i + 1) + " " + questionBank[i].question;
  option0.innerHTML = questionBank[i].option[0];
  option1.innerHTML = questionBank[i].option[1];
  option2.innerHTML = questionBank[i].option[2];
  option3.innerHTML = questionBank[i].option[3];
  stat.innerHTML =
    "Question" + " " + (i + 1) + " " + "of" + " " + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
    document.getElementById(e.id).style.background = "limegreen";
  } else {
    document.getElementById(e.id).style.background = "tomato";
  }
  setTimeout(nextQuestion, 200);
}

//function to display next question
function nextQuestion() {
  if (i < questionBank.length - 1) {
    i = i + 1;
    displayQuestion();
  } else {
    points.innerHTML = score + "/" + questionBank.length;
    quizContainer.style.display = "none";
    scoreboard.style.display = "block";
  }
}

//click events button
next.addEventListener("click", nextQuestion);

//Back to Quiz button event
function backToQuiz() {
  location.reload();
}

//function  check Answers
function checkAnswer() {
  let answerBank = document.getElementById("answerBank");
  let answers = document.getElementById("answers");
  answerBank.style.display = "block";
  scoreboard.style.display = "none";
  for (let a = 0; a < questionBank.length; a++) {
    let list = document.createElement("li");
    list.innerHTML = questionBank[a].answer;
    answers.appendChild(list);
  }
}

displayQuestion();
