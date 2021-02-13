window.onload = () => {
  const overlayButtons = document.querySelector(".overlay-buttons");
  const overlays = document.querySelectorAll(".overlay");
  const closeButtons = document.querySelectorAll(".close-btn");

  overlayButtons.addEventListener("click", (event) => {
    const overlayType = event.target.textContent.toLowerCase();

    overlays.forEach((overlay) => {
      if (overlay.id == overlayType) {
        overlay.classList.add("is-active");
      }
    });
  });

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", (event) => {
      overlays.forEach((overlay) => {
        overlay.classList.remove("is-active");
      });
    });
  });
};
