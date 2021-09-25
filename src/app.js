/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("hello!?");
  document.getElementById("mybtn").addEventListener("click", updateText);
};

function updateText() {
  console.log("hello");
  document.getElementById("excuse").innerHTML = generatedExcuse;
}

let who = ["The dog", "My grandma", "His turtle", "My bird", "lion"];
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
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)];
  return excuse;

  // get a random position from the action array
  // get a random position from the what array
  // get a random position from the when array
  // concatenate the adove positions into a sentence
}
let generatedExcuse = generateExcuse();
document.getElementById("excuse").innerHTML = generatedExcuse;
