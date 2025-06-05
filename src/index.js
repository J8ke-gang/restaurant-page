import "./styles.css";
import createHomePage from "./home.page.js";
import createMenuPage from "./menu-page.js";
import createContactPage from "./contact.page.js";
import { addToCart } from "./Cart.js";

// Function to clear content
function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

// Function to handle smooth page loading with fade effect
function fadeOutContent() {
  const content = document.getElementById("content");
  content.style.transition = "opacity 0.5s";
  content.style.opacity = 0;
}

function fadeInContent() {
  const content = document.getElementById("content");
  content.style.transition = "opacity 0.5s";
  content.style.opacity = 1;
}

// Pass addToCart if the page is the Menu
function loadPage(pageFunction) {
  fadeOutContent();
  setTimeout(() => {
    clearContent();
    if (pageFunction === createMenuPage) {
      pageFunction(addToCart); //
    } else {
      pageFunction();
    }
    fadeInContent();
  }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
  const homeButton = document.getElementById("home-btn");
  const menuButton = document.getElementById("menu-btn");
  const contactButton = document.getElementById("contact-btn");
  const cartButton = document.getElementById("Cart-btn");
  const cartContainer = document.getElementById("cart-container");

  if (homeButton)
    homeButton.addEventListener("click", () => loadPage(createHomePage));
  if (menuButton)
    menuButton.addEventListener("click", () => loadPage(createMenuPage));
  if (contactButton)
    contactButton.addEventListener("click", () => loadPage(createContactPage));

  if (cartButton && cartContainer) {
    cartButton.addEventListener("click", () => {
      cartContainer.style.display =
        cartContainer.style.display === "block" ? "none" : "block";
    });
  }

  // Load the home page
  createHomePage();
});
