export default function navbarMenuToggle(toggleBtn, menu, sections) {
  const d = document,
    $toggleBtn = d.querySelector(toggleBtn),
    $menu = d.querySelector(menu),
    $sections = d.querySelectorAll(sections);

  d.addEventListener('click', (e) => {
    if (e.target.matches(toggleBtn) || e.target.matches(`${toggleBtn} *`)) {
      $toggleBtn.classList.toggle('active');
      $menu.classList.toggle('collapsed');
    } else if (!e.target.closest(menu) && !e.target.closest(toggleBtn)) {
      if ($menu.classList.contains('collapsed')) {
        $menu.classList.remove('collapsed');
        $toggleBtn.classList.remove('active');
      }
    }
  });

  d.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $menu.classList.contains('collapsed')) {
      $menu.classList.remove('collapsed');
      $toggleBtn.classList.remove('active');
    }
  });

  // $activeLinks.forEach((link) => {
  //   const linkPath = new URL(link.href).pathname;

  //   if (linkPath === location) {
  //     link.classList.add("active");
  //   } else {
  //     link.classList.remove("active");
  //   }
  // });

  // ===== ACTIVE LINK =====

  /*   const scrollActivate = () => {
    const scrollDown = window.scrollY;

    $sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 68,
        sectionId = current.getAttribute('id'),
        sectionClass = d.querySelector('.navbar__links li a[href*=' + sectionId + ']');

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionClass.classList.add('active');
      } else {
        sectionClass.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', scrollActivate); */

  const options = {
    root: null,
    // Reducimos el recorte inferior a -50% para dar más margen en móviles
    rootMargin: '-68px 0px -50% 0px',
    // 0 significa que en cuanto un solo píxel entre en la zona, se activa
    threshold: 0,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.getAttribute('id');
      const link = d.querySelector(`.navbar__links li a[href*="${sectionId}"]`);

      if (!link) return;

      if (entry.isIntersecting) {
        d.querySelectorAll('.navbar__links li a').forEach((el) => el.classList.remove('active'));
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  $sections.forEach((section) => observer.observe(section));
}
