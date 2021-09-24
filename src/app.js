/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("yo u up!?");
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function generateExcuse() {
  // get a random position from the who array
  let excuse =
    who[Math.floor(Math.random() * 4)] +
    " " +
    action[Math.floor(Math.random() * 4)] +
    " " +
    what[Math.floor(Math.random() * 3)] +
    " " +
    when[Math.floor(Math.random() * 5)];
  return excuse;

  // get a random position from the action array
  // get a random position from the what array
  // get a random position from the when array
  // concatenate the adove positions into a sentence
}
let generatedExcuse = generateExcuse();
document.getElementById("excuse").innerHTML = generatedExcuse;
