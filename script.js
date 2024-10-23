let flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    if (showingTerm){
        let term = flashcards[currentIndex].term
        let cardContent = document.getElementById('card-content')
        cardContent.innerText = term
    } else {
        let definition = flashcards[currentIndex].definition
        let cardContent = document.getElementById('card-content')
        cardContent.innerText = definition
    }
}

// When card is clicked (flipped), change showingTerm and display card
document.getElementById('flashcard').addEventListener('click', function() {
    if (showingTerm){
        showingTerm = false;
    } else {
        showingTerm = true;
    }
    displayCard();
})

// When add card button is clicked, add new term and def to the array
document.getElementById('add-card-btn').addEventListener('click', function() {
    let newTerm = document.getElementById('new-term').value
    let newDefinition = document.getElementById('new-definition').value
    flashcards.push({term: newTerm, definition: newDefinition})
    document.getElementById('new-term').value = ""
    document.getElementById('new-definition').value = ""
})

// When prev button is clicked, decrement index accordingly and display card
document.getElementById('prev-btn').addEventListener('click', function() {
    currentIndex--;
    if(currentIndex === -1){
        currentIndex = flashcards.length - 1
    }
    displayCard();
})

// When prev button is clicked, increment index accordingly and display card
document.getElementById('next-btn').addEventListener('click', function() {
    currentIndex++;
    if(currentIndex === flashcards.length){
        currentIndex = 0
    }
    displayCard();
})

// This line will display the card when the page is refreshed
window.onload = displayCard;