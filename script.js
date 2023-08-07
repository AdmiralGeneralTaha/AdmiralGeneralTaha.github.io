// Get the countdown element from the HTML
const countdownElement = document.getElementById("countdown");

// Set the target date for the countdown
const targetDate = new Date("2023-09-07T00:00:00");

// Update the countdown element with the time remaining
function updateCountdown() {
  const currentDate = new Date();
  const timeRemaining = targetDate - currentDate;

  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Call the updateCountdown function immediately and at regular intervals
updateCountdown();
setInterval(updateCountdown, 1000);

// Get the countdown container element
const countdownContainer = document.querySelector(".countdown-container");

// Update the countdown container's opacity based on scroll position
function updateCountdownOpacity() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const opacity = 1 - scrollTop / (window.innerHeight * 0.5);

  countdownContainer.style.opacity = Math.max(opacity, 0);

  if (opacity <= 0) {
    countdownContainer.style.zIndex = "-1";
  } else {
    countdownContainer.style.zIndex = "1";
  }
}

// Add a scroll event listener to update the countdown container's opacity
window.addEventListener("scroll", updateCountdownOpacity);

// Get the scroll button and the first content section elements
const scrollBtn = document.getElementById("scroll-btn");
const firstContentSection = document.querySelector(".content-section");

// Scroll to the content section when the scroll button is clicked
function scrollToContent() {
  firstContentSection.scrollIntoView({ behavior: "smooth" });
}

// Add a click event listener to the scroll button
scrollBtn.addEventListener("click", scrollToContent);
