
//Define Calculate Button
var calcBtn = document.getElementById("calculate-button");
//Define Answer
var answer = document.getElementById("answer");


var calculate = function() {
  //Define Input Boxes
  var inputOne = document.getElementById("value-one");
  var inputTwo = document.getElementById("value-two");
  //Do Math
  var x = Number(inputOne.value);
  var y = Number(inputTwo.value);
  var sum = x + y;
  answer.innerHTML = sum;
};

calcBtn.addEventListener("click", calculate);
