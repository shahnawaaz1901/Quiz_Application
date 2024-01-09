const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three",
  options: ["Two", "Three", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

let scoreNum = 0;
const { correctAnswer, options } = questionObj;
shuffle(options);

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
    optionsContainer.textContent = "";
    score.textContent = `Score : ${scoreNum}`;
  });
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
function shuffle(option) {
  for (let i = option.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [options[i], option[j]] = [option[j], option[i]];
  }
  return option;
}
