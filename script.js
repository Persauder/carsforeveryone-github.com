const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const closeBtn = document.querySelector('.close');

// Add click event listener to all gallery images
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        lightbox.style.display = 'block';  // Show lightbox
        lightboxImg.src = this.src;        // Set the image source to clicked image
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';  // Hide lightbox
});

// Close the lightbox when clicked outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';  // Hide lightbox
    }
});