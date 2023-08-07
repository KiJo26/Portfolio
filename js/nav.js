// Get all the navigation links with the smooth-scroll-link class
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll-link');

// Add click event listeners to the navigation links
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', smoothScrollTo);
});

// Smooth scroll to the target ID when a navigation link is clicked
function smoothScrollTo(e) {
    e.preventDefault();
    
    // Get the target ID from the data-target attribute of the clicked link
    const targetId = this.getAttribute('data-target');
    
    // Scroll smoothly to the target element
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
    });
}
