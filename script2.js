// Define paths to images directly in an array
let arr2 = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'
];

// Generate a random index
let randomIndex2 = Math.floor(Math.random() * arr2.length);

// Get image element by ID
let img2 = document.getElementById("image-2");

// Set the src attribute of the image element to the randomly chosen image path
img2.src = arr2[randomIndex2];
