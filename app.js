   /* Dynamic search bar */
const searchInput = document.getElementById("searchInput");

    const phrases = [
      "Search for products...",
      "Search for services...",
      "Search for categories...",
      "Search anything you need..."
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentPhrase = phrases[currentPhraseIndex];
      const currentText = currentPhrase.substring(0, currentCharIndex);

      searchInput.placeholder = currentText;

      if (!isDeleting) {
        if (currentCharIndex < currentPhrase.length) {
          currentCharIndex++;
        } else {
          isDeleting = true;
          setTimeout(typeEffect, 1500); // pause after full text
          return;
        }
      } else {
        if (currentCharIndex > 0) {
          currentCharIndex--;
        } else {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
      }

      setTimeout(typeEffect, isDeleting ? 40 : 100); // typing speed
    }

    // Start typing effect
    typeEffect();