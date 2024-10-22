document.addEventListener('DOMContentLoaded', () => {
    const typewriterText = document.querySelector('.typewriter-text');
    const cursor = document.querySelector('.cursor');
    const sentences = [
        "👋 Hello.",
        "I'm a wolf.",
        "I'm a developer.",
        "I'm a designer.",
        "I'm a creator.",
        "I'm a wolf🐺."
    ];
    let sentenceIndex = 0;
    let charIndex = 0;
    let typing = true; // Track whether we're currently typing or deleting

    const type = () => {
        if (typing) {
            cursor.style.display = 'inline'; // Show cursor when typing
            // Typing phase
            if (charIndex < sentences[sentenceIndex].length) {
                typewriterText.textContent += sentences[sentenceIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 50); // Typing speed
            } else {
                // Move to the deleting phase after a pause
                typing = false;
                setTimeout(type, 1500); // Pause before deleting
            }
        } else {
            // Deleting phase
            if (charIndex > 0) {
                typewriterText.textContent = sentences[sentenceIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(type, 30); // Deleting speed
            } else {
                // Hide the cursor when done deleting
                cursor.style.display = 'none'; 
                // Move to the next sentence
                typing = true;
                sentenceIndex = (sentenceIndex + 1) % sentences.length; // Cycle through sentences
                setTimeout(type, 500); // Pause before typing the next sentence
            }
        }
    };

    type();
});

// Navbar hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
});

let clickCount = 0;

document.getElementById("click-counter").addEventListener("click", function() {
    clickCount++;

    if (clickCount % 18 === 0) {
        window.location.href = "https://www.youtube.com/watch?v=haCLEOZix4c ";
        clickCount = 0;
    }
});