// Language Management System
let currentLanguage = localStorage.getItem('unihub_language') || 'en';
let translations = {};

function getAssetPath(path) {
  const cleanPath = path.replace(/^\/+/, '');
  const isNestedPage = /\/(admin|lecturer|student|super-admin)\//.test(window.location.pathname);
  return `${isNestedPage ? '../' : ''}${cleanPath}`;
}

// Load language file
async function loadLanguage(lang) {
  try {
    const response = await fetch(getAssetPath(`languages/${lang}.json`));
    const data = await response.json();
    translations = data;
    currentLanguage = lang;
    localStorage.setItem('unihub_language', lang);
    updatePageLanguage();
  } catch (error) {
    console.error('Error loading language:', error);
  }
}

// Get translation for a key
function t(key) {
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return value || key;
}

// Update all elements with data-i18n attribute
function updatePageLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = t(key);
    
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      if (element.hasAttribute('placeholder')) {
        element.placeholder = translation;
      } else {
        element.value = translation;
      }
    } else {
      element.textContent = translation;
    }
  });

  // Update HTML content with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    element.innerHTML = t(key);
  });

  // Dispatch custom event for page-specific updates
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: currentLanguage } }));
}

// Change language
function changeLanguage(lang) {
  loadLanguage(lang);
}

// Get current language
function getCurrentLanguage() {
  return currentLanguage;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadLanguage(currentLanguage);
});
