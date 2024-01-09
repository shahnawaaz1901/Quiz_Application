const questionJSON = [
  {
    correctAnswer: ".h",
    options: [".cpp", ".h", ".hg", ".hg"],
    question:
      "Identify the correct extension of the user-defined header file in C++.?",
  },
  {
    correctAnswer: "Friend Constructor",
    options: [
      "Friend Constructor",
      "Default Constructor",
      "Parameterized Question",
      "Copy Constructor",
    ],
    question: "Identify the incorrect constructor type.?",
  },
  {
    correctAnswer: "bottom-up",
    options: ["right-left", "top-down", "left-right", "bottom-up"],
    question: "C++ uses which approach?",
  },
  {
    correctAnswer: "&",
    options: ["*", "&", "|", "$"],
    question: "Which of the following is “address of operator”?.",
  },
];

let index = 1;
const questionObj = {
  correctAnswer: "Three",
  options: ["Two", "Three", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

let scoreNum = 0;

//* Fetch Details
const questionSection = document.querySelector("#question");
const optionsContainer = document.querySelector("#options");
const score = document.querySelector("#score");

//* Append Question

shuffleOptions(options);
//* Append Options
function displayQuestions() {
  const { correctAnswer, options, question } = questionJSON[index];
  questionSection.textContent = question;
  options.forEach((opt) => {
    const newElement = document.createElement("button");
    newElement.textContent = opt;
    optionsContainer.appendChild(newElement);

    newElement.addEventListener("click", () => {
      if (opt == correctAnswer) {
        scoreNum++;
      } else {
        scoreNum -= 0.25;
      }
      // optionsContainer.textContent = "";
      score.textContent = `Score : ${scoreNum}`;
    });
  });
}

document.getElementById("next").addEventListener("click", function () {
  index++;
  if (index == questionJSON.length) {
    score.textContent = `Score : ${scoreNum}`;
    window.alert("Quiz Completed Check Your Score");
  }
  document.getElementById("next").remove();
  displayQuestions();
});
/* 
  Math.random function return Numbers from 0 to 1 like 0.456767, 
  0.678 it can be anything between 0 to 1 
*/

/* 
  If we want number from 0 to any number then we need to multiply Math.random()
  with the number which we want between 0 to them
*/
/* 
  Math.floor is the function which converts any number into the integer and removes
  the decimal part from that number it can helps us to shuffle elements in the
  array because array not contains the decimal index value
*/
function shuffleOptions(options) {
  for (let i = options.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [options[i], options[j]] = [options[j], options[i]];
  }
}

displayQuestions();
