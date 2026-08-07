export default function glowEffect(items) {
  const $items = document.querySelectorAll(items);

  $items.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      item.style.setProperty("--x", `${x}px`);
      item.style.setProperty("--y", `${y}px`);
    });
  });
}
