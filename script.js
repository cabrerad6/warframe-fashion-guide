// ============================================
// FASHIONFRAME GUIDE — SCRIPT.JS
// Shared JS: Nav, Gallery filter, Modals
// ============================================

// --- MOBILE NAV TOGGLE ---
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links) links.classList.toggle('open');
}

// Close nav on link click (mobile)
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      if (links) links.classList.remove('open');
    });
  });
});

// --- GALLERY FILTER ---
function filterGallery(theme, btn) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const cards = document.querySelectorAll('.build-card');
  cards.forEach(card => {
    if (theme === 'all' || card.dataset.theme === theme) {
      card.style.display = '';
      card.style.animation = 'fadeInUp 0.3s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

// --- MODAL SYSTEM ---
function openModal(modalId) {
  document.getElementById('modal-overlay').classList.add('open');
  document.getElementById(modalId).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.querySelectorAll('.build-modal').forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// --- FEATURE CARD ENTRANCE ANIMATION ---
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.feature-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 150 + i * 100);
  });
});
