(function () {
  const supportEmail = window.TRAVII_SITE_CONFIG?.supportEmail || "chenle.yong16@gmail.com";
  const supportMailto = `mailto:${supportEmail}`;

  document.querySelectorAll("[data-support-email]").forEach((element) => {
    element.textContent = supportEmail;
    if (element.tagName === "A") element.href = supportMailto;
  });

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const title = carousel.querySelector("[data-carousel-title]");
  const description = carousel.querySelector("[data-carousel-description]");
  const indexLabel = carousel.querySelector("[data-carousel-index]");
  let activeIndex = 0;

  const showSlide = (nextIndex) => {
    activeIndex = (nextIndex + slides.length) % slides.length;
    const activeSlide = slides[activeIndex];

    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    title.textContent = activeSlide.dataset.title;
    description.textContent = activeSlide.dataset.description;
    indexLabel.textContent = String(activeIndex + 1);
  };

  carousel.querySelector("[data-carousel-prev]").addEventListener("click", () => showSlide(activeIndex - 1));
  carousel.querySelector("[data-carousel-next]").addEventListener("click", () => showSlide(activeIndex + 1));
})();
