// src/lib/header-scroll.js
export function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const logo = header.querySelector('img');
  const navLinks = header.querySelectorAll('nav a:not(:last-child)');
  const accountBtn = header.querySelector('nav a:last-child');

  let lastScroll = 0;

  const shrink = () => {
    header.classList.remove('h-20', 'md:h-16', 'border-gray-200');
    header.classList.add('h-16', 'border-gray-100', 'shadow-sm', 'bg-white/95', 'backdrop-blur');
    logo?.classList.replace('h-10', 'h-8');
    navLinks.forEach(l => l.classList.replace('text-base', 'text-sm'));
    accountBtn?.classList.replace('py-2.5', 'py-2');
  };

  const expand = () => {
    header.classList.remove('h-16', 'border-gray-100', 'shadow-sm', 'bg-white/95', 'backdrop-blur');
    header.classList.add('h-20', 'md:h-16', 'border-gray-200');
    logo?.classList.replace('h-8', 'h-10');
    navLinks.forEach(l => l.classList.replace('text-sm', 'text-base'));
    accountBtn?.classList.replace('py-2', 'py-2.5');
  };

  const handleScroll = () => {
    const current = window.scrollY;
    if (current > 100 && current > lastScroll) {
      shrink();
    } else if (current <= 100) {
      expand();
    }
    lastScroll = current;
  };

  window.addEventListener('scroll', handleScroll);
  if (window.scrollY > 100) shrink();
}