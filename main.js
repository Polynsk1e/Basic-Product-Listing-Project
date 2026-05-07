function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
    <img src="${p.image}" alt="${p.name}" class="product-img">
    <h3>${p.name}</h3>
    <p>₱${p.price}</p>
    <button id="btn-${p.id}" onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    list.appendChild(card);
  });
}

function renderCart() {
  const itemsDiv = document.getElementById("cart-items");
  const countSpan = document.getElementById("cart-count");
  const totalP = document.getElementById("cart-total");

  itemsDiv.innerHTML = "";
  let total = 0;
  let count = 0;

  if (cart.length === 0) {
    itemsDiv.innerHTML = "<p>Cart is empty</p>";
  } else {
    cart.forEach(item => {
      const subtotal = item.price * item.quantity;
      total += subtotal;
      count += item.quantity;

      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        ${item.name} - ₱${item.price} (Qty: ${item.quantity})
        <div>
          <button onclick="increaseQuantity(${item.id})">+</button>
          <button onclick="decreaseQuantity(${item.id})">-</button>
          <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      `;
      itemsDiv.appendChild(div);
    });
  }

  countSpan.textContent = count;
  totalP.textContent = `Total: ₱${total}`;
}

renderProducts();
renderCart();
