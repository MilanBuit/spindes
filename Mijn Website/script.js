document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Check if the link is an anchor link (starts with '#')
            if (href.startsWith('#')) {
                e.preventDefault(); // Prevent default anchor behavior
                
                const targetId = href.slice(1); // Remove the '#' from the href
                const target = document.getElementById(targetId);

                // Check if the target exists before attempting to scroll
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80, // Offset for the fixed header
                        behavior: 'smooth'
                    });
                } else {
                    console.error(`Element with ID "${targetId}" not found.`);
                }
            } else if (href.endsWith('.html')) {
                // Allow navigation for other files like "competition.html"
                console.log(`Navigating to ${href}`);
                window.location.href = href; // Perform navigation
            } else {
                console.warn(`Unrecognized link format: ${href}`);
            }
        });
    });
});
