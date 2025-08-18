document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.getElementById('typing-effect');
    // Words customized for Sajad Ali
    const words = ["Electrical Engineer.", "Power Systems Researcher.", "Networks Engineer."]; 
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        // If deleting, remove a character
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // If typing, add a character
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // Check if word is fully typed or deleted
        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at the end of the word
            setTimeout(() => isDeleting = true, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Move to the next word
            wordIndex = (wordIndex + 1) % words.length;
        }

        // Adjust typing speed
        const typingSpeed = isDeleting ? 100 : 200;
        setTimeout(type, typingSpeed);
    }

    type();
});
