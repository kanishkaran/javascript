const productsContainer = document.getElementById("products");
const cartToggle = document.getElementById("cart-toggle");
const cartSidebar = document.getElementById("cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartSummary = document.getElementById("cart-summary");
const cartCount = document.getElementById("cart-count");
const searchInput = document.getElementById("search");

let cart = JSON.parse(localStorage.getItem("cart")) || {};
let products = [];

async function fetchProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    products = data.products;
    renderProducts(products);
  } catch (err) {
    console.error("Failed to load products", err);
  }
}

function renderProducts(productList) {
  productsContainer.innerHTML = "";
  productList.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${product.thumbnail}" />
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
      <button data-id="${product.id}">Add to Cart</button>
    `;
    productsContainer.appendChild(card);
  });
}

productsContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.dataset.id;
    addToCart(id);
    showCartPopup();
  }
});

function addToCart(id) {
  const product = products.find((p) => p.id == id);
  if (!cart[id]) {
    cart[id] = { ...product, quantity: 1 };
  } else {
    cart[id].quantity += 1;
  }
  saveCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  cartItemsContainer.innerHTML = "";
  let subtotal = 0;
  Object.values(cart).forEach((item) => {
    subtotal += item.price * item.quantity;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.title} - $${item.price} × 
      <input type="number" min="1" value="${item.quantity}" data-id="${item.id}" style="width: 50px;" />
      <button data-id="${item.id}" class="remove">x</button>
    `;
    cartItemsContainer.appendChild(li);
  });
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  cartSummary.innerHTML = `
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Tax (10%): $${tax.toFixed(2)}</p>
    <p><strong>Total: $${total.toFixed(2)}</strong></p>
  `;
  cartCount.textContent = Object.keys(cart).reduce((sum, id) => sum + cart[id].quantity, 0);
}

const categoryFilter = document.getElementById("category-filter");

async function fetchCategories() {
  const res = await fetch("https://dummyjson.com/products/category-list");
  const categories = await res.json();
  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat[0].toUpperCase() + cat.slice(1);
    categoryFilter.appendChild(option);
  });
}
function showCartPopup() {
    const popup = document.getElementById("cart-popup");
    popup.classList.add("show");
    setTimeout(() => {
      popup.classList.remove("show");
    }, 1500);
  }
  

cartItemsContainer.addEventListener("input", (e) => {
  if (e.target.type === "number") {
    const id = e.target.dataset.id;
    const qty = parseInt(e.target.value);
    if (qty > 0) {
      cart[id].quantity = qty;
      saveCart();
    }
  }
});

cartItemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const id = e.target.dataset.id;
    delete cart[id];
    saveCart();
  }
});

cartToggle.addEventListener("click", () => {
  cartSidebar.classList.toggle("hidden");
});

searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = products.filter((p) => p.title.toLowerCase().includes(term));
  renderProducts(filtered);
});

categoryFilter.addEventListener("change", (e) => {
    const selected = e.target.value;
    const filtered = selected === "all"
      ? products
      : products.filter(p => p.category === selected);
    renderProducts(filtered);
  });
  

fetchProducts();
fetchCategories();
updateCartUI();

