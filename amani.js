/************************************************************/
// Amani.js
//interactive components
/************************************************************/
// Hide the welcome text after 3 seconds
setTimeout(() => {
  const fText = document.getElementById('fText');
  if (fText) {
    fText.setAttribute('visible', 'false');
  }
}, 3000);

// Show baboon and wasteland text on click
window.addEventListener('DOMContentLoaded', function() {
  const baboon = document.getElementById('ca_baboon');
  const baboonText = document.getElementById('baboonText');
  if (baboon && baboonText) {
    baboon.addEventListener('click', function () {
      baboonText.setAttribute('visible', 'true');
      setTimeout(function() {
        baboonText.setAttribute('visible', 'false');
      }, 8000); // Hide after 8 seconds
    });
  }

  const wasteland = document.getElementById('wasteland');
  const wasteText = document.getElementById('wasteText');
  if (wasteland && wasteText) {
    wasteland.addEventListener('click', function () {
      console.log('Wasteland clicked!');
      wasteText.setAttribute('visible', 'true');
      setTimeout(function() {
        wasteText.setAttribute('visible', 'false');
      }, 8000); // Hide after 8 seconds
    });
  }

  const baobab = document.getElementById('am_baobabTree');
  const baobabText = document.getElementById('tree');
  if (baobab && baobabText) {
    baobab.addEventListener('click', function () {
      baobabText.setAttribute('visible', 'true');
      setTimeout(function() {
        baobabText.setAttribute('visible', 'false');
      }, 8000); // Hide after 8 seconds
    });
  }
});
