
let display = document.getElementById('display');

// Append value one after another
function appendValue(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    }
    else {
        display.innerText += value;
    }
}


// clear display 
function clearDisplay () {
    display.innerText = '0';
}


// Delete each last number 
function deleteLast () {
    if(display.innerText.length === 1) {
        display.innerText = '0';
    }
    else {
        // display.innerText -= 1;    This will NOT work
        display.innerText = display.innerText.slice(0, -1);    // This will WORK
    }
}


// Total Calculation 
function calculate () {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = "Error";
    }
}