export default function createHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = `
      <h2>Welcome to Chessus Crust!</h2>
      <p>The home of divine pizza creations. Our heavenly pizzas are crafted with love and the freshest ingredients.</p>
    `;
  
    const image = document.createElement("img");
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg";
    image.alt = "Home Page Pizza";
    content.appendChild(image);
  }
  