// while loop is a conditional statement that executes a program infinitely while some condition is true

// example while loop

let username;

while (username === " ") {
  username = window.prompt("enter name");
}

console.log("Name is missing");

//do while loop counter for while loop that allows to execute one condition as the rest may not be true
do {
  username = window.prompt("enter name");
} while (username === " ");

console.log("Name is missing");

//while loop for login
let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("enter your username");
  passord = window.prompt("enter your password");

  if (username === "myUsername" && passord === "myPassword") {
    loggedIn = true;
    console.log("you are logged in");
  } else {
    console.log("invalid credentials");
  }
}

//do while for login
do {
  username = window.prompt("enter your username");
  passord = window.prompt("enter your password");

  if (username === "myUsername" && passord === "myPassword") {
    loggedIn = true;
    console.log("you are logged in");
  } else {
    console.log("invalid credentials");
  }
} while (!loggedIn);
