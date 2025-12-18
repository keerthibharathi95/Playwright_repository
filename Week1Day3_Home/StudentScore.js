
function getStudentGrade(score) {
  
  // We use 'true' so the switch evaluates the boolean expressions in each case
  switch (true) {
    case (score >= 90 && score <= 100):
      return 'A';
    case (score >= 80):
      return 'B';
    case (score >= 70):
      return 'C';
    case (score >= 60):
      return 'D';
    case (score >= 0 && score < 60):
      return 'F';
    default:
      return 'Invalid Score';
  }
}

// 2. Declare and initialize the variable
let studentScore = 85;

// 3. Call the function and print the result
let result = getStudentGrade(studentScore);
console.log("The student's grade is: " + result);