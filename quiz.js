const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three",
  answers: ["Two", "Three ", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};
let index = 0;

const questionSection = document.querySelector("#question");
const optionsContainer = document.querySelector("#options");

questionSection.textContent = questionObj.question;
for (let everyOption of questionObj.answers) {
  const newElement = document.createElement("button");
  newElement.textContent = everyOption;
  optionsContainer.appendChild(newElement);
}

const options = document.querySelectorAll("button");
for (let every of options) {
  every.addEventListener("click", function (e) {
    console.log(e.target.textContent);
  });
}
