let cart = [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    alert("Already in cart!");
    return;
  }
  cart.push({...product, quantity:1});
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

function increaseQuantity(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.quantity++;
  renderCart();
}

function decreaseQuantity(id) {
  const item = cart.find(i => i.id === id);
  if (item && item.quantity > 1) item.quantity--;
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
  } else {
    alert("Proceeding to checkout...");
  }
}
