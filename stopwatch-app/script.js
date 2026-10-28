
const miliSecondText = document.getElementById('milisecond');
const secondText = document.getElementById('second');
const minuteText = document.getElementById('minute');
const hourText = document.getElementById('hour');

const resetButton = document.getElementById('resetButton');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');


resetButton.addEventListener('click', resetTimer);
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);

let interval = null;

let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;


// Function to reset timer
function resetTimer () {
  clearInterval(interval);
  
  // Reset values to zero(0)
  milisecond = 0;
  second = 0;
  minute = 0;
  hour = 0;
  
  updateTimerDisplay();
}


// Function to start timer
function startTimer () {
  
  interval = setInterval(() => {
    milisecond++
    
    // Change seconds if milisecond exceed 99
    if(milisecond > 99) {
      milisecond = 0;
      second++
    }
    // Change minutes if seconds exceed 59
    if(second > 59) {
      second = 0;
      minute++
    }
    // Change hours if minutes exceed 59
    if(minute > 59) {
      minute = 0;
      hour++
    }
    
    // Update timer function calling
    updateTimerDisplay()
  }, 10)
}


// Function to puase timer
function pauseTimer () {
  clearInterval(interval);
}



// Function to update timer display
function updateTimerDisplay () {
  // Updaing Miliseconds Text
  miliSecondText.textContent = milisecond < 10 
                              ? '0' + milisecond 
                              : milisecond
  // Updating Seconds Text 
  secondText.textContent = second < 10 
                            ? '0' + second 
                            : second
  // Updating Minutes Text 
  minuteText.textContent = minute < 10 
                            ? '0' + minute 
                            : minute
  // Updating Hours Text
  hourText.textContent = hour < 10 
                            ? '0' + hour 
                            : hour
}