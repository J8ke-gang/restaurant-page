export default function createHomePage() {
  const content = document.getElementById("content");
  
  // Adding class names for easier styling
  content.innerHTML = `
    <h2 class="home-title">Welcome to Chessus Crust!</h2>
    <p class="home-description"> The best pizza crafted with the freshest ingredients come check us out.</p>
  `;
  
  // Creating the image element with a class for styling
  const image = document.createElement("img");
  image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg";
  image.alt = "Home Page Pizza";
  image.classList.add("home-image");
  
  // Appending the image to the content
  content.appendChild(image);
}
