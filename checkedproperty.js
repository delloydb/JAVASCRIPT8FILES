// Wait for the DOM to fully load before running any code
document.addEventListener("DOMContentLoaded", function () {
  // Get references to all the elements we need
  const form = document.getElementById("myForm");
  const subscribeCheckbox = document.getElementById("myCheckBox");
  const visaRadio = document.getElementById("visaBtn");
  const masterCardRadio = document.getElementById("masterCardBtn");
  const payPalRadio = document.getElementById("payPalBtn");
  const subResult = document.getElementById("subResult");
  const paymentResult = document.getElementById("paymentResult");

  // Handle form submission
  form.addEventListener("submit", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // === CHECK SUBSCRIPTION STATUS ===
    if (subscribeCheckbox.checked) {
      subResult.textContent = "✅ You are subscribed!";
      subResult.style.color = "#28a745"; // Green
    } else {
      subResult.textContent = "❌ You are not subscribed";
      subResult.style.color = "#dc3545"; // Red
    }

    // === CHECK PAYMENT METHOD ===
    // Find which radio button is checked
    let selectedPayment = null;

    if (visaRadio.checked) {
      selectedPayment = "Visa";
    } else if (masterCardRadio.checked) {
      selectedPayment = "MasterCard";
    } else if (payPalRadio.checked) {
      selectedPayment = "PayPal";
    }

    // Display the result
    if (selectedPayment) {
      paymentResult.textContent = `💳 Payment Method: ${selectedPayment}`;
      paymentResult.style.color = "#17a2b8"; // Teal
    } else {
      paymentResult.textContent = "⚠️ Please select a payment method";
      paymentResult.style.color = "#ffc107"; // Yellow/Orange
    }
  });
});
