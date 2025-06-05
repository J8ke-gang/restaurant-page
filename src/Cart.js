const cart = [];

export function addToCart(item) {
  cart.push(item);
  console.log("Cart:", cart);
  updateCartUI();
}

function updateCartUI() {
  const cartList = document.getElementById("cart");
  if (!cartList) return;
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.dish} - ${item.price}`;

    // remove button for each cart item
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.cursor = "pointer";
    removeBtn.addEventListener("click", () => {
      cart.splice(index, 1);
      updateCartUI();
    });

    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });
}
