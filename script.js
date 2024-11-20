const products = [
  {
      id: 1,
      name: "Rainbow Jibbitz",
      price: 4.99,
      images: ["/Jibbitz_Rainbow/rainbowJibbit.png", "/Jibbitz_Rainbow/rainbowOnCroc.png"],
      colour: "Multicoloured"
  },
  {
      id: 2,
      name: "Star Jibbitz",
      price: 3.99,
      images: ["/Jibbitz_Star/starJibbit.png", "/Jibbitz_Star/starOnCroc.png"],
      colour: "Yellow"
  },
  {
      id: 3,
      name: "Heart Jibbitz",
      price: 4.49,
      images: ["/Jibbitz_Heart/heartJibbit.png", "/Jibbitz_Heart/heartOnCroc.png"],
      colour: "Red"
  },
  {
      id: 4,
      name: "Flower Jibbitz",
      price: 3.99,
      images: ["/Jibbitz_Flower/flowerJibbit.png", "/Jibbitz_Flower/flowerOnCroc.png"],
      colour: "Pink"
  }
];

//added in background colour for product cards-Shana
function generateProductGrid() {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;

  productGrid.innerHTML = products.map(product => `
      <div class="col-md-3" data-colour="${product.colour}">
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
  //added this
  attachFilterListeners();
});

//TRYING TO MAKE THE FILTERS CHANGE THE PRODUCTS DISPLAYING-SHANA
function handleFilters(){
    //get all of the colours that are checked off
    const selectedColours = Array.from(document.querySelectorAll('#colourForm .form-check-input:checked'))
        .map(checkbox => checkbox.nextElementSibling.textContent.trim().toLowerCase());
    //print to console (FOR TESTING: REMOVE LATERE)
    console.log(selectedColours);


    //getting all the product cards
    const productCards = document.querySelectorAll('.col-md-3');

    //for all product cards...
    productCards.forEach(card =>{
        //get the colour of the card
        const productColour = card.getAttribute('data-colour').toLowerCase();
        console.log("product-color",productColour);
        //show the card if no filters are selected or if the product matches one of the selected colours
        if (selectedColours.length === 0 || selectedColours.includes(productColour)){
            card.style.display = 'block';
        }
        else{
            card.style.display = 'none';
        }
    });
}

function attachFilterListeners() {
    const filterCheckboxes = document.querySelectorAll('#colourForm .form-check-input');

    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleFilters);
    });
}