const textInput = document.getElementById("textInput");
const currentCount = document.getElementById("currentCount");
const progressFill = document.getElementById("progressFill");

const maxLength = parseInt(textInput.getAttribute("maxlength"));


textInput.addEventListener("input", () => {

  const currentLength = textInput.value.length;
  const percentage = (currentLength / maxLength) * 100;

  currentCount.textContent = currentLength;

  progressFill.style.width = `${percentage}%`;

  // First remove all the classes
  currentCount.classList.remove("warning", "danger");
  progressFill.classList.remove("warning", "danger");

  // Adding "warning" class if percentage is greater-than or equal 80 and less-than 100.
  if(percentage >= 80 && percentage < 100) {
    currentCount.classList.add("warning");
    progressFill.classList.add("warning");
  }

  // Adding "danger" class if percentage is greater-than or equal 100.
  if(percentage >= 100) {
    currentCount.classList.add("danger");
    progressFill.classList.add("danger");
  }
});