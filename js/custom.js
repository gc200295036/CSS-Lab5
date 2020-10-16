/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */

// Custom JavaScript
// STEP 15: Call up the carousel using the id, and use the .carousel() method create the options object
$('#carousel-cars').carousel({
  interval: 5000,
  wrap: true,
  /* Modify custom.js so that the Carousel can be controlled using the left and right
arrow keys on the keyboard. Click the image once than you can use the keyboard arrow keys! */
  keyboard: true,
});

// STEP 16: Change the interval to 5 seconds (set in milliseconds)
// STEP 17: Try an event handler to zoom up the .carousel-caption after the slide completes sliding - by adding a class when the slide has finished animating, and removing it when it begins
$('#carousel-cars').on('slide.bs.carousel', () => {
  console.log('Slide began sliding');
  $('.carousel-caption').removeClass('zoomit');
});
$('#carousel-cars').on('slid.bs.carousel', () => {
  console.log('Slide has finished sliding');
  // addClass css animation class from the figcaption element, removeClass can work aswell
  $('.carousel-caption').addClass('zoomit');
});
