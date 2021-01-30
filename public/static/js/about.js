
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByClassName("navbar")[0].style.top = "-100px";
  } else {
    document.getElementsByClassName("navbar")[0].style.top = "0";
  }
}


// menu control (mobile)
var btn = document.getElementById("hamburger");
var logo = document.getElementById("logo_top");
var menu = document.getElementById("menu");

var cross = document.getElementById("cross");

if (btn) {
  btn.addEventListener('click', function() {

    btn.classList.remove("open", "close");
    logo.classList.remove("open", "close");
    menu.classList.remove("open", "close");
    cross.classList.remove("open", "close");

    btn.classList.add("open");
    logo.classList.add("open");

    setTimeout(() => { menu.classList.add("open"); }, 300);
    setTimeout(() => { cross.classList.add("open"); }, 700);

    // https://thefairchildgrove.com/
    // https://agentestudio.com/blog/website-navigation-design

    // https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

    // https://www.google.com/search?q=javascript+pause+execution+until+event&oq=javascript+event+pause&aqs=chrome.1.69i57j0i8i30l7.37060j0j7&sourceid=chrome&ie=UTF-8
    // https://www.sitepoint.com/delay-sleep-pause-wait/
    
    
  });
}

if (cross) {
  cross.addEventListener('click', function() {
    menu.classList.add("close");

    setTimeout(() => { btn.classList.add("close"); }, 300);
    setTimeout(() => { logo.classList.add("close"); }, 300);

    setTimeout(() => { cross.classList.add("close"); }, 700);
  });
}


/*
function open() {
  var x = document.getElementById("hamburger");
  if (x.classList.contains("open")) {
    x.classList.remove("open");
  } else {
    x.classList.add("open");
  }
}
*/
