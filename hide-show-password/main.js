
let password = document.getElementById('password');
let eyeIcon = document.getElementById('eyeIcon');


eyeIcon.addEventListener('click', function () {
  
  if(password.type === "password") {
    password.type = "text";
    eyeIcon.src = "./icons/eye-open.png";
  } 
  else {
    password.type = "password";
    eyeIcon.src = "./icons/eye-close.png";
  }
})