// Global Script for UniHub

// Setup event listeners when page loads
document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupLanguageToggle();
  setupUserMenu();
  setupNotifications();
  setupSearch();
});

function getAppPath(path) {
  const cleanPath = path.replace(/^\/+/, '');
  const isNestedPage = /\/(admin|lecturer|student|super-admin)\//.test(window.location.pathname);
  return `${isNestedPage ? '../' : ''}${cleanPath}`;
}

// Theme Toggle Setup
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

// Language Toggle Setup
function setupLanguageToggle() {
  const languageSelect = document.getElementById('language-select');
  if (languageSelect) {
    languageSelect.value = getCurrentLanguage();
    languageSelect.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }

  const languageButtons = document.querySelectorAll('[data-language]');
  languageButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      changeLanguage(e.target.getAttribute('data-language'));
    });
  });
}

// User Menu Setup
function setupUserMenu() {
  const userMenu = document.getElementById('user-menu');
  const userButton = document.getElementById('user-button');

  if (userButton && userMenu) {
    userButton.addEventListener('click', (e) => {
      e.stopPropagation();
      userMenu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!userButton.contains(e.target) && !userMenu.contains(e.target)) {
        userMenu.classList.remove('show');
      }
    });
  }
}

// Notifications Setup
function setupNotifications() {
  const notificationBell = document.getElementById('notification-bell');
  const notificationPanel = document.getElementById('notification-panel');

  if (notificationBell && notificationPanel) {
    notificationBell.addEventListener('click', (e) => {
      e.stopPropagation();
      notificationPanel.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!notificationBell.contains(e.target) && !notificationPanel.contains(e.target)) {
        notificationPanel.classList.remove('show');
      }
    });
  }
}

// Search Setup
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      if (query.length > 0) {
        // Perform search
        performSearch(query);
      }
    });
  }
}

// Perform Search
function performSearch(query) {
  // To be implemented by each page
  console.log('Searching for:', query);
}

// Logout function
function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = getAppPath('login.html');
}

// Navigate to page
function navigateTo(page) {
  const currentRole = getCurrentUserRole();
  if (currentRole) {
    window.location.href = getAppPath(`${currentRole}/${page}`);
  } else {
    window.location.href = getAppPath(page);
  }
}

// Get current user
function getCurrentUser() {
  return mockData.currentUser;
}

// Get current user role
function getCurrentUserRole() {
  return getCurrentUser()?.role;
}

// Format date
function formatDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString(getCurrentLanguage() === 'fr' ? 'fr-FR' : 'en-US', options);
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat(getCurrentLanguage() === 'fr' ? 'fr-FR' : 'en-US', {
    style: 'currency',
    currency: 'XAF'
  }).format(amount);
}

// Show notification toast
function showNotification(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 100);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Format time
function formatTime(time) {
  return new Date(`2024-01-01 ${time}`).toLocaleTimeString(getCurrentLanguage() === 'fr' ? 'fr-FR' : 'en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
}
