document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.side-nav__toggle');
  const list = document.querySelector('.side-nav ul');

  if (!toggle || !list) {
    return;
  }

  toggle.addEventListener('click', () => {
    const isOpen = list.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});
