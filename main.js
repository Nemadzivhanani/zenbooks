document.addEventListener("DOMContentLoaded", () => {
    
    // Select all elements with the 'reveal' class
    const reveals = document.querySelectorAll(".reveal");

    // Create the observer
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    });

    // Apply the observer to all selected elements
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

});