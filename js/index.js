var typingText = document.querySelector(".typing-text");

// Define the text to be typed
var textToType = typingText.getAttribute("data-text");

// Define the typing speed in milliseconds
var typingSpeed = 100;

// Initialize the typing index
var typingIndex = 0;

// Start typing
setInterval(function () {
  // Check if there's still text to type
  if (typingIndex < textToType.length) {
    // Get the current text
    var currentText = typingText.textContent;

    // Append the next character
    currentText += textToType[typingIndex];

    // Update the text
    typingText.textContent = currentText;

    // Move to the next character
    typingIndex++;
  } else {
    document.getElementById("btn-t").classList.remove("d-none");
  }
}, typingSpeed);




const titleElement = document.querySelector("#queen");
const buttonElement = document.querySelector("#btns");
const titleText = "Queen Elizabeth National Park";
let index = 0;
let isTyping = true;

const typeTitle = () => {
  if (index <= titleText.length && isTyping) {
    titleElement.textContent = titleText.slice(0, index) + "_";
    index++;
    setTimeout(typeTitle, 100);
  } else {
    isTyping = false;
    titleElement.textContent = titleText;
    buttonElement.style.display = "flex";
  }
};

setTimeout(typeTitle, 7500);
