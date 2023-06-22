function validateEmail() {
  var emailInput = document.getElementById("email-input");
  var emailErrorMessage = document.getElementById("email-error-message");
  var email = emailInput.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
    emailInput.style.background = "#ffff";
    emailErrorMessage.style.display = "block";
  } else {
    emailInput.style.borderColor = "";
    emailErrorMessage.style.display = "none";
  }
}
