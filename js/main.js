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

document.getElementById("closer").addEventListener("click", function () {
    document.getElementById("booking").classList.add("d-none");
});

function services() {
    var servicesSection = document.getElementById("services");
    servicesSection.classList.remove("d-none");
    servicesSection.scrollIntoView({ behavior: "smooth" });
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        center: true,
        nav: true,
        navText: ['<i class="fa-solid fa-angles-left  text-success"></i>', '<i class="fa-solid fa-angles-right  text-success"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
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
