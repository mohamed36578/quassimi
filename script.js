// Get all flip buttons and add event listeners
document.querySelectorAll('.flip-button').forEach(button => {
    button.addEventListener('click', function(event) {
        // Prevent card flip when clicking on the button itself
        event.stopPropagation();

        // Flip the parent card of the clicked button
        const card = this.closest('.card');
        card.classList.toggle('flipped');

    });
});

    // Get all flip buttons and add event listeners
    document.querySelectorAll('.orderButton').forEach(button => {
    button.addEventListener('click', function(event) {
        // Prevent card flip when clicking on the button itself
        event.stopPropagation();

        // Flip the parent card of the clicked button
        const card = this.closest('.card');
        card.classList.toggle('flipped');

        const parentDiv = this.closest('.d-flex');
        const counter = parentDiv.querySelector('.counter');
        const counter_total = parentDiv.querySelector('.counter_total');
        const details = parentDiv.querySelector('.details');
        //let count = parseInt(counter.textContent);
        //count++;
        counter.textContent = 0;
        counter_total.textContent = 0; // Update counter display
        details.textContent = '';

        const plusButton = parentDiv.querySelector('.plusButton');
        plusButton.textContent = 'add to cart';
        const orderButton = parentDiv.querySelector('.orderButton');
        orderButton.style.display = 'none';

        // Show the "Minus" button if the count is greater than 1
        const moinsButton = parentDiv.querySelector('.moinsButton');
        moinsButton.style.display = 'none';
    });
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




// Function to handle the button clicks


// Function to increment the counter
const plusButtons = document.querySelectorAll('.plusButton');
plusButtons.forEach(button => {
    button.addEventListener('click', function() {
        const parentDiv = this.closest('.d-flex');
        const counter = parentDiv.querySelector('.counter');
        const counter_price = parentDiv.querySelector('.counter_price');
        const counter_total = parentDiv.querySelector('.counter_total');
        const details = parentDiv.querySelector('.details');
        let count = parseInt(counter.textContent);
        let count_price = parseInt(counter_price.textContent);
        count++;
        counter.textContent = count; // Update counter display
        counter_total.textContent = count * count_price;
        const orderButton = parentDiv.querySelector('.orderButton');
        orderButton.style.display = 'inline';
        details.textContent = 'pizza_margeritta' + ' ' + parseInt(counter.textContent) + ' pcs' + ' total: '+ counter_total.textContent ;
        const plusButton = parentDiv.querySelector('.plusButton');
        plusButton.textContent = '+';

        // Show the "Minus" button if the count is greater than 1
        const moinsButton = parentDiv.querySelector('.moinsButton');
        moinsButton.style.display = count > 1 ? 'inline' : 'none';
    });
});

// Function to decrement the counter
const moinsButtons = document.querySelectorAll('.moinsButton');
moinsButtons.forEach(button => {
    button.addEventListener('click', function() {
        const parentDiv = this.closest('.d-flex');
        const counter = parentDiv.querySelector('.counter');
        const counter_price = parentDiv.querySelector('.counter_price');
        const counter_total = parentDiv.querySelector('.counter_total');
        const details = parentDiv.querySelector('.details');
        let count = parseInt(counter.textContent);
        let count_price = parseInt(counter_price.textContent);
        if (count > 0) { // Ensure counter does not go below zero
            count--;
            counter.textContent = count; // Update counter display
            counter_total.textContent = count * count_price;
            details.textContent = 'pizza_margeritta' + ' '+ parseInt(counter.textContent) + ' pcs' + ' total: '+ counter_total.textContent ;
        }

        // Hide the "Minus" button if the count is 1
        const moinsButton = parentDiv.querySelector('.moinsButton');
        moinsButton.style.display = count <= 1 ? 'none' : 'inline';
    });
});

document.getElementById('done').addEventListener('click', function() {
const allParagraph = document.getElementById('all');
const allCountersParagraph = document.getElementById('allCounters');
const cardBacks = document.querySelectorAll('.card-back');
// Get the paragraph element
const paragraph = document.getElementById('doneParagraph');
paragraph.style.display = 'none';


const result = document.getElementById('result');
result.style.display = 'inline';

let totalCounter = 0;
allParagraph.textContent = '\n';

cardBacks.forEach((cardBack, index) => {
    const title = cardBack.querySelector('h5');
    const counter = parseInt(cardBack.querySelector('.counter').textContent);
   // const counter_total = parseInt(cardBack.querySelector('.counter_total').textContent);
    
    if (counter !== 0) {
        const counter_total = parseInt(cardBack.querySelector('.counter_total').textContent);
        allParagraph.innerHTML += `<br>${title.textContent}: ${counter} pcs <br>`;
        totalCounter += counter_total;
    }
});

allCountersParagraph.textContent = `Total Count: ${totalCounter}`;

});








document.getElementById('sendButton').addEventListener('click', function() {
    const phoneNumber = '+221762357329'; // Phone number to share with

    // Get the paragraph element
    let paragraph = document.getElementById('doneParagraph');

    // Select all <h7> elements with the class 'hd_x'
const detailsElements = document.querySelectorAll('p.details'); // Adjust the tag if necessary
let nonEmptyDetailsContents = [];

detailsElements.forEach(p => {
    // Get the trimmed text content
    const textContent = p.textContent.trim();
    // Check if the text content is not empty and not equal to '0'
    if (textContent !== '') {
        // Add the text content to the array
        nonEmptyDetailsContents.push(textContent);
    }
});

console.log(nonEmptyDetailsContents); // Output the array for verification



    // Join the array into a single string with line breaks
    paragraph.textContent = nonEmptyDetailsContents.join('\n');
    const allCounters = document.getElementById('allCounters');

    // Check if paragraph's text content is not empty
    if (allCounters.textContent.trim() !== 'Total Count: 0' || paragraph.textContent.trim() === 'Your order is empty') {
        // Prepare the text to share
        const textToShare = paragraph.textContent;
        
        // Encode the text to be URL-safe
        const encodedText = encodeURIComponent(textToShare);
        
        // Create the WhatsApp share URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        
        // Open the URL in a new tab/window
        window.open(whatsappUrl, '_blank');
    } else {
        // Alert if paragraph is empty
        paragraph.style.display = 'inline';
        paragraph.textContent='Your order is empty';
    }
});

// all changes 3

