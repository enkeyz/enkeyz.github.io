const loading_screen = document.querySelector(".loading-screen");

window.addEventListener("load", () => {
  setTimeout(() => {
    loading_screen.remove();
  }, 1000);
});
