const products = [
    {
        id: 1,
        name: "Rainbow Jibbitz",
        price: 4.99,
        images: ["./images/rainbowJibbit.png", "./images/rainbowOnCroc.png"],
        colour: "Multicoloured",
        rating: 9,
        orders: 512,
        reviews: [{name: "GoldenTreads", comment: "This one’s a conversation starter for sure!", rating: 8}, {name: "clog_trotter_12", comment: "This one’s a conversation starter for sure!", rating: 9}, {name: "peaceful.tread", comment: "Nice", rating: 9}, {name: "LilaLoafers", comment: "fits perfectly. will def buy more", rating: 8}, {name: "wanderer_72", comment: "These make my Crocs stand out.", rating: 10}, {name: "lightwalk", comment: "my favourite", rating: 9}]
    },
    {
        id: 2,
        name: "Star Jibbitz",
        price: 3.99,
        images: ["./images/starJibbit.png", "./images/starOnCroc.png"],
        colour: "Yellow",
        rating: 8,
        orders: 383,
        reviews: [{name: "crocs-Fan88", comment: "nice item!! would get again", rating: 8}, {name: "sole.search9", comment: "Brightens up my shoes instantly.", rating: 10}, {name: "wander_88", comment: "A bit pricey for what it is, but I love it anyway.", rating: 10}, {name: "MayaTrekker", comment: "Stays on securely, even with daily wear.", rating: 10}]
    },
    {
        id: 3,
        name: "Heart Jibbitz",
        price: 4.49,
        images: ["./images/heartJibbit.png", "./images/heartOnCroc.png"],
        colour: "Red",
        rating: 10,
        orders: 925,
        reviews: [{name: "JibberJack", comment: "fits perfectly. will def buy more", rating: 9}, {name: "CozyTrail33", comment: "Nice", rating: 10}, {name: "crocs.hiker9", comment: "this is pretty cool", rating: 10}, {name: "ComfortCrew09", comment: "It’s giving “main character energy” 🤩.", rating: 8}, {name: "CrocStar45", comment: "These are super cute!", rating: 8}]
    },
    {
        id: 4,
        name: "Flower Jibbitz",
        price: 3.99,
        images: ["./images/flowerJibbit.png", "./images/flowerOnCroc.png"],
        colour: "Pink",
        rating: 9,
        orders: 633,
        reviews: [{name: "chill_pacer", comment: "My kids adore these!", rating: 10}, {name: "looped_up24", comment: "🌼 The colors are brighter than I expected—pleasant surprise!", rating: 10}, {name: "PebblePath19", comment: "Such a clever and cool idea.", rating: 8}, {name: "LazySoles", comment: "My favorite Jibbitz so far.", rating: 10}, {name: "clogmaster", comment: "A bit pricey for what it is, but I love it anyway.", rating: 8}, {name: "Wanderlust44", comment: "nice item!! would get again", rating: 8}]
    },
    {
        id: 5,
        name: "Soccer Ball Jibbitz",
        price: 5.49,
        images: ["./images/soccerJibbit.png", "./images/soccerOnCroc.png"],
        colour: "Multicoloured",
        rating: 4,
        orders: 85,
        reviews: [{name: "RelaxedRobin7", comment: "really fun to collect, i’m obsessed rn", rating: 9}, {name: "crocs.hiker9", comment: "I put these on all my Crocs.", rating: 8}, {name: "LunaJib", comment: "My favorite Jibbitz so far.", rating: 8}, {name: "SimpleClogger", comment: "Stays on securely, even with daily wear.", rating: 8}]
    },
    {
        id: 6,
        name: "Stitch Jibbitz",
        price: 5.99,
        images: ["./images/stitchJibbit.png", "./images/stitchOnCroc.png"],
        colour: "Blue",
        rating: 7,
        orders: 104,
        reviews: [{name: "wander.spirit", comment: "It’s giving “main character energy” 🤩.", rating: 8}, {name: "ZaneLoops", comment: "My favorite Jibbitz so far.", rating: 9}, {name: "QuickStride7", comment: "this is pretty cool", rating: 9}, {name: "clogLoverX3", comment: "My favorite Jibbitz so far.", rating: 9}, {name: "soft.clogz7", comment: "A bit pricey for what it is, but I love it anyway.", rating: 10}]
    },
    {
        id: 7,
        name: "Charmander Jibbitz",
        price: 5.99,
        images: ["./images/charmanderJibbit.png", "./images/charmanderOnCroc.png"],
        colour: "Orange",
        rating: 10,
        orders: 302,
        reviews: [{name: "Connor_Pagtakhan", comment: "My kids adore these!", rating: 10}, {name: "LazySoles", comment: "My kids adore these!", rating: 8}, {name: "crocs-Fan88", comment: "This one’s a conversation starter for sure!", rating: 9}, {name: "MayaTrekker", comment: "These are super cute!", rating: 9}, {name: "aqua.stroll99", comment: "nice item!! would get again", rating: 10}, {name: "SoleStride_", comment: "Really sturdy, even after hiking in my Crocs 🥾.", rating: 8}, {name: "wander_88", comment: "Matches my style perfectly.", rating: 8}, {name: "beach.breeze24", comment: "", rating: 10}, {name: "urban_steps_12", comment: "Great quality for the price.", rating: 9}, {name: "MellowMiles44", comment: "This one’s a conversation starter for sure!", rating: 8}, {name: "LilaLoafers", comment: "my favourite", rating: 8}]
    },
    {
        id: 8,
        name: "Alien Jibbitz",
        price: 3.49,
        images: ["./images/alienJibbit.png", "./images/alienOnCroc.png"],
        colour: "Green",
        rating: 8,
        orders: 221,
        reviews: [{name: "step.along22", comment: "Brightens up my shoes instantly.", rating: 8}, {name: "Warm.Pace3", comment: "I get so many compliments on this!", rating: 8}, {name: "beach.bound", comment: "Nice", rating: 8}, {name: "clog_trotter_12", comment: "Nice", rating: 9}, {name: "ZaneLoops", comment: "Bought this to match my BFF’s Crocs 💕.", rating: 10}, {name: "Slip.On.88", comment: "Love this design!", rating: 8}, {name: "River_Trek99", comment: "It’s cute, but I wish it had more detail.", rating: 10}, {name: "StepMaster89", comment: "My kids adore these!", rating: 9}, {name: "Croczilla42", comment: "Bought this to match my BFF’s Crocs 💕.", rating: 10}, {name: "CrocsGuy_101", comment: "I get so many compliments on this!", rating: 9}]
    },
    {
        id: 9,
        name: "Dino Jibbitz",
        price: 5.99,
        images: ["./images/dinoJibbit.png", "./images/dinoOnCroc.png"],
        colour: "Purple",
        rating: 9,
        orders: 245,
        reviews: [{name: "clogmaster", comment: "Great quality for the price.", rating: 9}, {name: "SandalSeeker", comment: "My favorite Jibbitz so far.", rating: 8}, {name: "open_toes42", comment: "fits perfectly. will def buy more", rating: 9}, {name: "heels_Clicks01", comment: "Highly recommend to any Crocs lover!", rating: 10}, {name: "heels_Clicks01", comment: "Great quality for the price.", rating: 10}, {name: "LoopedTrail23", comment: "Got this as a gift, and now I want more!", rating: 10}, {name: "ElliotToes5", comment: "Adds so much personality to my Crocs.", rating: 10}, {name: "StepMaster89", comment: "my favourite", rating: 9}, {name: "breeze_trail99", comment: "My dog even tried to chew it, that’s how good it is 😂.", rating: 9}]
    },
    {
        id: 10,
        name: "Spongebob Jibbitz",
        price: 4.99,
        images: ["./images/spongebobJibbit.png", "./images/spongebobOnCroc.png"],
        colour: "Yellow",
        rating: 8,
        orders: 297,
        reviews: [{name: "soleseeker17", comment: "Matches my style perfectly.", rating: 10}, {name: "breeze_trail99", comment: "I put this on my work Crocs, and my coworkers noticed!", rating: 9}, {name: "croczoned", comment: "Stays on securely, even with daily wear.", rating: 10}, {name: "CozyTrail33", comment: "I bought this for a friend, and they loved it!", rating: 10}, {name: "beach.breeze24", comment: "Bought this to match my BFF’s Crocs 💕.", rating: 8}, {name: "AlexWalker22", comment: "my favourite", rating: 8}, {name: "step.along22", comment: "this is pretty cool", rating: 8}, {name: "JibberJack", comment: "fits perfectly. will def buy more", rating: 9}, {name: "EllaWanderer", comment: "So fun and unique.", rating: 8}]
    },
    {
        id: 11,
        name: "Spiderman Jibbitz",
        price: 3.99,
        images: ["./images/spidermanJibbit.png", "./images/spidermanOnCroc.png"],
        colour: "Red",
        rating: 9,
        orders: 540,
        reviews: [{name: "MayaTrekker", comment: "This one’s a conversation starter for sure!", rating: 10}, {name: "croczoned", comment: "this is pretty cool", rating: 9}, {name: "BennySteps", comment: "Highly recommend to any Crocs lover!", rating: 8}, {name: "TylerTreads", comment: "this is pretty cool", rating: 10}, {name: "beach.breeze24", comment: "Great quality for the price.", rating: 9}, {name: "Soft_Steps", comment: "These are super cute!", rating: 10}, {name: "ComfySteps_21", comment: "nice item!! would get again", rating: 8}, {name: "Stroll_Freak", comment: "", rating: 9}, {name: "SoftSoles", comment: "🌼 The colors are brighter than I expected—pleasant surprise!", rating: 8}]
    },
    {
        id: 12,
        name: "Shark Jibbitz",
        price: 3.49,
        images: ["./images/sharkJibbit.png", "./images/sharkOnCroc.png"],
        colour: "Blue",
        rating: 6,
        orders: 171,
        reviews: [{name: "RelaxedRobin7", comment: "Got this as a gift, and now I want more!", rating: 9}, {name: "AlexWalker22", comment: "Matches my style perfectly.", rating: 8}, {name: "urban_steps_12", comment: "Got this as a gift, and now I want more!", rating: 9}, {name: "beach.bound", comment: "I put these on all my Crocs.", rating: 8}, {name: "SunnyStride", comment: "Brightens up my shoes instantly.", rating: 9}, {name: "ChillTread", comment: "These make my Crocs stand out.", rating: 10}]
    },
    {
        id: 13,
        name: "Trex Jibbitz",
        price: 3.49,
        images: ["./images/trexJibbit.png", "./images/trexOnCroc.png"],
        colour: "Green",
        rating: 5,
        orders: 140,
        reviews: [{name: "relaxed_toes", comment: "Adds so much personality to my Crocs.", rating: 10}, {name: "TrailJunkie99", comment: "Great quality for the price.", rating: 8}, {name: "EllaWanderer", comment: "🌼 The colors are brighter than I expected—pleasant surprise!", rating: 10}, {name: "soft.clogz7", comment: "So fun and unique.", rating: 9}, {name: "MilesAhead101", comment: "Nice", rating: 9}, {name: "chill_pacer", comment: "my favourite", rating: 9}, {name: "Slip.On.88", comment: "I bought this for a friend, and they loved it!", rating: 10}]
    },
    {
        id: 14,
        name: "Seahorse Jibbitz",
        price: 4.49,
        images: ["./images/seahorseJibbit.png", "./images/seahorseOnCroc.png"],
        colour: "Pink",
        rating: 4,
        orders: 73,
        reviews: [{name: "looped_up24", comment: "🌟 Simple but super stylish.", rating: 10}, {name: "CrocsGuy_101", comment: "nice item!! would get again", rating: 10}, {name: "Pebble_Trek", comment: "My kids adore these!", rating: 8}, {name: "AlexWalker22", comment: "This one’s a conversation starter for sure!", rating: 9}, {name: "chill_pacer", comment: "Matches my style perfectly.", rating: 8}, {name: "breeze_trail99", comment: "my favourite", rating: 8}, {name: "SimpleClogger", comment: "fits perfectly. will def buy more", rating: 8}]
    },
    {
        id: 15,
        name: "Rainbow Flower Jibbitz",
        price: 5.49,
        images: ["./images/rainbowFlowerJibbit.png", "./images/rainbowFlowerOnCroc.png"],
        colour: "Multicoloured",
        rating: 6,
        orders: 132,
        reviews: [{name: "walks_in_sand", comment: "Adds so much personality to my Crocs.", rating: 9}, {name: "jib_walk", comment: "really fun to collect, i’m obsessed rn", rating: 8}, {name: "LazyLoops_", comment: "Brightens up my shoes instantly.", rating: 10}, {name: "clogLoverX3", comment: "It’s giving “main character energy” 🤩.", rating: 9}, {name: "SimpleClogger", comment: "Nice", rating: 8}]
    },
    {
        id: 16,
        name: "Fireman Jibbitz",
        price: 4.29,
        images: ["./images/firemanJibbit.png", "./images/firemanOnCroc.png"],
        colour: "Red",
        rating: 8,
        orders: 255,
        reviews: [{name: "heel_clicker", comment: "Adds so much personality to my Crocs.", rating: 9}, {name: "beach.bound", comment: "So fun and unique.", rating: 10}, {name: "toes_Runner", comment: "Love this design!", rating: 8}, {name: "breeze_trail99", comment: "Stays on securely, even with daily wear.", rating: 10}]
    }
  ];
window.products = products;

//added in background colour for product cards-Shana
function generateProductGrid() {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;

  productGrid.innerHTML = products.map(product => `
      <div class="col-md-3 clickable" onclick="linkToProduct(event, ${ product.id })" data-colour="${product.colour}">
          <div class="product-card" style="background-color: #f8f9fa;">
              <div id="carousel-${product.id}" class="carousel slide">
                  <div class="carousel-inner">
                      ${product.images.map((img, index) => `
                          <div class="carousel-item ${index === 0 ? 'active' : ''}">
                              <img src="${'./' + img}" class="d-block w-100 product-image" alt="${product.name}">
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

//search functionality
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const suggestionsBox = document.getElementById("suggestionsBox");
    const searchIcon = document.getElementById("searchIcon");
    updateProfileUI();
    generateProductGrid();
    updateCartCount();
    //added this
    attachFilterListeners();
    login();


    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        suggestionsBox.innerHTML = ''; 

        if (query) {
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(query)
            );

            if (filteredProducts.length) {
                suggestionsBox.style.display = 'block'; 
                const ul = document.createElement('ul');
                filteredProducts.forEach(product => {
                    const li = document.createElement('li');
                    li.innerHTML = `<img src="${product.images[0]}" alt="${product.name}" style="width: 70px; height: 70px;"> ${product.name}`;
                    li.addEventListener("click", () => {
                        window.location.href = `./product/index.html?id=${product.id}`; 
                    });
                    ul.appendChild(li);
                });
                suggestionsBox.appendChild(ul);
            } else {
                suggestionsBox.style.display = 'none'; 
            }
        } else {
            suggestionsBox.style.display = 'none'; 
        }
    });


    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            displaySearchResults(searchInput.value);
            suggestionsBox.style.display = 'none';
        }
    });

    searchIcon.addEventListener("click", () => {
        displaySearchResults(searchInput.value);
        suggestionsBox.style.display = 'none'; 
    });

    function displaySearchResults(query) {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );

        const productGrid = document.getElementById("productGrid");
        productGrid.innerHTML = ''; 

        filteredProducts.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("col-md-4", "mb-4");
            div.innerHTML = `
                <div class="card">
                    <img src="${product.images[0]}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <a href="./product/index.html?id=${product.id}" class="btn btn-primary">View Product</a>
                    </div>
                </div>
            `;
            productGrid.appendChild(div);
        });
    }
});

// click product link and open product page
function linkToProduct(event, id) {
  // ignores button events (carousel and quick add buttons)
  if (event.target.tagName !== "BUTTON" && event.target.tagName !== "SPAN") {
    // console.log("CLICKED ", event.target.tagName);

    window.location.href = `./product/index.html?id=${ id }`
  }
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

function addToCart(productId, quantity=1) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
      existingItem.quantity += quantity;
  } else {
      cart.push({
          ...product,
          quantity: quantity
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




function handleFilters(minPrice, maxPrice) {
    const selectedColours = Array.from(document.querySelectorAll('#colourForm .form-check-input:checked'))
        .map(checkbox => checkbox.nextElementSibling.textContent.trim().toLowerCase());
    console.log('Selected Colours:', selectedColours);
    const productCards = document.querySelectorAll('.col-md-3');
    productCards.forEach(card => {
        const productColour = card.getAttribute('data-colour').toLowerCase();
        const productId = parseInt(card.getAttribute('onclick').match(/\d+/)[0], 10);
        const product = products.find(p => p.id === productId);
        const matchesColour = selectedColours.length === 0 || selectedColours.includes(productColour);
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        card.style.display = matchesColour && matchesPrice ? 'block' : 'none';
    });
}

function initializePriceSlider() {
    const priceSlider = document.getElementById('priceSlider');
    const priceRange = document.getElementById('priceRange');

    noUiSlider.create(priceSlider, {
        start: [0, 10],        
        connect: true,         
        range: {              
            min: 0,
            max: 10
        },
        step: 0.5,             
    });

    priceSlider.noUiSlider.on('update', (values) => {
        const [minPrice, maxPrice] = values.map(value => Math.round(value));
        priceRange.textContent = `${minPrice} - ${maxPrice}`;  
        handleFilters(minPrice, maxPrice);  
    });
}

function attachFilterListeners() {
    const filterCheckboxes = document.querySelectorAll('#colourForm .form-check-input');

    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const minPrice = parseFloat(document.getElementById('priceSlider').noUiSlider.get()[0]);
            const maxPrice = parseFloat(document.getElementById('priceSlider').noUiSlider.get()[1]);
            handleFilters(minPrice, maxPrice);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializePriceSlider();  // Initialize the price slider
    attachFilterListeners();  // Attach the change event listeners to the checkboxes
});


// Login state management
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

//IMPORTANT NOTE: THIS IS HOW WE KEEP TRACK OF IF WE ARE LOGGED IN OR NOT
function setLoggedInState(state, username) {
    localStorage.setItem('isLoggedIn', state);
    if (state && username) {
        localStorage.setItem('username', username);
    } else {
        localStorage.removeItem('username');
    }
}

function getUsername() {
    return localStorage.getItem('username');
}

// Update profile image based on login state
function updateProfileUI() {
    const defaultProfilePic = "./images/defaultProfileIcon.png";
    const loggedInProfilePic = "./images/loggedInProfile.jpg";
    const profileIcon = document.querySelector('#profile img');
    if (!profileIcon) return;

    if (isLoggedIn()) {
        profileIcon.src = loggedInProfilePic;
    } else {
        profileIcon.src = defaultProfilePic;
    }
}

// Login Popup
function loginPopup() {
    if (!isLoggedIn()) {
        const loginFormHTML = `
            <div class="modal fade" id="loginModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form id="loginForm">
                                <div class="mb-3">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" id="username" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" id="password" class="form-control">
                                </div>
                                <button type="submit" class="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', loginFormHTML);

        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();

        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                setLoggedInState(true, username);
                loginModal.hide();
                loginModal._element.addEventListener('hidden.bs.modal', () => {
                    loginModal._element.remove();
                });
                updateProfileUI();
            } else {
                alert('Please enter valid credentials.');
            }
        });
    } else {
        const username = getUsername();
        const logoutHTML = `
            <div class="modal fade" id="logoutModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Profile Information</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body d-flex flex-column justify-content-center align-items-center">
                            <h2><strong>${username}</strong></h2>
                            <button type="submit" class="btn btn-primary" id="orderHistory">Order History</button>
                            <button class="btn btn-danger" id="confirmLogout">Logout</button>
                        </div>
                    </div>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', logoutHTML);

        const logoutModal = new bootstrap.Modal(document.getElementById('logoutModal'));
        logoutModal.show();

        document.getElementById('confirmLogout').addEventListener('click', () => {
            setLoggedInState(false);
            logoutModal.hide();
            logoutModal._element.addEventListener('hidden.bs.modal', () => {
                logoutModal._element.remove();
            });
            updateProfileUI();
        });

        document.getElementById('orderHistory').addEventListener('click', () => {
            logoutModal.hide();
            window.location.href = '/order-history/index.html';
        });
    }
}



//profile JS
function login(){
    const profile = document.getElementById('profile');
    if (profile) {
        profile.addEventListener('click', loginPopup);
    }
}

// Update cart preview based on cart data
function updateCartPreview() {
    const cartPreview = document.getElementById('cartPreview');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartSubtotal = document.getElementById('cartSubtotal');
    
    // Clear the cart items list
    cartItemsList.innerHTML = '';

    // Initialize subtotal
    let subtotal = 0;

    // Loop through the cart and add items to the preview
    cart.forEach(item => {
        const itemSubtotal = item.quantity * item.price;
        subtotal += itemSubtotal;

        // Create the list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${item.images[0]}" alt="${item.name}" />
            <span>${item.name}</span>
            <span>Qty: ${item.quantity}</span>
            <span>$${itemSubtotal.toFixed(2)}</span>
        `;
        cartItemsList.appendChild(listItem);
    });

    // Display the subtotal
    cartSubtotal.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
}

// Show the cart preview when hovering over the cart icon
const cartIcon = document.getElementById('cartIcon');
const cartPreview = document.getElementById('cartPreview');

cartIcon.addEventListener('mouseenter', () => {
    updateCartPreview(); // Update the cart preview
    cartPreview.style.display = 'block';
});

// Hide the cart preview when the mouse leaves the cart icon
cartIcon.addEventListener('mouseleave', () => {
    cartPreview.style.display = 'none';
});

// View Cart button to redirect to the cart page
document.getElementById('viewCartButton').addEventListener('click', () => {
    window.location.href = '/cart'; // Redirect to the cart page
});
