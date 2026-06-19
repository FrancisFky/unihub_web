// Sidebar Management
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const closeSidebar = document.getElementById('close-sidebar');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

  // Open sidebar
  if (hamburger && sidebar && overlay) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.add('active');
      overlay.classList.add('active');
    });
  }

  // Close sidebar
  const closeButtons = [closeSidebar, overlay];
  closeButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      });
    }
  });

  // Close sidebar when clicking a link
  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      }
    });
  });

  // Set active link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.closest('li').classList.add('active');
    }
  });

  // Close sidebar on window resize if screen is large
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && sidebar && overlay) {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
});
