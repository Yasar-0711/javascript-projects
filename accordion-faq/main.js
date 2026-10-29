const data = [
    {
        id: 1,
        question: 'What are accordion components?',
        answer: 'Accordion components are user interface elements used for, Accordion components are user interface elements used for'
    },
    {

        id: 2,
        question: 'What are they used for?',
        answer: 'Accordion components are user interface elements used for.  Accordion components are user interface elements used for'
    },
    {
        id: 3,
        question: 'Accordion as a musical instrument?',
        answer: 'Accordion components are user interface elements used for, Accordion components are user interface elements used for'
    },
    {
        id: 4,
        question: 'Can i create an accordion component with different ways?',
        answer: 'Accordion components are user interface elements used for,  Accordion components are user interface elements used for'
    },
];


const accordionWrapper = document.querySelector('.accordion');

function createAccordionData() {

    accordionWrapper.innerHTML = data.map((dataItem) => 
        `
        <div class='accordion_item'>
            <div class='accordion_title'>
                <h3> ${dataItem.question} </h3>
                <i class='fa-solid fa-arrow-down'></i>
            </div>

            <div class='accordion_content'>
                <p>${dataItem.answer}</p>
            </div>
        </div>       
        `
    ).join(' ');
}

createAccordionData();


const getAccordionTitles = document.querySelectorAll('.accordion_title');



    getAccordionTitles.forEach(currentItem => {
    
    currentItem.addEventListener('click', (event) => {

        if(currentItem.classList.contains('active')) {
             currentItem.classList.remove('active');
        } 
        else {
            let getAlreadyAddedActiveClasses = document.querySelectorAll('.active');

            getAlreadyAddedActiveClasses.forEach(currentActiveItem => {
                currentActiveItem.classList.remove('active');
            })

            currentItem.classList.add('active');
        }

    })
});







