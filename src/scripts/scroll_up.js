export default function scrollUp(scroll) {
  const $scrollUp = document.querySelector(scroll);
  if (!$scrollUp) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
      $scrollUp.classList.add("show");
    } else {
      $scrollUp.classList.remove("show");
    }
  });
}
