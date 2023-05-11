var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        nav.classList.add("bg-change", "shadow");
    } else {
        nav.classList.remove("bg-change", "shadow");
    }
});



$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay:true,
        autoplayTimeout:7000, 
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


$(document).ready(function () {
  // Add hover behavior to dropdown menu
  $(".dropdown").hover(
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(0).fadeIn(300);
    },
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(0).fadeOut(300);
    }
  );
});


function toggleTab(parent) {
    const tab = document.querySelector(`#tab-${parent}`);
    console.log(tab)
  tab.classList.toggle("active");
}

$(document).ready(function () {
	setInterval(function () {
		$("#errorModal").modal("show");
	}, 60000); // 60000 milliseconds = 1 minute
});

// JavaScript code to trigger the modal when any link is clicked
$("a").on("click", function () {
	$("#errorModal").modal("show");
});