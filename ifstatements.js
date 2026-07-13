// if statements = condition staements that execute a function when a request is true and another hen false

// Nested if statement
let admissionNo = 201;
let isStudent = false;

if ((admissionNo) => 200) {
  console.log("you are a past undergraduate level");

  if (isStudent == false) {
    console.log("you are a postgraduate level student");
  } else {
    console.log("you are also not a undergraduate student");
  }
} else {
  console.log("you are still an undergraduate level");
}

//else if staement

let age = 21;

if (age < 18) {
  console.log("You do not qualify to drive");
} else if (age >= 18 && age < 100) {
  console.log("You are qualified to drive");
} else if (age >= 100) {
  console.log("Step out of the vehicle, you are under arrest");
} else {
  console.log("Invalid age");
}
