 // Function to toggle the theme and save it to localStorage
 function changetheme() {
    // Toggle the 'dark' class on the body
    document.body.classList.toggle('dark');

    // Check the current theme
    const isDarkMode = document.body.classList.contains('dark');

    // Save the theme in localStorage
    if (isDarkMode) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Load the persisted theme on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');

    // Apply the persisted theme if found
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }


    const carousel = $("#carouselExampleDark");
    const captions = carousel.find(".carousel-caption");
   
    captions.css({
      bottom: "-100%",
      animation: "slideUp 0.8s ease-in-out forwards",
      display: "flex",
      "flex-direction": "column",
      "justify-content": "center",
      height: "60%",
    });
   
    const carousel1 = new bootstrap.Carousel(carousel, {
      interval: 3000,
      pause: false,
    });

      
  // SLIDER FUNCTIONALITY
  // get card width dynamically
  cardWidth = $(".slide-card").width();
  // next-arrow
  $("#next-arrow").click(function (event) {
    event.preventDefault();
    const firstChildAppend = $(".slide-card:first-child()");
    $(".slide-card").animate({ left: -cardWidth }, function () {
      $(".slider-wrap").append(firstChildAppend);
      $(".slide-card").css({
        left: 0,
      });
    });
  });
  // previous-arrow
  $("#previous-arrow").click(function (event) {
    event.preventDefault();
    const lastChildPrepend = $(".slide-card:last-child()");
    $(".slide-card").animate({ left: cardWidth }, function () {
      $(".slider-wrap").prepend(lastChildPrepend);
      $(".slide-card").css({
        left: 0,
      });
    });
  });
};