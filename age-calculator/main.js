
const dateInput = document.getElementById("date-input");

const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

const calculateBtn = document.getElementById("calculateBtn");




// Function to calculate age.

function calculateAge (dateOfBirth) {

  let currentDate = new Date();
  let userDateOfBirth = new Date(dateOfBirth);

  let year = currentDate.getFullYear() - userDateOfBirth.getFullYear();
  let month = currentDate.getMonth() - userDateOfBirth.getMonth();
  let day = currentDate.getDate() - userDateOfBirth.getDate();
 
  if(day < 0) {
    month--;
    day += new Date(currentDate.getFullYear(), 
                    currentDate.getMonth(), 
                    0).getDate();
  }

  if(month < 0) {
    year--;
    month += 12;
  }


  years.textContent = year;
  months.textContent = month;
  days.textContent = day;
}



// Event listener to handle calculate button click.
calculateBtn.addEventListener("click", () => {

  let dateOfBirth = dateInput.value;

  if(!dateOfBirth) {
    alert("Please select a date !");
    return;
  }

  calculateAge(dateOfBirth);
});