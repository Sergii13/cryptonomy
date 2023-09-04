// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів

window.addEventListener("DOMContentLoaded", () => {
  const closeBanner = document.querySelector(".header__top-close");
  if (closeBanner) {
    closeBanner.addEventListener("click", (e) => {
      e.preventDefault();
      closeBanner.closest(".header").classList.add("close-banner");
    });
  }
});
