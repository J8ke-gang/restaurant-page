export default function createMenuPage() {
  /*menu items*/
  const menuItems = [
    { dish: "Margherita", price: "$10" },
    { dish: "Pepperoni", price: "$9" },
    { dish: "Veggie Delight", price: "$10" },
    { dish: "Meat Lovers", price: "$15" },
    { dish: "BBQ Chicken", price: "$12" },
    { dish: "Hawaiian", price: "$12" },
  ];

  const content = document.getElementById("content");
/*to style better*/
  content.innerHTML = `
    <h2>Our Menu</h2>
    <div class="menu-grid">
      ${menuItems
        .map(
          (item) => `
          <div class="menu-card">
            <div class="menu-card-content">
              <h3 class="menu-card-title">${item.dish}</h3>
              <p class="menu-card-price">${item.price}</p>
            </div>
          </div>
        `
        )
        .join("")}
    </div>
  `;
}
