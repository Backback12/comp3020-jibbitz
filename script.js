const products = [
  {
      id: 1,
      name: "Rainbow Jibbitz",
      price: 4.99,
      images: ["/Jibbitz_Rainbow/rainbowJibbit.png", "/Jibbitz_Rainbow/rainbowOnCroc.png"]
  },
  {
      id: 2,
      name: "Star Jibbitz",
      price: 3.99,
      images: ["/Jibbitz_Star/starJibbit.png", "/Jibbitz_Star/starOnCroc.png"]
  },
  {
      id: 3,
      name: "Heart Jibbitz",
      price: 4.49,
      images: ["/Jibbitz_Heart/heartJibbit.png", "/Jibbitz_Heart/heartOnCroc.png"]
  },
  {
      id: 4,
      name: "Flower Jibbitz",
      price: 3.99,
      images: ["/Jibbitz_Flower/flowerJibbit.png", "/Jibbitz_Flower/flowerOnCroc.png"]
  }
];

//added in background colour for product cards-Shana
function generateProductGrid() {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;

  productGrid.innerHTML = products.map(product => `
      <div class="col-md-3">
          <div class="product-card" style="background-color: #f8f9fa;">
              <div id="carousel-${product.id}" class="carousel slide">
                  <div class="carousel-inner">
                      ${product.images.map((img, index) => `
                          <div class="carousel-item ${index === 0 ? 'active' : ''}">
                              <img src="${img}" class="d-block w-100 product-image" alt="${product.name}">
                          </div>
                      `).join('')}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${product.id}" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carousel-${product.id}" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
              </div>
              <div class="p-3">
                  <h5>${product.name}</h5>
                  <p class="mb-2">$${product.price}</p>
                  <button class="btn btn-primary buy-button" onclick="addToCart(${product.id})">
                      Quick Buy
                  </button>
              </div>
          </div>
      </div>
  `).join('');
}

function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  const productCards = document.querySelectorAll('.col-md-3');

  productCards.forEach(card => {
      const productName = card.querySelector('h5').textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = totalItems;
  }
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
      existingItem.quantity += 1;
  } else {
      cart.push({
          ...product,
          quantity: 1
      });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  
  showNotification(`${product.name} added to cart`);
}

function showNotification(message) {
  const toast = `
      <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
          <div class="toast show" role="alert">
              <div class="toast-header">
                  <strong class="me-auto">Cart Updated</strong>
                  <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
              </div>
              <div class="toast-body">
                  ${message}
              </div>
          </div>
      </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', toast);
  
  setTimeout(() => {
      const toastElement = document.querySelector('.toast');
      if (toastElement) toastElement.remove();
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  generateProductGrid();
  updateCartCount();

  const searchInput = document.querySelector('input[type="text"]');
  if (searchInput) {
      searchInput.addEventListener('input', handleSearch);
  }
});