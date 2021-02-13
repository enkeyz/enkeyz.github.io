window.onload = () => {
  const about_button = document.querySelector(".about-button");
  const about_overlay = document.querySelector(".about-overlay-container");

  about_button.addEventListener("click", () => {
    about_overlay.classList.toggle("is-active");
  });

  const work_button = document.querySelector(".work-button");
  const work_overlay = document.querySelector(".work-overlay-container");

  work_button.addEventListener("click", () => {
    work_overlay.classList.toggle("is-active");
  });

  const contact_button = document.querySelector(".contact-button");
  const contact_overlay = document.querySelector(".contact-overlay-container");

  contact_button.addEventListener("click", () => {
    contact_overlay.classList.toggle("is-active");
  });
};
