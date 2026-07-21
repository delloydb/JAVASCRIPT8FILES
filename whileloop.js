// while loop is a conditional statement that executes a program infinitely while some condition is true

// example

let username;

while (username === " ") {
  username = window.prompt("enter name");
}

console.log("Name is missing");

do {
  username = window.prompt("enter name");
} while (username === " ");

console.log("Name is missing");
