// Intersection Observer for smooth scroll reveal animations
document.addEventListener("DOMContentLoaded", () => {
    
    // Select all elements with the 'reveal' class
    const reveals = document.querySelectorAll(".reveal");

    // Create the observer
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // If the element is visible on the screen
            if (entry.isIntersecting) {
                // Add the active class to trigger the CSS animation
                entry.target.classList.add("active");
                // Stop observing once it has animated so it doesn't repeat
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Trigger the animation when 15% of the element is visible
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    });

    // Apply the observer to all selected elements
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

});