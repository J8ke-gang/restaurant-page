import "./styles.css";
import createHomePage from "./home.page.js";
import createMenuPage from "./menu-page.js";
import createContactPage from "./contact.page.js";

// buttons
const homeButton = document.getElementById("home-btn");
const menuButton = document.getElementById("menu-btn");
const contactButton = document.getElementById("contact-btn");

// navigation buttons click
homeButton.addEventListener("click", createHomePage);
menuButton.addEventListener("click", createMenuPage);
contactButton.addEventListener("click", createContactPage);

// Load the home page default
createHomePage();
