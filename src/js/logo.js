// Define an array of image paths
const images = ["src/img/logo/N-0.png", "src/img/logo/N-1.png", "src/img/logo/N-2.png", "src/img/logo/N-3.png",
    "src/img/logo/N-4.png", "src/img/logo/N-5.png", "src/img/logo/N-6.png",
    "src/img/logo/N-7.png", "src/img/logo/N-8.png", "src/img/logo/N-9.png",
    "src/img/logo/N-10.png", "src/img/logo/N-11.png", "src/img/logo/N-12.png",
    "src/img/logo/N-13.png", "src/img/logo/N-14.png"];

// Get references to the logo element and the button
const logo = document.getElementById("logo");

// Variable to track the current image index
let currentImageIndex = 0;

// Function to change the picture
function changePicture() {
    // Increment the current image index
    currentImageIndex++;

    // If it exceeds the length of the images array, reset it to 0
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    // Set the src attribute of the logo to the new image
    logo.src = images[currentImageIndex];
}

// Function to handle click event on logo
function goToMainPage() {
    // Redirect user to main page (index.html)
    window.location.href = "index.html";
}

// Add event listeners for mouse enter and leave to start and stop automatic picture changing
logo.addEventListener("mouseenter", function () {
    // Start an interval to change the picture every 0.2 seconds
    intervalId = setInterval(changePicture, 100);
});

logo.addEventListener("mouseleave", function () {
    // Stop the interval when the mouse leaves
    clearInterval(intervalId);
});

// Add event listener for click event to go to main page
logo.addEventListener("click", goToMainPage);
