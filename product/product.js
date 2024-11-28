
// const products = window.products;
// console.log(products)


// on load, load proper item OR kick back to main page
document.addEventListener('DOMContentLoaded', () => {
  
  // console.log("Looking at product ", window.location.href)
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.has('id')) {
    // load product by ID
    const id = Number(urlParams.get('id'))-1;


    // set name
    document.getElementById('product-name').innerHTML = products[id]['name']
    // set price
    document.getElementById('product-price').innerHTML = '$' + products[id]['price']
    // set rating
    const rating = products[id]['rating']
    document.getElementById('product-rating').innerHTML = (rating/2).toFixed(1) + '  '
                                                        + '<i class="bi bi-star-fill"></i>'.repeat(Math.floor(rating/2))  // full stars 
                                                        + '<i class="bi bi-star-half"></i>'.repeat(rating % 2)            // half stars
                                                        + '<i class="bi bi-star"></i>'.repeat(Math.floor((10-rating)/2)); // no stars
    // set image (temp)
    document.getElementById('product-img').src = products[id]['images'][0];
    // document.getElementById('img-container').innerHTML = 
    


    const quantity_input = document.getElementById('product-quantity');
    // set product buy ID
    document.getElementById('add-to-cart-btn').onclick = function() {
      
      addToCart(id + 1, Number(quantity_input.value));
    };
    // document.getElementById('add-to-cart-btn').onclick = `console.log('222')`;
  }
  else {
    // no ID!
    // send back to main page
    window.location.href = "/"
  }
  updateProfileUI();
  login();
  initCartPreview()


  // if logged in, show "POST REVIEW"
  const createReview = document.getElementById('create-review');
  if (isLoggedIn()) {
    // document.getElementById('create-review').style.visibility = "visible";
    console.log('you logged in ', createReview);
    // createReview.style.display = 'block !important';
    createReview.classList.add('d-block');
    createReview.classList.remove('d-none');
  }
  else {
    // document.getElementById('create-review').style.visibility = "hidden";
    console.log('noooooo ', createReview);
    // createReview.style.display = 'none !important';
    createReview.classList.add('d-none');
    createReview.classList.remove('d-block');
  }
  
  
});



// creates random generated review
const firstnames = ["Isabella", "Jayce", "Violette", "Oscar", "Emma", "Derek", "Virginia", "Jeremias", "Carter", "Talon", "Abby", "Clayton", "Ryann", "Enoch", "Jazmine", "Dangelo", "Linda", "Ezra", "Emersyn", "Kaleb", "Treasure", "Malik", "Reina", "Khalil", "Marceline", "Lochlan", "Journi", "Erik", "Megan", "Cohen", "Priscilla", "Arjun", "Alia", "Hugh", "Brynn", "Emilio", "Oakley", "Zechariah", "Paulina", "Trent", "Daleyza", "Kaiser", "Daisy", "Marco", "Aniyah", "Warren", "Alexis", "Benicio", "Noa", "London", "Madeline", "Elisha", "Sofia", "Francis", "Rivka", "Salvatore", "Jazmin", "Aaron", "Rhea", "Kamden", "Grace", "Miguel", "Phoebe", "Idris", "Adalee", "Coen", "Frida", "Jasper", "Rachel", "Carson", "Alaya", "Samir", "Nicole", "Otis", "Dakota", "Kashton", "Kaiya", "James", "Remington", "Aron", "Juliette", "Maverick", "Selah", "Uriel"];
const lastnames = ["Freeman", "Madden", "Carroll", "Johnson", "Douglas", "Hoover", "Woodward", "Gibbs", "Gaines", "Ball", "Fields", "Conway", "Dorsey", "Kent", "Peralta", "Knapp", "Baker", "Shaw", "Lawrence", "O’Neal", "Thornton", "Greer", "Hanson", "Sierra", "Walter", "Humphrey", "Pacheco", "Velez", "Wang", "Trevino", "Ali", "Briggs", "Macdonald", "Craig", "Contreras", "Fuller", "Lynn", "Herman", "Sheppard", "Cabrera", "Rush", "McDonald", "Klein", "Douglas", "Sutton", "Curtis", "Orr", "Cannon", "McConnell", "Patel", "Enriquez", "Taylor", "Hammond", "Chung", "Galindo", "Atkinson", "Morales", "Bradford", "Rowe", "Ramirez", "Ferguson", "Lawson", "Noble", "Hurst", "Avalos", "Blackburn", "Castro", "Pena", "Wood", "Gregory", "Tapia", "Harvey", "Chase", "Vega", "Doyle", "Novak", "Garcia", "Barker", "Prince", "Fox", "Carter", "Rodgers", "Hines", "Truong"];
const reviews = ["", "Nice", "my favourite", "this is pretty cool", "Love this design!", "So fun and unique.", "Matches my style perfectly.", "Great quality for the price.", "These are super cute!", "My favorite Jibbitz so far.", "Adds so much personality to my Crocs.", "I bought this for a friend, and they loved it!", "Stays on securely, even with daily wear.", "Perfect for customizing my look.", "These make my Crocs stand out.", "I get so many compliments on this!", "Fun to collect and swap.", "My kids adore these!", "Easy to attach and remove.", "Brightens up my shoes instantly.", "This is my go-to design.", "I put these on all my Crocs.", "Such a clever and cool idea.", "Highly recommend to any Crocs lover!", "Got this as a gift, and now I want more!", "🌟 Simple but super stylish.", "It’s giving “main character energy” 🤩.", "I put this on my work Crocs, and my coworkers noticed!", "A bit pricey for what it is, but I love it anyway.", "My dog even tried to chew it, that’s how good it is 😂.", "🌼 The colors are brighter than I expected—pleasant surprise!", "Bought this to match my BFF’s Crocs 💕.", "This one’s a conversation starter for sure!", "Really sturdy, even after hiking in my Crocs 🥾.", "It’s cute, but I wish it had more detail.", "fits perfectly. will def buy more", "nice item!! would get again", "really fun to collect, i’m obsessed rn", "def recommend, super nice quality."];
const mixedUsernames = [
  "SunnyStride", "breeze_trail99", "ComfySteps_21", "open_toes42", "River_Walker", 
  "cloudyclogs", "snug.soles78", "ChillTread", "daylightwanderer", "Slip.On.88", 
  "trailbuddy88", "urban_steps_12", "Pebble_Trek", "LazyLoops_", "Warm.Pace3", 
  "SandalSeeker", "StepEasy_", "beach.bound", "ComfortCrew09", "mellow_steps19", 
  "CozyGrip", "croczoned", "jib_walk", "AlexWalker22", "sole.search9", 
  "clogmaster", "lil_footie", "lightwalk", "muddy-steps", "relaxed_toes", 
  "looped_up24", "ElliotToes5", "wander.spirit", "soleseeker17", "peaceful.tread", 
  "aqua.stroll99", "SimpleStride4", "MayaTrekker", "cool.toes44", "clogLoverX3", 
  "outdoorToes", "step.along22", "LunaJib", "CozyJules_12", "heels_Clicks01", 
  "crocs-Fan88", "coastal_steps_5", "slick_March", "soft.clogz7", "toes_Runner",
  "MilesAhead101", "Wanderlust44", "CrocStar45", "TrailJunkie99", "JibberJack", 
  "comfy_stepper", "SandyWalks", "CloudSoles_33", "LilaLoafers", "StepMaster89",
  "beach.breeze24", "QuickStride7", "snugger94", "FlipFlopFan", "LazySoles",
  "ClogRider99", "BennySteps", "GoldenTreads", "Trekkie82", "Croczilla42",
  "stroll_finder", "PebblePath19", "MikeSlippers", "AquaJules57", "River_Trek99",
  "FastFeet12", "SoftSoles", "heel_clicker", "RelaxedRobin7", "chill_pacer",
  "TylerTreads", "jib_walk79", "LoopedTrail23", "SoleStride_", "CrocsGuy_101",
  "walks_in_sand", "CozyTrail33", "FlexySoles", "OutdoorOllie22", "wander_88",
  "Stroll_Freak", "SimpleClogger", "ZaneLoops", "TrailGuyX", "Soft_Steps",
  "crocs.hiker9", "PeaceWalker", "MellowMiles44", "clog_trotter_12", "EllaWanderer",
  "SunnyToes12", "wanderer_72", "Sunny_Vibes", "Connor_Pagtakhan"
];

function createReviewDOM(rating=null, comments=null) {
  var randomName = "";
  var randomReview = "";

  if (rating == null && comments == null) {
    // randomName = `${firstnames[Math.floor(Math.random() * firstnames.length)]} ${lastnames[Math.floor(Math.random() * lastnames.length)]}`;
    randomName = mixedUsernames[Math.floor(Math.random() * mixedUsernames.length)];
    randomReview = reviews[Math.floor(Math.random() * reviews.length)];
    // const rating = Math.floor(Math.random() * 10)
    // rating 8, 9, 10, 11
    var rating = 8 + Math.floor(Math.random() * 4);
    if (randomReview == "") {rating = 10}  // edge case for blank random review
  }
  else {
    randomName = localStorage.getItem('username');
    randomReview = comments;
  }

  // if > 10.... 2/5 chance person did not review
  var randomRating = "";
  if (rating <= 10) {
    randomRating = '<i class="bi bi-star-fill"></i>'.repeat(Math.floor(rating/2))  // full stars 
                  + '<i class="bi bi-star-half"></i>'.repeat(rating % 2)            // half stars
                  + '<i class="bi bi-star"></i>'.repeat(Math.floor((10-rating)/2)); // no stars
  }

  const reviewCard = 
  `<div class="card m-2 p-1 d-flex flex-row">
      <div class="profile-icon m-2">
          <img src="/images/defaultProfileIcon.png" alt="Profile" class="rounded-circle">
      </div>
      <div class="m-2">
          <a style="font-weight: bold;">${ randomName }</a>
          <br>
          <a id="product-rating">
              ${ randomRating }
          </a>
          <p>${ randomReview }</p>
      </div>
  </div>`

  const template = document.createElement('template');
  template.innerHTML = reviewCard;
  
  return template.content.firstChild;
}


// generate 10 reviews
const reviewsList = document.getElementById('reviews-list');
// reviewsList.appendChild(createReviewDOM());
// reviewsList.appendChild(createReviewDOM());
// reviewsList.appendChild(createReviewDOM());
// reviewsList.appendChild(createReviewDOM());
// reviewsList.appendChild(createReviewDOM());
// reviewsList.appendChild(createReviewDOM());
// reviewsList.appendChild(createReviewDOM());
// reviewsList.appendChild(createReviewDOM(10, "BEST EVER"));

for (var i = 0; i < (4 + Math.random() * 8); i++) {
  reviewsList.insertBefore(createReviewDOM(), reviewsList.firstChild);
}




//login state

// Login state management
function isLoggedIn() {
  return localStorage.getItem('isLoggedIn') === 'true';
}

function getUsername() {
  return localStorage.getItem('username');
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

