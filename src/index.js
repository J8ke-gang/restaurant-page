import "./styles.css";
import createHomePage from "./home.page.js";
import createMenuPage from "./menu-page.js";
import createContactPage from "./contact.page.js";

// Get buttons
const homeButton = document.getElementById("home-btn");
const menuButton = document.getElementById("menu-btn");
const contactButton = document.getElementById("contact-btn");

// Event listeners for navigation buttons
homeButton.addEventListener("click", createHomePage);
menuButton.addEventListener("click", createMenuPage);
contactButton.addEventListener("click", createContactPage);

// Load the home page by default
createHomePage();
