// Adjust the speed as needed
var speed = 2;
var container = document.getElementById('featured-container');
var images = container.getElementsByClassName('featured-image');
var containerWidth = images.length * (200 + 10); // Width of an image plus margin
var scrollAmount = 0;

// Move the gallery
function scrollGallery() {
    container.scrollLeft += speed;
    scrollAmount += speed;
    if (scrollAmount >= containerWidth / 1) {
        // Reset scroll
        container.scrollLeft = 0;
        scrollAmount = 0;
    }
}

// Start the auto-scroll
var startScroll = setInterval(scrollGallery, 20);

// Optional: Pause on mouseover
container.addEventListener('mouseover', function () {
    clearInterval(startScroll);
});

// Optional: Resume on mouseout
container.addEventListener('mouseout', function () {
    startScroll = setInterval(scrollGallery, 20);
});