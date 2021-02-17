const loading_screen = document.querySelector(".loading-screen");
const tab_button_container = document.querySelector(".tab-button-container");
const tab_buttons = document.querySelectorAll(".btn--tab");
const tab_content_items = document.querySelectorAll(".tab-content__item");

window.addEventListener("load", () => {
  setTimeout(() => {
    loading_screen.classList.add("finished-loading");
  }, 1000);
});

tab_button_container.addEventListener("click", (event) => {
  if (!event.target.classList.contains("btn--tab")) return;

  deselectAllTabButton();
  deselectAllTabs();
  selectTab(event.target);
});

const selectTab = (button) => {
  button.classList.add("btn--tab--active");
  document
    .querySelector(`#${button.id}-content`)
    .classList.add("tab-content__item--active");
};

const deselectAllTabButton = () => {
  tab_buttons.forEach((tab_button) =>
    tab_button.classList.remove("btn--tab--active")
  );
};

const deselectAllTabs = () => {
  tab_content_items.forEach((tab_content_item) => {
    tab_content_item.classList.remove("tab-content__item--active");
  });
};
