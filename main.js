// Simple toggle for mobile sidebar
window.addEventListener('click', (e) => {
  const sidebar = document.querySelector('aside');
  if (window.innerWidth < 768 && !sidebar.contains(e.target) && !e.target.closest('button')) {
    sidebar.classList.add('-translate-x-full');
  }
});

// Close sidebar on mobile when a nav link is clicked
document.querySelectorAll('aside a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      document.querySelector('aside').classList.add('-translate-x-full');
    }
  });
});

