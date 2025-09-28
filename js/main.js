document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.side-nav__toggle');
  const list = document.querySelector('.side-nav ul');

  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const isOpen = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  const languageButtons = document.querySelectorAll('.language-switcher button[data-target]');

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;

      if (!target) {
        return;
      }

      const currentPath = window.location.pathname.split('/').pop() || 'index.html';

      if (currentPath === target) {
        return;
      }

      window.location.href = target;
    });
  });
});
