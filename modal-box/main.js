const openModalButton = document.querySelector('.open-modal-btn');
const closeButton = document.querySelector(".close-btn");

const modalBackground = document.querySelector('.modal-background');


// To open modal by clicking open modal button.
openModalButton.addEventListener('click', function () {
    modalBackground.style.display = 'block';
})

// To close modal by clicking close button.
closeButton.addEventListener('click', function () {
    modalBackground.style.display = 'none';
})

// To close modal by clicking outside modal box.
window.addEventListener('click', function (event) {
    if(event.target === modalBackground) {
        modalBackground.style.display = 'none';
    }
})




