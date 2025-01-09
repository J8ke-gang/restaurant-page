// greeting.js
export const greeting = "Hello, Odinite!";

// Adding an image from a URL
const image = document.createElement("img");
image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg";
image.alt = "A delicious pizza"; // Always include an alt attribute for accessibility
document.body.appendChild(image);
