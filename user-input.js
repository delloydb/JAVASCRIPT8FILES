// Accepting user input
/*
1. window prompt method
2. html textbox method
*/

let username;
// userName = window.prompt("Enter Username");
// console.log(userName);

document.getElementById("button").onclick = function () {
  username = document.getElementById("username").value;
  document.getElementById("h1").textcontext = "hello ${username}";
};
