const buttonIconElement = document.getElementById("button-icon");
const headerElement = document.getElementById("header");
const navElement = document.getElementById("nav");
const blinkingCursorElement = document.getElementById("blinking-cursor");
const navListItems = document.querySelectorAll(".nav-list-item");

function toggleMobileMenu() {
  const isVisible = navElement.getAttribute("data-visible") === "true";

  if (!isVisible) {
    navElement.setAttribute("data-visible", true);
    navElement.setAttribute("aria-expanded", true);
    buttonIconElement.classList.remove("fa-bars");
    buttonIconElement.classList.add("fa-xmark");
    blinkingCursorElement.style.display = "none";

    navListItems.forEach((navListItem) => {
      navListItem.addEventListener("click", () => {
        navElement.setAttribute("data-visible", false);
        navElement.setAttribute("aria-expanded", false);
        buttonIconElement.classList.remove("fa-xmark");
        buttonIconElement.classList.add("fa-bars");
        blinkingCursorElement.style.display = "inline";
      });
    });
  } else {
    navElement.setAttribute("data-visible", false);
    navElement.setAttribute("aria-expanded", false);
    buttonIconElement.classList.remove("fa-xmark");
    buttonIconElement.classList.add("fa-bars");
    blinkingCursorElement.style.display = "inline";
  }
}
