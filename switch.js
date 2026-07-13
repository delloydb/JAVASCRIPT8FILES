// switch is a much efficient replacement for if statements

//example 1
let day = 1;

switch (day) {
  case 1:
    console.log("its sunday");
    break;
  case 2:
    console.log("its monday");
    break;
  case 3:
    console.log("its tuesday");
    break;
  case 4:
    console.log("its wednesday");
    break;
  case 5:
    console.log("its thursday");
    break;
  case 6:
    console.log("its friday");
    break;
  case 7:
    console.log("its sartuday");
    break;
  default:
    console.log("its not a day");
    break;
}

//example 2

let testScore = 33;
let letterGrade;

switch (testScore) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = "E";
    break;
}
