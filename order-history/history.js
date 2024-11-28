document.addEventListener('DOMContentLoaded', () => {
  const ordersContainer = document.getElementById('ordersContainer');
  login();
  updateProfileUI();
  initCartPreview();
  
  // Retrieve username from localStorage
  const username = getUsername();
  

  // Retrieve orders from localStorage or set to an empty array if none exist
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  
  // Filter orders based on the username
  const userOrders = orders.filter(order => order.username === username);
  
  if (userOrders.length === 0) {
    ordersContainer.innerHTML = '<p>No orders found.</p>';
  } else {
    // Render orders with order number, items, and total
    ordersContainer.innerHTML = userOrders.map((order, index) => `
      <div class="order mb-4 p-3 border rounded">
        <h4>Order #${index + 1}</h4>
        <ul class="list-group">
          ${order.items.map(item => `
            <li class="list-group-item">
              ${item.name} - ${item.quantity} x $${item.price.toFixed(2)}
            </li>
          `).join('')}
        </ul>
        <p><strong>Total: $${(order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)).toFixed(2)}</strong></p>
      </div>
    `).join('');
  }
});

// Function to get the username from localStorage
function getUsername() {
  return localStorage.getItem('username');
}


//login state

// Login state management
function isLoggedIn() {
  return localStorage.getItem('isLoggedIn') === 'true';
}

function setLoggedInState(state, username) {
  localStorage.setItem('isLoggedIn', state);
  if (state && username) {
      localStorage.setItem('username', username);
  } else {
      localStorage.removeItem('username');
  }
}

// Update profile image based on login state
function updateProfileUI() {
  const defaultProfilePic = "/images/defaultProfileIcon.png";
  const loggedInProfilePic = "/images/loggedInProfile.jpg";
  const profileIcon = document.querySelector('#profile img');
  if (!profileIcon) return;

  if (isLoggedIn()) {
      profileIcon.src = loggedInProfilePic;
      console.log("Hai");
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
          //redirect to home page
          window.location.href = '/index.html';
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

// Initialize cart preview hover functionality
function initCartPreview() {
  console.log("CALLED")
  const cartIcon = document.getElementById('cartIcon');
  const cartPreview = document.getElementById('cartPreview');

  if (cartIcon && cartPreview) {
      cartIcon.addEventListener('mouseenter', () => {
          console.log("Mouse entered the cart icon.");
          updateCartPreview();
          cartPreview.style.display = 'block';
      });

      cartIcon.addEventListener('mouseleave', () => {
          cartPreview.style.display = 'none';
      });
  }
}

// Update cart preview based on cart data
function updateCartPreview() {
  const cartPreview = document.getElementById('cartPreview');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  
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






