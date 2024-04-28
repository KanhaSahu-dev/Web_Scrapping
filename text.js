const dynamicText = document.querySelector("h1 span");
let words = ["Uncover the Best Products Effortlessly", 
"Extracting Data, Maximizing Choices", 
"Discovering Gems in the Web's Maze", 
"Your Shortcut to Top-Rated Products", 
"Navigating the Web for Superior Picks", 
"Elevating Your Product Selection Game", 
"Streamlining Your Search for Excellence", 
"From Web Scraping to Smart Shopping"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    }
    else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    }
    else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting?(wordIndex+1)%words.length:wordIndex;
        setTimeout(typeEffect, 2200);
    }


}

typeEffect();


let border_animation = document.querySelector(".border_animation");

  function changeBorderColor() {
    border_animation.style.borderColor = "red"; // Start with red color
    setTimeout(() => {
      border_animation.style.borderColor = "blue";
    }, 1000); // Change to blue after 1 second
    setTimeout(() => {
      border_animation.style.borderColor = "green";
    }, 2000); // Change to green after 2 seconds
    setTimeout(() => {
      border_animation.style.borderColor = "yellow";
    }, 3000); // Change to yellow after 3 seconds
    setTimeout(() => {
      border_animation.style.borderColor = "orange";
    }, 4000); // Change to orange after 4 seconds
  }

  setInterval(changeBorderColor, 5000);