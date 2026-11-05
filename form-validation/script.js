const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");



form.addEventListener("submit", function(event) {
  event.preventDefault();

  validateInputs();
})


// Function for input validation
function validateInputs () {
  
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  // Username validation
  if(usernameValue === "") {
    setError(username, "Username is required !")
  } else {
    setSuccess(username)
  }

  // Email validation
  if(emailValue === "") {
    setError(email, "Email is required !");
  }
  else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address !");
  }
  else {
    setSuccess(email);
  }

  
  // Password validation
  if(passwordValue === "") {
    setError(password, "Password is required !");
  }
  else if(passwordValue.length < 6) {
    setError(password, "Password must be at least 6 character !");
  }
  else {
    setSuccess(password);
  }


  // Confirm password validation
  if(confirmPasswordValue === "") {
    setError(confirmPassword, "Please confirm your password !");
  }
  else if(confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, "Passwords doesn't match !");
  }
  else {
    setSuccess(confirmPassword);
  }
  
}



// Function to check email format is correct or not.
function isValidEmail (email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(String(email).toLowerCase());
}



// Function to set error
function setError (element, message) {

  const inputBox = element.parentElement;
  const errorDisplay = inputBox.querySelector(".error");

  errorDisplay.innerText = message;
  inputBox.classList.add("error");
  inputBox.classList.remove("success");
}



// Function to set success
function setSuccess (element, message) {

  const inputBox = element.parentElement;
  const errorDisplay = inputBox.querySelector(".error");

  errorDisplay.innerText = "";
  inputBox.classList.add("success");
  inputBox.classList.remove("error");
}

