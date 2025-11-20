console.log("Hello from script.js");

//Get DOM Elements
const studentName = document.getElementById("studentName");
const grade1 = document.getElementById("grade1");
const grade2 = document.getElementById("grade2");
const grade3 = document.getElementById("grade3");
const message = document.getElementById("message");

function calculateAverage() {
  let studentNameValue = studentName.value;
  let grade1Value = parseFloat(grade1.value);
  let grade2Value = parseFloat(grade2.value);
  let grade3Value = parseFloat(grade3.value);

  let average = (grade1Value + grade2Value + grade3Value) / 3;

  if (average > 70) {
    message.textContent = `Congratulations, ${studentNameValue} you passed! Your grade average is: ${average.toFixed(
      2
    )}`;
  } else {
    message.textContent = `Keep practicing, ${studentNameValue}. Your average is: ${average.toFixed(
      2
    )}`;
  }
}
