
// const products = window.products;
console.log(products)


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
    document.getElementById('product-rating').innerHTML = '<i class="bi bi-star-fill"></i>'.repeat(Math.floor(rating/2))  // full stars 
                                                        + '<i class="bi bi-star-half"></i>'.repeat(rating % 2)            // half stars
                                                        + '<i class="bi bi-star"></i>'.repeat(Math.floor((10-rating)/2)); // no stars
    // set image (temp)
    document.getElementById('product-img').src = products[id]['images'][0];
  }
  else {
    // no ID!
    // send back to main page
    window.location.href = "/"
  }
});