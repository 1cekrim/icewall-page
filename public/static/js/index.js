
paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function() {
    $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19, 1, 0.22, 1]));

    $("#preloader").delay(1500).animate({top: '-1000'}, 2000, $.bez([0.19, 1, 0.22, 1]));

    TweenMax.from(".title", 2, {
        delay: 1.8,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    });
});

/* Coming soon page */

// Set the date we're counting down to
var countDownDate = new Date("Nov 21, 2020 11:00:00").getTime();

// Update the count down every 1 second
var countDownFunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 *  24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id = "demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }

}, 1000);
    

// nav-item add classes
$(document).ready(function() {
    $('.nav-item').addClass("active");
})

// scroll functions
$(window).scroll(function(e) {

    // add / remove class to navbar when scrolling to hide / show
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $('.navbar').addClass("navbar-hide");
    } else {
        $('.navbar').removeClass("navbar-hide");
    }
});
