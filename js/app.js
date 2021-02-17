const loading_screen = document.querySelector(".loading-screen");
const tab_buttons = document.querySelectorAll(".btn--tab");
const tab_content_items = document.querySelectorAll(".tab-content__item");

window.addEventListener("load", () => {
  setTimeout(() => {
    loading_screen.style.display = "none";
  }, 1000);
});

tab_buttons.forEach((tab_button) =>
  tab_button.addEventListener("click", () => {
    deselectAllTabButton();
    deselectAllTabs();
    selectTab(tab_button);
  })
);

const selectTab = (tab_button) => {
  tab_button.classList.add("btn--tab--active");
  document
    .querySelector(`#${tab_button.id}-content`)
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
