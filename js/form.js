const myForm = document.getElementById("my-form");
const myFormButton = document.getElementById("my-form-button");

myForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const formData = new FormData(myForm);

  try {
    await fetch("https://formspree.io/f/xleokppn", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    myFormButton.innerHTML = "Email sent!";
  } catch {
    myFormButton.innerHTML = "Error!";
  }
});
