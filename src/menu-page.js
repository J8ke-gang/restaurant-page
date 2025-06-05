export default function createMenuPage(addToCart) {
  /*menu items*/
  const menuItems = [
    {
      dish: "Margherita",
      price: "$10",
      image:
        "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1737104576&width=800",
    },
    {
      dish: "Pepperoni",
      price: "$9",
      image:
        "https://ooni.com/cdn/shop/articles/pepperoni-pizza_27477125-507f-4948-ac59-824ac0581df5.jpg?crop=center&height=800&v=1737104605&width=800",
    },
    {
      dish: "Veggie Delight",
      price: "$10",
      image:
        "https://recipefund.com/wp-content/uploads/jet-form-builder/f133c249d4a29961d2fd87ee9713e9c1/2023/08/Vegie-Deight-Pizza.png",
    },
    {
      dish: "Meat Lovers",
      price: "$15",
      image:
        "https://trecce.ca/wp-content/uploads/2023/09/meat-lovers-pizza-1sm-2.jpg",
    },
    {
      dish: "BBQ Chicken",
      price: "$12",
      image:
        "https://www.thecandidcooks.com/wp-content/uploads/2023/04/bbq-chicken-pizza-feature.jpg",
    },
    {
      dish: "Hawaiian",
      price: "$12",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Pizza_with_pineapple.jpg/1200px-Pizza_with_pineapple.jpg",
    },
  ];

  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Our Menu</h2>
    <div class="menu-grid">
      ${menuItems
        .map(
          (item) => `
            <div class="menu-card">
              <img src="${item.image}" alt="${item.dish}" class="menu-image" />
              <div class="menu-card-content">
                <h3 class="menu-card-title">${item.dish}</h3>
                <p class="menu-card-price">${item.price}</p>
                <button class="add-to-cart" 
                  data-id="${item.id}" 
                  data-dish="${item.dish}" 
                  data-price="${item.price}">
                  Add to Cart
                </button>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const dish = btn.getAttribute("data-dish");
      const price = btn.getAttribute("data-price");
      addToCart({ id, dish, price });
    });
  });
}
