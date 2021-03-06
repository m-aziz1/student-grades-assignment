// Student Grades Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu");

// Global Variable
let grades = [60, 35, 80, 25, 90, 45];
let maxGrade = 100; // grade values should be b/t 0 and max

// Display Data
drawArray();

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "first40") {
    firstTo40();
  } else if (selection === "last50") {
    lastTo50();
  } else if (selection === "random100") {
    randomTo100();
  } else if (selection === "addRandom") {
    addRandomGrade();
  } else if (selection === "removeLast") {
    removeLastGrade();
  } else if (selection === "count50") {
    countBelow50();
  } else if (selection === "change50") {
    lowGradesTo50();
  } else if (selection === "increase10") {
    increaseGradesBy10();
  } else if (selection === "decrease10") {
    decreaseGradesBy10();
  }

  // Redraw array to show any changes
  drawArray();
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function firstTo40() {
  // Set the grade of the first student to 40.
  grades.splice(0, 1, 40);
  listGrades();
}

function lastTo50() {
  // Set the grade of the last student to 50.
  grades.splice(grades.length - 1, 1, 50);
  listGrades();
}

function randomTo100() {
  // Set the grade of a random student to 100.
  let randIndex = Math.floor(Math.random() * grades.length);
  grades.splice(randIndex, 1, 100);
  listGrades();
}

function addRandomGrade() {
  // Add a random grade between 0 and 100 to the end of the array.
  let randValue = Math.round(Math.random() * 100);
  grades.push(randValue);
  listGrades();
}

function removeLastGrade() {
  // Remove the last grade.
  if (grades.length > 1) {
    grades.pop();
  }
  listGrades();
}

function countBelow50() {
  // Count how many grades are below 50.  Output the result.
  outputEl.innerHTML = "Count grades below 50";
  var count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
      count++;
    }
  }
  listGrades();
  outputEl.innerHTML += `<br><p>Grades below 50: ${count}</p>`;
}

function lowGradesTo50() {
  // Change all grades that are below 50 to be equal to 50.
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
      grades[i] = 50;
    }
  }
  listGrades();
}

function increaseGradesBy10() {
  // Increase each grade by 10%.
  for (i = 0; i < grades.length; i++) {
    grades[i] >= 90 ? (grades[i] = maxGrade) : (grades[i] += 10);
  }
  listGrades();
}

function decreaseGradesBy10() {
  for (i = 0; i < grades.length; i++) {
    grades[i] <= 10 ? (grades[i] = 0) : (grades[i] -= 10);
  }
  listGrades();
}

// Function to draw current state of grades array
function drawArray() {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < grades.length; i++) {
    divHeight = (grades[i] / maxGrade) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

//List Grade Values
function listGrades() {
  outputEl.innerHTML = "";
  for (i = 0; i < grades.length; i++) {
    outputEl.innerHTML += `${grades[i]}&nbsp`;
  }
  if (grades.length === 30) {
    grades.push("<br>");
  }
}
