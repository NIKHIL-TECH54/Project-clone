function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
myFunction();
// nav bar animation Start
function navAnimation() {
  document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".navbar-nav .nav-item", {
      y: -20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      stagger: 0.2,
      ease: "power2.out",
    });
  });
}
navAnimation();
// nav bar animation end

function carouselAnimation() {
  gsap.from("#headbar h1,#headbar p,#headbar h6", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 1,
    satgger: 0.2,
    ease: "power2.out",
  });
  gsap.from("#bookroom", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 1,
    satgger: 0.2,
    ease: "power2.out",
  });
}
carouselAnimation();

function section2Animation() {
  document.addEventListener("mouseenter", function () {
    tl.from("#ourRoom", {
      y: -20,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#ourRoom",
        scroller: "body",
        // start: "top 50%",
      },
    });
  });

  var tl = gsap.timeline();
  document.addEventListener("mouseenter", function () {
    tl.from("#roomcard", {
      y: -20,
      scale: 1,
      opacity: 0,
      duration: 1,
      // delay:0.2,
      stagger: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#roomcard",
        scroller: "body",
        // start: "top 50%",
        scrub: 1,
      },
    });
  });
}
section2Animation();

function section3Animation() {
  document.addEventListener("mouseenter", function () {
    gsap.from("#ourCon", {
      y: -20,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#ourCon",
        scroller: "body",
        // start: "top 50%",
      },
    });
  });

  var tl = gsap.timeline();
  document.addEventListener("mouseenter", function () {
    tl.from("#imgcon", {
      x: -20,
      opacity: 0,
      duration: 1,
      // delay:0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#imgcon",
        scroller: "body",
        // start: "top 50%",
        scrub: 1,
      },
    });
  });

  var tl = gsap.timeline();
  document.addEventListener("mouseenter", function () {
    tl.from("#descimg", {
      x: 20,
      opacity: 0,
      duration: 1,
      // delay:0.2,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#descimg",
        scroller: "body",
        // start: "top 50%",
        scrub: 1,
      },
    });
  });
}
section3Animation();

function owlCarousel() {
  // Main head carousel Start

  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,

      autoplay: true,

      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 1000,

      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  });
  // Main head carousel end

  // small head carousel Start
  $(document).ready(function () {
    $(".carousel").slick({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      smartSpeed: 1000,
    });
  });

  // small head carousel end
}
owlCarousel();

document.addEventListener("mouseenter", function () {
  let counters = document.querySelectorAll(".counter");
  let options = {
    root: null,
    threshold: 0.5,
  };

  let observer = new IntersectionObserver(function (entries, observer) {
    let counter = document.querySelector(".counter");
    counter.innerHTML += "+";
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let counter = entry.target;
        let countTo = parseInt(counter.textContent);
        let start = 0;
        let duration = 3000;
        let interval = duration / countTo;

        let count = setInterval(() => {
          if (start < countTo) {
            start++;
            counter.textContent = start;
          } else {
            clearInterval(count);
          }
        }, interval);

        observer.unobserve(counter);
      }
    });
  }, options);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

