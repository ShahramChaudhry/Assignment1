
let currentImageIndex = 0;
const images = ["person1.png", "person2.jpeg", "image3.jpg"];

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imageElement = document.getElementById("slideshowImage");
    imageElement.src = images[currentImageIndex];
}

