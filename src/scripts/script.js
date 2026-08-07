import themeSwitcher from './theme_switcher.js';
import navbarMenuToggle from './navbar_menu_toggle.js';
import glowEffect from './glow_effect.js';
import scrollUp from './scroll_up.js';
import scrollReveal from './scroll_reveal.js';

document.addEventListener('DOMContentLoaded', (e) => {
  themeSwitcher('.theme__switcher .theme__icon');
  navbarMenuToggle(
    '.navbar__container .navbar__toggle__btn',
    '.navbar__container .navbar__links',
    'section[id]',
  );
  scrollUp('.scroll__up');
  glowEffect('.slide-track .slide .tech-item');
  scrollReveal();
});
