// Theme Management System
let currentTheme = localStorage.getItem('unihub_theme') || 'light';

// Initialize theme
function initTheme() {
  applyTheme(currentTheme);
  updateThemeToggle();
}

// Apply theme
function applyTheme(theme) {
  const html = document.documentElement;
  
  if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    html.setAttribute('data-theme', 'light');
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }
  
  currentTheme = theme;
  localStorage.setItem('unihub_theme', theme);
}

// Toggle theme
function toggleTheme() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  updateThemeToggle();
  
  // Dispatch custom event
  document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
}

// Get current theme
function getCurrentTheme() {
  return currentTheme;
}

// Update theme toggle button
function updateThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    if (currentTheme === 'dark') {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      themeToggle.setAttribute('title', 'Light Mode');
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      themeToggle.setAttribute('title', 'Dark Mode');
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initTheme);
