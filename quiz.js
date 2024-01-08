const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three ",
  options: ["Two", "Three ", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};
let scoreNum = 0;
const { correctAnswer, options } = questionObj;
//* Fetch Details
const questionSection = document.querySelector("#question");
const optionsContainer = document.querySelector("#options");
const score = document.querySelector("#score");

//* Append Question
questionSection.textContent = questionObj.question;

//* Append Options
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
    console.log(scoreNum);
    optionsContainer.textContent = "";
    score.textContent = `Score : ${scoreNum}`;
  });
});
