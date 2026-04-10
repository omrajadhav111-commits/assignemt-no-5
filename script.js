document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle functionality
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            
            // Toggle hamburger icon between bars and times (close)
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    }

    // Close mobile menu gracefully when a link is clicked
    const links = document.querySelectorAll(".nav-links li a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                const icon = hamburger.querySelector('i');
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    });

    // Simple scroll animation for navbar shadow
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            nav.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.05)";
        } else {
            nav.style.boxShadow = "none";
        }
    });
});
