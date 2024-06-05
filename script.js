 $(document).ready(function () {
      $("a").on('click', function (event) {
        if (this.hash !== "") {
          event.preventDefault();

          
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function () {
            window.location.hash = hash;
          });
        } 
      });

      $(window).scroll(function () {
        if ($(this).scrollTop() > 550) {
          $('.navbar').addClass('solid');
          $('.back-to-top').addClass('visible');
        } else {
          $('.navbar').removeClass('solid');
          $('.back-to-top').removeClass('visible');
        }
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      new Splide('#splide-container', {
        type: 'fade',
        pagination: false,
        arrows: false
      }).mount();
    });
    
  let currentIndex = 0;

const texts = [
  { heading: "Scroll down if want know about me!",},
  { heading: "Hi i'am Amri", paragraph: "I'am a junior web development" },
  { heading: "Learning and coding Enthusiast!", paragraph: "Exploring the world of web development"}
];

function typeText(element, text, callback) {
  element.textContent = "";
  let charIndex = 0;
  const interval = setInterval(() => {
    if (charIndex < text.length) {
      element.textContent += text.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 100); // Adjust typing speed here for faster typing
}

function changeText() {
  const myHeading = document.getElementById('myHeading');
  const myParagraph = document.getElementById('myParagraph');

  myHeading.style.opacity = 0;
  myParagraph.style.opacity = 0;

  setTimeout(() => {
    typeText(myHeading, texts[currentIndex].heading, () => {
      myHeading.style.opacity = 1;
    });
    typeText(myParagraph, texts[currentIndex].paragraph, () => {
      myParagraph.style.opacity = 1;
    });
  }, 400); // Shorter delay before typing starts

  currentIndex = (currentIndex + 1) % texts.length;
}

// Initial call to display text immediately on load
window.onload = function() {
  currentIndex = 0; // Ensure starting from the first text
  changeText(); // Display the first text immediately
  setInterval(changeText, 8000); // Set interval to change text every 4 seconds
};
document.querySelectorAll('.icon-box i').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.add('touched');
        setTimeout(() => {
            icon.classList.remove('touched');
        }, 200);
    });
});