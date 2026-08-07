import ScrollReveal from 'scrollreveal';

/* ===== SCROLL REVEAL ===== */
export default function scrollReveal() {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    easing: 'ease',
    duration: 800,
    delay: 150,
    reset: false,
    once: true,
    opacity: 0,
    cleanup: true,
  });

  sr.reveal(`header`, {
    delay: 500,
  });

  sr.reveal(`.left-reveal-100`, {
    origin: 'left',
    interval: 100,
  });

  sr.reveal(`.left-reveal-100-delay`, {
    origin: 'left',
    interval: 200,
    distance: "15px",
    delay: 400,
    // duration: 900
  });

  sr.reveal(`.left-reveal`, {
    origin: 'left',
    // interval: 100,
  });

  if (window.screenX > 768) {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      easing: 'ease',
      duration: 800,
      delay: 150,
      reset: false,
      once: true,
      opacity: 0,
      cleanup: true,
    });
    sr.reveal(`.left-reveal-200`, {
      origin: 'left',
      interval: 200,
    });

    sr.reveal('.bottom-reveal-200', {
      origin: 'bottom',
      delay: 200,
      interval: 200,
    });
  } else if (window.screenX < 768) {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '15px',
      easing: 'ease',
      duration: 800,
      delay: 150,
      reset: false,
      once: true,
      opacity: 0,
      cleanup: true,
    });

    sr.reveal(`.left-reveal-200`, {
      origin: 'top',
      interval: 200,
    });

    sr.reveal('.bottom-reveal-200', {
      delay: 450,
      interval: 0,
      opacity: 0,
      distance: '0px',
    });
  }

  sr.reveal('.right-reveal-200', {
    origin: 'right',
  });

  sr.reveal('.scale-reveal', {
    interval: 200,
    scale: 0.75,
  });

  sr.reveal('.scale-reveal-200-delay', {
    interval: 200,
    scale: 0.75,
  });

  sr.reveal('.center-reveal-opacity', {
    interval: 200,
    distance: '0px',
    delay: 400,
    // scale: 0.9,
  });

  /*   sr.reveal('.header__picture .arrows, .header__picture .background', {
    interval: 200,
    scale: 0.75,
  }); */
}
