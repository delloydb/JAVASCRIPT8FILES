// Grab elements from the DOM
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

// Add your click event listener here to practice checking the states!
mySubmit.onclick = function () {
  // 1. Practice checking if the checkbox is ticked (.checked)
  if (myCheckBox.checked) {
    subResult.textContent = "You are subscribed!";
  } else {
    subResult.textContent = "You are NOT subscribed.";
  }

  // 2. Practice checking which radio button is selected
  if (visaBtn.checked) {
    paymentResult.textContent = "You are paying with Visa.";
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = "You are paying with MasterCard.";
  } else if (payPalBtn.checked) {
    paymentResult.textContent = "You are paying with PayPal.";
  } else {
    paymentResult.textContent = "Please select a payment method.";
  }
};
