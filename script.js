
// Define paths to images directly in an array
let arr = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'
];

// Generate a random index
let randomIndex = Math.floor(Math.random() * arr.length);

// Get image element by ID
let img1 = document.getElementById("image-1");

// Set the src attribute of the image element to the randomly chosen image path
img1.src = arr[randomIndex];
