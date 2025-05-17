const btn = document.getElementById('animateBtn');

// Function to store color preference
function storePreference(color) {
  localStorage.setItem('btnColor', color);
}

// Function to retrieve and apply preference
function applyPreference() {
  const savedColor = localStorage.getItem('btnColor');
  if (savedColor) {
    btn.style.backgroundColor = savedColor;
  }
}

// Function to trigger animation on click
btn.addEventListener('click', () => {
  btn.style.animation = 'pulse 1s infinite';
  
  // Change button color and save preference
  const newColor = '#e74c3c'; // red color example
  btn.style.backgroundColor = newColor;
  storePreference(newColor);

  // Stop animation after 3 seconds
  setTimeout(() => {
    btn.style.animation = '';
  }, 3000);
});

// Apply saved preference when page loads
window.onload = applyPreference;
