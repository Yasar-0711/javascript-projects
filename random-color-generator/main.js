const hexColorValue = document.querySelector('.hex-color-value');
const hexColorContainer = document.querySelector('.hex-color-container');

const hexButton = document.querySelector('.hex-btn');
const hexCopyButton = document.querySelector('.hex-copy-btn');



// Random HEX Color Generator : //

hexButton.addEventListener('click', () => {

    // Logic to generate random value
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput = '';

    for(let i = 0, charSetLength = characterSet.length; i < 6; i++) {
        hexColorOutput += characterSet.charAt(Math.floor(Math.random() * charSetLength));
    }
    
    // To change text content and background-color
    hexColorValue.textContent = `#${hexColorOutput}`;
    hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;

});




// Random RGB Color Generator : //

const rgbButton = document.querySelector('.rgb-btn');
const rgbCopyButton = document.querySelector('.rgb-copy-btn');
const rgbColorValue = document.querySelector('.rgb-color-value');

const getRedInputRange = document.querySelector('#red');
const getGreenInputRange = document.querySelector('#green');
const getBlueInputRange = document.querySelector('#blue');

const rgbColorContainer = document.querySelector('.rgb-color-container');


rgbButton.addEventListener('click', () => {

    // To get value of range (from 0 to 255)
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;

    // To change text content and background color
    rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

    rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

});





function copyHexColorToClipboard () {
    navigator.clipboard.writeText(hexColorValue.textContent);
    alert('HEX Color Value is successfully Copied to Clipboard.');
}

hexCopyButton.addEventListener('click', copyHexColorToClipboard);


function copyRgbColorToClipboard () {
    navigator.clipboard.writeText(rgbColorValue.textContent);
    alert('RGB Color Value is successfully Copied to Clipboard.')
}

rgbCopyButton.addEventListener('click', copyRgbColorToClipboard);
















