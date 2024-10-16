

const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  
  // For the ::before pseudo-element (slower scroll)
  document.querySelector('.parallax-item:first-child').style.setProperty('--before-scroll', offset * 0.5 + "px");
  
  // For the ::after pseudo-element (normal scroll)
  parallax.style.backgroundPositionY = offset * 0.7 + "px"; // Slightly faster scroll for after
});


// Get the Explore button and the About Me section
const exploreButton = document.querySelector('.button-delete');
const aboutMeSection = document.getElementById('about-me');

// Add click event to scroll to the About Me section when the Explore button is clicked
exploreButton.addEventListener('click', function() {
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
});

