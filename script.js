const countdownElement = document.getElementById('countdown');

const targetDate = new Date('2023-07-19T00:00:00');

function updateCountdown() {
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);



const countdownContainer = document.querySelector('.countdown-container');

function updateCountdownOpacity() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const opacity = 1 - (scrollTop / (window.innerHeight * 0.5));

  countdownContainer.style.opacity = Math.max(opacity, 0);
}


  if (opacity <= 0) {
    countdownContainer.style.zIndex = '-1';
  } else {
    countdownContainer.style.zIndex = '1';
  }
}

window.addEventListener('scroll', updateCountdownOpacity);



const scrollBtn = document.getElementById('scroll-btn');
const firstContentSection = document.querySelector('.content-section');

function scrollToContent() {
  firstContentSection.scrollIntoView({ behavior: 'smooth' });
}

scrollBtn.addEventListener('click', scrollToContent);
