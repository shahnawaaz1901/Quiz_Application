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

let index = 0;
let scoreNum = 0;

//* Fetch Details
const questionSection = document.querySelector("#question");
const optionsContainer = document.querySelector("#options");
const score = document.querySelector("#score");
let selectedElement;
let correctAnswer;

//* Append Options
function displayQuestions() {
  const { options, question } = questionJSON[index];
  ({ correctAnswer } = questionJSON[index]);
  questionSection.textContent = question;
  shuffleOptions(options);
  options.forEach((opt) => {
    const newElement = document.createElement("button");
    newElement.textContent = opt;
    optionsContainer.appendChild(newElement);

    newElement.addEventListener("click", () => {
      removeBackgroundColor();
      newElement.style.backgroundColor = "#f57424";
      // if (opt == correctAnswer) {
      //   scoreNum++;
      // } else {
      //   scoreNum -= 0.25;
      // }
      selectedElement = opt;
      console.log(selectedElement);
    });
  });
}

function removeBackgroundColor() {
  document.querySelectorAll("#options > button").forEach((opt) => {
    opt.style.backgroundColor = "buttonface";
  });
}

document.getElementById("next").addEventListener("click", function () {
  document.getElementById("next").innerText = "next";
  if (selectedElement == correctAnswer) {
    scoreNum++;
  } else if (!selectedElement) {
    scoreNum;
  } else {
    scoreNum -= 0.25;
  }
  selectedElement = "";
  optionsContainer.textContent = "";
  index++;
  if (index == questionJSON.length) {
    score.textContent = `Score : ${scoreNum}`;
    document.getElementById("next").innerText = "Restart";
    window.alert("Quiz Completed Check Your Score");
    index = -1;
    return;
  }

  score.textContent = `Score : ${scoreNum}`;
  if (index == 0) {
    scoreNum = 0;
    score.textContent = "";
  }
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
