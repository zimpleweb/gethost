// src/scripts/header-scroll.js

export function initHeaderScroll() {
  let lastScroll = 0;
  const header = document.getElementById('header');
  if (!header) return;

  const logo = header.querySelector('img');
  const navLinks = header.querySelectorAll('nav a:not(:last-child)');
  const accountBtn = header.querySelector('nav a:last-child');

  const shrink = () => {
    header.classList.remove('h-20', 'md:h-16', 'border-gray-200');
    header.classList.add('h-16', 'border-gray-100');
    logo?.classList.remove('h-10', 'md:h-9');
    logo?.classList.add('h-8', 'md:h-7');
    navLinks.forEach(l => l.classList.replace('text-base', 'text-sm'));
    accountBtn?.classList.remove('py-2.5');
    accountBtn?.classList.add('py-2', 'text-xs');
  };

  const expand = () => {
    header.classList.remove('h-16', 'border-gray-100');
    header.classList.add('h-20', 'md:h-16', 'border-gray-200');
    logo?.classList.remove('h-8', 'md:h-7');
    logo?.classList.add('h-10', 'md:h-9');
    navLinks.forEach(l => l.classList.replace('text-sm', 'text-base'));
    accountBtn?.classList.remove('py-2', 'text-xs');
    accountBtn?.classList.add('py-2.5');
  };

  window.addEventListener('scroll', () => {
    const current = window.pageYOffset;
    if (current > 100 && current > lastScroll) {
      shrink();
    } else if (current <= 100) {
      expand();
    }
    lastScroll = current;
  });

  // Init bij laadtijd
  if (window.pageYOffset > 100) shrink();
}