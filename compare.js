window.onload = function() {
    setTimeout(function(){
function compareImages() {
    // Get the image elements by their IDs
    let dice1 = document.getElementById('image-1');
    let dice2 = document.getElementById('image-2');

    // Compare the strings associated with the images
    if (dice1.src > dice2.src) {
        alert("Player 1 wins");
    } else if (dice1.src < dice2.src) {
        alert("Player 2 wins");
    } else {
        alert("It is a tie");
    }
}

// Call the compareImages function
compareImages();
},1000);
};