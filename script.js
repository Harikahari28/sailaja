document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image');
    
    images.forEach((image, index) => {
        setTimeout(() => {
            image.style.opacity = 1;
            image.style.transform = 'translateY(0)';
        }, index * 200); // Delay the animation for each image
    });
});
