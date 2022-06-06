// PROBLEM:
// Create three options: Goat, Goat, Car
// Pick a random option
// Switch to another option OR
// Stay
// do for N times

const readline = require("readline-sync");

function otherOption(choice, array) {
  if (array[choice + 1] !== undefined) {
    return choice + 1;
  } else {
    return choice - 1;
  }
}

let times = Number(readline.question("Enter a number: "));

let options = ["goat", "goat", "car"];
options.sort((a, b) => Math.random() - Math.random());

let carsPickedWithStay = 0;
let carsPickedWithSwitch = 0;

for (let count = 0; count < times; count += 1) {
  let choice = Math.floor(Math.random() * 3);
  let choiceAfterSwitch = otherOption(choice, times);

  if (options[choice] === "car") carsPickedWithStay += 1;
  if (options[choiceAfterSwitch] === "car") carsPickedWithSwitch += 1;
}

console.log(carsPickedWithStay, carsPickedWithSwitch);
