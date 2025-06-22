/************************************************************/
// Amani.js
//interactive components
/************************************************************/
// Hide the welcome text after 3 seconds
setTimeout(() => {
  const sText = document.getElementById('sText');
  if (sText) {
    sText.setAttribute('visible', 'false');
  }
}, 3000);