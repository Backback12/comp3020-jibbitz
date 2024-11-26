
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


    // set product buy ID
    document.getElementById('add-to-cart-btn').onclick = function() {addToCart(id + 1)};
    // document.getElementById('add-to-cart-btn').onclick = `console.log('222')`;
  }
  else {
    // no ID!
    // send back to main page
    window.location.href = "/"
  }
});



// creates random generated review
const firstnames = ["Isabella", "Jayce", "Violette", "Oscar", "Emma", "Derek", "Virginia", "Jeremias", "Carter", "Talon", "Abby", "Clayton", "Ryann", "Enoch", "Jazmine", "Dangelo", "Linda", "Ezra", "Emersyn", "Kaleb", "Treasure", "Malik", "Reina", "Khalil", "Marceline", "Lochlan", "Journi", "Erik", "Megan", "Cohen", "Priscilla", "Arjun", "Alia", "Hugh", "Brynn", "Emilio", "Oakley", "Zechariah", "Paulina", "Trent", "Daleyza", "Kaiser", "Daisy", "Marco", "Aniyah", "Warren", "Alexis", "Benicio", "Noa", "London", "Madeline", "Elisha", "Sofia", "Francis", "Rivka", "Salvatore", "Jazmin", "Aaron", "Rhea", "Kamden", "Grace", "Miguel", "Phoebe", "Idris", "Adalee", "Coen", "Frida", "Jasper", "Rachel", "Carson", "Alaya", "Samir", "Nicole", "Otis", "Dakota", "Kashton", "Kaiya", "James", "Remington", "Aron", "Juliette", "Maverick", "Selah", "Uriel"];
const lastnames = ["Freeman", "Madden", "Carroll", "Johnson", "Douglas", "Hoover", "Woodward", "Gibbs", "Gaines", "Ball", "Fields", "Conway", "Dorsey", "Kent", "Peralta", "Knapp", "Baker", "Shaw", "Lawrence", "O’Neal", "Thornton", "Greer", "Hanson", "Sierra", "Walter", "Humphrey", "Pacheco", "Velez", "Wang", "Trevino", "Ali", "Briggs", "Macdonald", "Craig", "Contreras", "Fuller", "Lynn", "Herman", "Sheppard", "Cabrera", "Rush", "McDonald", "Klein", "Douglas", "Sutton", "Curtis", "Orr", "Cannon", "McConnell", "Patel", "Enriquez", "Taylor", "Hammond", "Chung", "Galindo", "Atkinson", "Morales", "Bradford", "Rowe", "Ramirez", "Ferguson", "Lawson", "Noble", "Hurst", "Avalos", "Blackburn", "Castro", "Pena", "Wood", "Gregory", "Tapia", "Harvey", "Chase", "Vega", "Doyle", "Novak", "Garcia", "Barker", "Prince", "Fox", "Carter", "Rodgers", "Hines", "Truong"];
const reviews = ["", "Nice", "my favourite", "this is pretty cool", "Love this design!", "So fun and unique.", "Matches my style perfectly.", "Great quality for the price.", "These are super cute!", "My favorite Jibbitz so far.", "Adds so much personality to my Crocs.", "I bought this for a friend, and they loved it!", "Stays on securely, even with daily wear.", "Perfect for customizing my look.", "These make my Crocs stand out.", "I get so many compliments on this!", "Fun to collect and swap.", "My kids adore these!", "Easy to attach and remove.", "Brightens up my shoes instantly.", "This is my go-to design.", "I put these on all my Crocs.", "Such a clever and cool idea.", "Highly recommend to any Crocs lover!", "Got this as a gift, and now I want more!", "🌟 Simple but super stylish.", "It’s giving “main character energy” 🤩.", "I put this on my work Crocs, and my coworkers noticed!", "A bit pricey for what it is, but I love it anyway.", "My dog even tried to chew it, that’s how good it is 😂.", "🌼 The colors are brighter than I expected—pleasant surprise!", "Bought this to match my BFF’s Crocs 💕.", "This one’s a conversation starter for sure!", "Really sturdy, even after hiking in my Crocs 🥾.", "It’s cute, but I wish it had more detail."];

function createReviewDOM() {
  const randomName = `${firstnames[Math.floor(Math.random() * firstnames.length)]} ${lastnames[Math.floor(Math.random() * lastnames.length)]}`;
  const randomReview = reviews[Math.floor(Math.random() * reviews.length)];
  // const rating = Math.floor(Math.random() * 10)
  // rating 8, 9, 10, 11
  const rating = 8 + Math.floor(Math.random() * 4);
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
reviewsList.appendChild(createReviewDOM());
reviewsList.appendChild(createReviewDOM());
reviewsList.appendChild(createReviewDOM());
reviewsList.appendChild(createReviewDOM());
reviewsList.appendChild(createReviewDOM());
reviewsList.appendChild(createReviewDOM());
reviewsList.appendChild(createReviewDOM());