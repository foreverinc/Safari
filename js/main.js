var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        nav.classList.add("bg-change", "shadow");
    } else {
        nav.classList.remove("bg-change", "shadow");
    }
});

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
    }
}, typingSpeed);


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay:true,
        autoplayTimeout:5000, 
        center: true,
        nav: true,
        center:true,
        items:3,
        navText: ['<i class="fa-solid fa-angles-left  text-success"></i>', '<i class="fa-solid fa-angles-right  text-success"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    });
});

var cards = document.getElementsByClassName("d-card");
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", function () {
        this.classList.add("shadow-lg");
    });
    cards[i].addEventListener("mouseleave", function () {
        this.classList.remove("shadow-lg");
    });
}



const titleElement = document.querySelector('#queen');
const buttonElement = document.querySelector('#btns');
const titleText = 'Queen Elizabeth National Park';
let index = 0;
let isTyping = true;

const typeTitle = () => {
  if (index <= titleText.length && isTyping) {
    titleElement.textContent = titleText.slice(0, index) + '_';
    index++;
    setTimeout(typeTitle, 100);
  } else {
    isTyping = false;
    titleElement.textContent = titleText;
    buttonElement.style.display = 'flex';
  }
}

setTimeout(typeTitle, 6000);



