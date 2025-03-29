function toggleButton(){
  document.addEventListener("DOMContentLoaded", function () {
    var navToggler = document.querySelector(".navbar-toggler");
    var navCollapse = document.querySelector("#navbarNav");
  
    navToggler.addEventListener("click", function () {
      var bsCollapse = new bootstrap.Collapse(navCollapse, {
        toggle: true,
      });
    });
  
    // Close navbar when clicking a link (for mobile UX)
    document.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      });
    });
  });
}
toggleButton()
// nav bar animation Start 
function navAnimation(){

    document.addEventListener("DOMContentLoaded", function () {
        gsap.from(".navbar-nav .nav-item", {
          y: -20, 
          opacity: 0,
          duration: 0.8,
          delay:0.5, 
          stagger: 0.2, 
          ease: "power2.out", 
        });
      });
}
navAnimation()
// nav bar animation end 

function carouselAnimation(){
  gsap.from("#headbar h1,#headbar p,#headbar h6", {
    y: -20, 
    opacity: 0,
    duration: 1,
    delay:1, 
    satgger:0.2,
    ease: "power2.out",
  });
  gsap.from("#bookroom", {
    y: -20, 
    opacity: 0,
    duration: 1,
    delay:1, 
    satgger:0.2,
    ease: "power2.out",
  });
}
carouselAnimation()

function section2Animation(){
  document.addEventListener("mouseenter",function(){
    tl.from("#ourRoom", {
      y: -20, 
      opacity: 0,
      duration: 0.5,
      delay:0.2, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#ourRoom",
        scroller:"body",
        // start: "top 50%", 
       
      }
    });
})

  var tl=gsap.timeline()
  document.addEventListener("mouseenter",function(){
    tl.from("#roomcard", {
      y: -20, 
      scale:1,
      opacity: 0,
      duration: 1,
      // delay:0.2, 
      stagger: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#roomcard",
        scroller:"body",
        // start: "top 50%",  
        scrub: 1, 
      }
    });
  })
}
section2Animation()

function section3Animation(){
  document.addEventListener("mouseenter",function(){
    gsap.from("#ourCon", {
      y: -20, 
      opacity: 0,
      duration: 0.5,
      delay:0.2, 
      stagger:0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#ourCon",
        scroller:"body",
        // start: "top 50%", 
       
      }
    });
})

  var tl=gsap.timeline()
  document.addEventListener("mouseenter",function(){
    tl.from("#imgcon", {
      x: -20, 
      opacity: 0,
      duration: 1,
      // delay:0.2, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#imgcon",
        scroller:"body",
        // start: "top 50%",  
        scrub: 1, 
      }
    });
  })
  
  var tl=gsap.timeline()
  document.addEventListener("mouseenter",function(){
    tl.from("#descimg", {
      x:20, 
      opacity:0,
      duration:1,
      // delay:0.2, 
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#descimg",
        scroller:"body",
        // start: "top 50%",  
        scrub: 1, 
      }
    });
  })
}
section3Animation()


function owlCarousel(){
// Main head carousel Start

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,

    autoplay: true,
 
    autoplayTimeout: 3000,
    autoplayHoverPause: true ,
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
    autoplayHoverPause: true ,
    smartSpeed: 1000,
  });
});

// small head carousel end



$(document).ready(function() {

  $('.counter').each(function () {
  $(this).prop('Counter',0).animate({
  Counter: $(this).text()
  }, {
  duration: 3000,
  delay:4000,
  easing: 'swing',
  step: function (now) {
  $(this).text(Math.ceil(now));
  }
  });
  });
  });
}
owlCarousel()

function starTriangle(rows) {
  for (let i = 1; i <= rows; i--) {
      console.log('*'.repeat(i));
  }
}

starTriangle(5);
