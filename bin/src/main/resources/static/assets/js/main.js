/* smooth scroll*/
var winWidth = $(window).width()
$(' a.js-has-smooth[href*="#"]:not([href="#"])').click(function () {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash)
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")
    if (target.length) {
      if (winWidth > 991) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 10,
          },
          1000
        )
      } else {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        )
      }
      return false
    }
  }
})

// Navbar Js
function initBurgerMenu() {
  const holder = document.querySelector("body")
  const opener = document.querySelector(".opener")
  const activeClass = "nav-active"
  const drop = document.querySelector(".nav-holder")
  const navLinks = document.querySelectorAll(".nav-list li a")

  opener.addEventListener("click", (event) => trackAction())

  const trackAction = () => {
    event.preventDefault()
    holder.classList.toggle(activeClass)
  }
  document.addEventListener("click", (e) => {
    const isClickInside = opener.contains(e.target) || drop.contains(e.target)
    if (!isClickInside) {
      holder.classList.remove(activeClass)
    }
  })

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      holder.classList.remove(activeClass)
    })
  })
}
initBurgerMenu()

var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

// Testimonials Slider
var swiper2 = new Swiper(".swiper-container", {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
})

// FAQ Js

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item")

  // Function to handle toggling
  function toggleFAQ(item, shouldOpen) {
    const questionButton = item.querySelector(".faq-question")
    const answerDiv = item.querySelector(".faq-answer")
    const icon = item.querySelector(".faq-icon")

    if (shouldOpen) {
      answerDiv.classList.remove("hidden")
      icon.style.transform = "rotate(180deg)"
    } else {
      answerDiv.classList.add("hidden")
      icon.style.transform = "rotate(0deg)"
    }
  }

  faqItems.forEach((item, index) => {
    const questionButton = item.querySelector(".faq-question")
    const answerDiv = item.querySelector(".faq-answer")
    const icon = item.querySelector(".faq-icon")

    // Handle click events
    questionButton.addEventListener("click", () => {
      const isVisible = !answerDiv.classList.contains("hidden")

      // Close all answers and reset icons
      faqItems.forEach((faqItem) => {
        toggleFAQ(faqItem, false)
      })

      // If the clicked answer was not visible, show it
      if (!isVisible) {
        toggleFAQ(item, true)
        // Smooth scroll to the opened FAQ
        questionButton.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    })

    // Open the first FAQ by default
    if (index === 0) {
      toggleFAQ(item, true)
    }
  })
})

// Toggle user menu
document.querySelector("button").addEventListener("click", function () {
  const menu = document.querySelector("div.relative div")
  menu.classList.toggle("hidden")
})

// Dashboard Js
const ctx = document.getElementById("bookingTrendsChart").getContext("2d")
const bookingTrendsChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Bookings",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
})
