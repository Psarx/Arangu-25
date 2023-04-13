
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
  "നോട്ടിലസ്",
  "Nautilus",
  "नॉटिलस",
  // "நாட்டிலஸ்",
  // "నాటిలస్",
];

// Controls the speed of morphing.
const morphTime = 2.50;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
  // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

// Start the animation.
animate();

function scrollthere(item, event) {
  console.log(event);
  var element = document.querySelector(`#${item}`);

  element.scrollIntoView();


  $(".meanmenu-reveal").trigger('click')


}
var setFlag = true
function setFlagfunc(){
  
  setTimeout(()=>{
    setFlag = true
    console.log("Hiii",setFlag)
  },3000)
}



(function ($) {
  "use strict";
  // Mean Menu JS
  jQuery(".mean-menu").meanmenu({
    meanScreenWidth: "991",
  });

  // Preloader JS
  setFlagfunc()
  // Preloader JS
  $(function () {
    setTimeout(()=>{
      $("body").addClass("loaded")
    },6000)
      

  });


  //Forms Loader
  $(async function () {
    let html_start = `<div class="row mt-5 gy-3 justify-content-center">`

    await fetch(
      "https://apiservices.geekstudios.tech/nautilus/auth/registration-status",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }
    )
      .then((resp) => {
        var data = resp.json();
        return data;
      })
      .then((data) => {
        if (data.response_code == 200) {
          console.log(data.response)
          let num = 0;
          // if (data.response.hackathon.status) {
          //   $(".hackfit-btn").attr("href", data.response.hackathon.url)
          //   html_start += `<div class="col-md-4 ">
					// 	<a href="${data.response.hackathon.url}">
					// 		<div class="card p-4" role="button">
							
					// 			<img src="./images/hackathon.jpg" alt="" srcset="">
					// 			<div class="card-body">
					// 				<p>HackFIT</p>
					// 			</div>
							
					// 		</div>
					// 	</a>
					// </div>`;
          //   num += 1;
          // }

        //   if (data.response.prompt_engineering.status) {
        //     $('.promptly-').attr("href", data.response.prompt_engineering.url)
        //     html_start += `<div class="col-md-4">
				// 		<a href="${data.response.prompt_engineering.url}">
				// 		<div class="card p-4" role="button">
				// 		<img src="./images/prompt.jpeg" alt="" srcset="">
				// 		<div class="card-body">
				// 			<p>PROMPTLY</p>
				// 		</div>
				// 	</div>
				// </a>
				// 	</div>`;
        //     num += 1;
        //   }
          if(data.response.workshop.ar.status){
            $('.ar-btn').html("Register")
            $('.ar-btn').attr("href", data.response.workshop.ar.url)

          }
          if(data.response.workshop.ble.status){
            $('.ble-btn').html("Register")
            $('.ble-btn').attr("href", data.response.workshop.ble.url)

          }
          if(data.response.workshop.chatbot.status){
            $('.chatbot-btn').html("Register")
            $('.chatbot-btn').attr("href", data.response.workshop.chatbot.url)

          }
          if(data.response.workshop.digital.status){
            $('.digital-btn').html("Register")
            $('.digital-btn').attr("href", data.response.workshop.digital.url)

          }
          if( data.response.workshop.pottery.status){
            $('.pottery-btn').html("Register")
            $('.pottery-btn').attr("href", data.response.workshop.pottery.url)

          }
          if(data.response.workshop.drone.status){
            $('.drone-btn').html("Register")
            $('.drone-btn').attr("href", data.response.workshop.drone.url)

          }
          if(data.response.workshop.electric.status){
            $('.electric-btn').html("Register")
            $('.electric-btn').attr("href", data.response.workshop.electric.url)
          }
          
          
        //   if (data.response.workshop.rust.status) {
        //     $('.rust-btn').attr("href", data.response.workshop.rust.url)
        //     html_start += `<div class="col-md-4">
				// 		<a href="${data.response.workshop.rust.url}">
				// 		<div class="card p-4" role="button">
				// 		<img src="https://icefoss.fisat.ac.in/images/rust.jpg" alt="" srcset="">
				// 		<div class="card-body">
				// 			<p>Rust Workshop</p>
				// 		</div>
				// 	</div>
				// </a>
				// 	</div>`;
        //     num += 1;
        //   }
        //   if (data.response.workshop.ar.status) {
        //     // console.log(data.response)
        //     $(".ar-btn").attr("href", data.response.workshop.ar.url)
        //     html_start += `<div class="col-md-4">
				// 		<a href="${data.response.workshop.ar.url}">
				// 			<div class="card p-4" role="button">
				// 				<img src="./images/workshop.jpeg" alt="" srcset="">
				// 				<div class="card-body">
				// 					<p>AR Workshop</p>
				// 				</div>
				// 			</div>
				// 		</a>
				// 	</div>`;
        //     num += 1;
        //   }
        //   if (data.response.workshop.go.status) {
        //     // console.log(data.response)
        //     $(".go-btn").attr("href", data.response.workshop.go.url)
        //     html_start += `<div class="col-md-4">
				// 		<a href="${data.response.workshop.go.url}">
				// 			<div class="card p-4" role="button">
				// 				<img src="./images/go.jpeg" alt="" srcset="">
				// 				<div class="card-body">
				// 					<p>GO Workshop</p>
				// 				</div>
				// 			</div>
				// 		</a>
				// 	</div>`;
        //     num += 1;
        //   }
        //   if (data.response.workshop.devops.status) {
        //     // console.log(data.response)
        //     $(".devops-btn").attr("href", data.response.workshop.devops.url)
        //     html_start += `<div class="col-md-4">
				// 		<a href="${data.response.workshop.devops.url}">
				// 			<div class="card p-4" role="button">
				// 				<img src="https://icefoss.fisat.ac.in/images/devops.jpg" alt="" srcset="">
				// 				<div class="card-body">
				// 					<p>DevOps Workshop</p>
				// 				</div>
				// 			</div>
				// 		</a>
				// 	</div>`;
        //     num += 1;
        //   }
        //   if (data.response.workshop.web.status) {
        //     // console.log(data.response)
        //     $(".web-btn").attr("href", data.response.workshop.web.url)
        //     html_start += `<div class="col-md-4">
				// 		<a href="${data.response.workshop.web.url}">
				// 			<div class="card p-4" role="button">
				// 				<img src="./images/web-dev.jpg" alt="" srcset="">
				// 				<div class="card-body">
				// 					<p>Web Workshop</p>
				// 				</div>
				// 			</div>
				// 		</a>
				// 	</div>`;
        //     num += 1;
        //   }
        //   if (data.response.workshop.flutter.status) {
        //     // console.log(data.response)
        //     $(".flutter-btn").attr("href", data.response.workshop.flutter.url)
        //     html_start += `<div class="col-md-4">
				// 		<a href="${data.response.workshop.flutter.url}">
				// 			<div class="card p-4" role="button">
				// 				<img src="https://icefoss.fisat.ac.in/images/flutter.jpg" alt="" srcset="">
				// 				<div class="card-body">
				// 					<p>Flutter Workshop</p>
				// 				</div>
				// 			</div>
				// 		</a>
				// 	</div>`;
        //     num += 1;
        //   }
          if (num == 0) {
            html_start += '<h4 style="color: #fff;">Sorry, Registration Closed 😢</h4>'
          }
          html_start += '</div>'
          $("#registrationForms").html(html_start);
        }
      });
  });

  // Nice Select JS
  $("select").niceSelect();

  // Header Sticky JS
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $(".navbar-area").addClass("is-sticky");
    } else {
      $(".navbar-area").removeClass("is-sticky");
    }
  });

  //  Hero Slider Wrap JS
  $(".hero-slider-wrap").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: true,
    items: 1,
    dots: false,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 800,
    autoplayHoverPause: true,
    navText: [
      "<i class='bx bx-chevrons-left'></i>",
      "<i class='bx bx-chevrons-right'></i>",
    ],
  });

  // Partner Wrap JS
  $(".partner-wrap").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 0,
    center: false,
    dots: false,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Client Wrap JS
  $(".client-wrap").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    mouseDrag: true,
    items: 1,
    dots: false,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Single Security Wrap JS
  $(".single-security-wrap").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    mouseDrag: true,
    items: 1,
    dots: true,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    center: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Solutions Wrap JS
  $(".solutions-wrap").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    mouseDrag: true,
    items: 1,
    dots: false,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Odometer JS
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  // Go to Top JS
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $(".go-top").addClass("active");
    if (scrolled < 300) $(".go-top").removeClass("active");
  });

  // Click Event JS
  $(".go-top").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 500);
  });

  // FAQ Accordion JS
  $(".accordion")
    .find(".accordion-title")
    .on("click", function () {
      // Adds Active Class
      $(this).toggleClass("active");
      // Expand or Collapse This Panel
      $(this).next().slideToggle("fast");
      // Hide The Other Panels
      $(".accordion-content").not($(this).next()).slideUp("fast");
      // Removes Active Class From Other Titles
      $(".accordion-title").not($(this)).removeClass("active");
    });

  // Get all sections that have an ID defined
  const sections = document.querySelectorAll("section[id]");

  // Add an event listener listening for scroll
  window.addEventListener("scroll", navHighlighter);

  function navHighlighter() {
    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;

      // Original:
      // const sectionTop = current.offsetTop - 50;
      //
      // Alex Turnwall's update:
      // Updated original line (above) to use getBoundingClientRect instead of offsetTop, based on:
      // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
      // https://newbedev.com/difference-between-getboundingclientrect-top-and-offsettop
      // This allows the use of sections inside a relative parent, which I'm not using here, but needed for a project
      //
      const sectionTop =
        current.getBoundingClientRect().top + window.pageYOffset - 50;
      // sectionId = current.getAttribute("id");

      /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(".nav-link ").classList.add("active");
      } else {
        document.querySelector(".nav-link ").classList.remove("active");
      }
    });
  }

  // Count Time JS
  function makeTimer() {
    var endTime = new Date("november  30, 2022 17:00:00 PDT");
    var endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    var now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(function () {
    makeTimer();
  }, 300);

  // Animation JS
  new WOW().init();

  // Popup Video JS
  $(".popup-youtube, .popup-vimeo").magnificPopup({
    disableOn: 300,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // Tabs JS
  $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");
  $(".tab ul.tabs li").on("click", function (g) {
    var tab = $(this).closest(".tab"),
      index = $(this).closest("li").index();
    tab.find("ul.tabs > li").removeClass("current");
    $(this).closest("li").addClass("current");
    tab
      .find(".tab_content")
      .find("div.tabs_item")
      .not("div.tabs_item:eq(" + index + ")")
      .slideUp();
    tab
      .find(".tab_content")
      .find("div.tabs_item:eq(" + index + ")")
      .slideDown();
    g.preventDefault();
  });

  // Subscribe form JS
  $(".newsletter-form")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formErrorSub();
        submitMSGSub(false, "Please enter your email correctly.");
      } else {
        // everything looks good!
        event.preventDefault();
      }
    });
  function callbackFunction(resp) {
    if (resp.result === "success") {
      formSuccessSub();
    } else {
      formErrorSub();
    }
  }
  function formSuccessSub() {
    $(".newsletter-form")[0].reset();
    submitMSGSub(true, "Thank you for subscribing!");
    setTimeout(function () {
      $("#validator-newsletter").addClass("hide");
    }, 4000);
  }
  function formErrorSub() {
    $(".newsletter-form").addClass("animated shake");
    setTimeout(function () {
      $(".newsletter-form").removeClass("animated shake");
    }, 1000);
  }
  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = "validation-success";
    } else {
      var msgClasses = "validation-danger";
    }
    $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
  }

  // AJAX MailChimp
  $(".newsletter-form").ajaxChimp({
    url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
    callback: callbackFunction,
  });

  // Input Plus & Minus Number JS
  $(".input-counter").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="text"]'),
      btnUp = spinner.find(".plus-btn"),
      btnDown = spinner.find(".minus-btn"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  // Skill
  jQuery(".skill-bar").each(function () {
    jQuery(this)
      .find(".progress-content")
      .animate(
        {
          width: jQuery(this).attr("data-percentage"),
        },
        2000
      );

    jQuery(this)
      .find(".progress-number-mark")
      .animate(
        { left: jQuery(this).attr("data-percentage") },
        {
          duration: 2000,
          step: function (now, fx) {
            var data = Math.round(now);
            jQuery(this)
              .find(".percent")
              .html(data + "%");
          },
        }
      );
  });

  // Home Six JS

  // Search Popup JS
  $(".close-btn").on("click", function () {
    $(".search-overlay").fadeOut();
    $(".search-btn").show();
    $(".close-btn").removeClass("active");
  });
  $(".search-btn").on("click", function () {
    $(this).hide();
    $(".search-overlay").fadeIn();
    $(".close-btn").addClass("active");
  });

  // Sidebar Modal JS
  $(".burger-menu").on("click", function () {
    $(".sidebar-modal").toggleClass("active");
  });
  $(".sidebar-modal-close-btn").on("click", function () {
    $(".sidebar-modal").removeClass("active");
  });

  // Partner Wrap JS
  $(".partner-slider-six").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 10,
    center: false,
    dots: false,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });



  // Testimonials Slider JS
  $(".testimonials-slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    nav: true,
    mouseDrag: true,
    items: 1,
    dots: false,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='bx bx-left-arrow-alt'></i>",
      "<i class='bx bx-right-arrow-alt'></i>",
    ],
  });

  // Services Slider JS
  $(".services-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: false,
    thumbs: true,
    thumbsPrerendered: true,
    items: 1,
    dots: false,
    autoHeight: true,
    autoplay: false,
    autoplayHoverPause: true,
    navText: [
      "<i class='bx bx-left-arrow-alt'></i>",
      "<i class='bx bx-right-arrow-alt'></i>",
    ],
  });

  // New Demo JS

  //  New Main Home Slides JS
  $(".new-main-home-slides").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: true,
    items: 1,
    dots: false,
    autoHeight: true,
    autoplay: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    smartSpeed: 500,
    autoplayHoverPause: true,

    navText: [
      "<i class='bx bx-left-arrow-alt'></i>",
      "<i class='bx bx-right-arrow-alt'></i>",
    ],
  });

  // Complete Website Security JS
  $(".complete-website-security-slides").owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    mouseDrag: true,
    dots: false,
    autoHeight: true,
    autoplay: true,
    autoplayHoverPause: true,

    navText: [
      "<i class='bx bx-left-arrow-alt'></i>",
      "<i class='bx bx-right-arrow-alt'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Success Projects Slides
  $(".success-projects-slides").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 500,
    margin: 25,
    autoplayHoverPause: true,
    autoplay: true,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Testimonials Wrap JS
  $(".testimonials-wrap-slides").owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    mouseDrag: true,
    dots: true,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Latest News JS
  $(".latest-news-slides").owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    mouseDrag: true,
    dots: false,
    autoHeight: true,
    autoplay: true,
    autoplayHoverPause: true,

    navText: [
      "<i class='bx bx-left-arrow-alt'></i>",
      "<i class='bx bx-right-arrow-alt'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Partner Slides
  $(".partner-slides").owlCarousel({
    nav: false,
    margin: 25,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Buy Now Btn
  // $('body').append("<a href='https://themeforest.net/checkout/from_item/27089732?license=regular&support=bundle_6month&_ga=2.221410840.1657781501.1653794352-1356931366.1645330919' target='_blank' class='buy-now-btn'><img src='assets/img/envato.png' alt='envato'/>Buy Now</a>");

  // Switch Btn
  $("body").append(
    "<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>"
  );
})(jQuery);

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("seku_theme", themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("seku_theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  // setTheme("theme-dark")
  if (localStorage.getItem("seku_theme") === "theme-light") {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;

  } else {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  }
})();
