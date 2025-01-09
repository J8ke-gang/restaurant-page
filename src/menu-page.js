export default function createMenuPage() {
    const content = document.getElementById("content");
    content.innerHTML = `
      <h2>Our Menu</h2>
      <ul>
        <li>Margherita - $8</li>
        <li>Pepperoni - $10</li>
        <li>Veggie Delight - $9</li>
        <li>Meat Lovers - $12</li>
        <li>BBQ Chicken - $11</li>
        <li>Hawaiian - $10</li>
      </ul>
    `;
  }
  