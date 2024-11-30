# comp3020-jibbitz
December 29, 2024
Comp 3020 Milestone 3
Group 3

Shana Iqbal (7970654, iqbals5@myumanitoba.ca)  
Connor Pagtakhan (7917687, pagtakhc@myumanitoba.ca)  
Raj Rathod (7901691, rathodrd@myumanitoba.ca)  
Ethan Rojas (7916252, rojase1@myumanitoba.ca)  

# About 
This is a Jibbitz website inspired by the Crocs website. The details are discussed below.

# To Run
1. Download and extract ```jibbitz.zip```  
2. Navigate to the ```index.html``` file under the main directory  
3. Open ```index.html``` in Chrome or any browser run the project.  



# Pages
Below are specifics on each page, should you need clarity on how to use aspects of our assignment.



## Navbar
Clicking on the Jibbitz logo on the left side should bring you back to the home page regardless of where you are in the program. Clicking on the cart icon will bring you to the cart page wherever you are as well. 

When you are logged out, the profile icon on the top right will be a faceless picture. If you click on it, the login popup will show.

When you are logged in, the profile icon on the top right will be a picture with sunglasses. If you click on it, the profile popup will show, and it will allow you to see your order history and log out.

When you hover but dont click on the cart icon, it will show you a preview of what is in your cart. Note that this does not occur when you are in the cart page, as you already can see all your product details when on this page. Additionally if you click 'View Cart" it will take you to the cart page.



## Homepage
Below the navbar is a blue square box and a search bar.

If you click the blue square box, the filters block will show and push the product grid so it has display room.

If you select specific colours, only Jibbitz with the selected colours will show. If no colours are selected, all Jibbitz will show as a default.

The price range is a scrollable. You can toggle it to only see Jibbitz in that price range. 

Note both filters work in conjunction with each other so if you select specific colours in a specific range, only Jibbitz matching the colour selection AND price range will appear. Refreshing the page will cause the filter selections to disappear.

The search bar will react to input. If you input letters, it will show all Jibbitz with those letters in that order at some point in their name. You can click on a product in the search bar results to go to that product page. Pressing enter will close the search bar.

Below the search bar is a product grid. These display all the products. Upon clicking a product you will be redirected to the product page.

If you click on the quick add button of a product in the product grid, it will add the product to cart (and notif you of this), instead of going to the product page.

Each product also has 2 images. You can press the arrows on the product card to switch between photos.



## Product Page
This page shows the product, its ratings and reviews.

You can adjust the number of products you wish to add to cart by altering the quantity in the quantity section. If you press add to cart, the product will be added to cart in the quantity specified in the quantity section.

You can see reviews if you are logged out, but to make one you must be logged in.
If logged in, at the end of the reviews section there will be a panel in which you can change the star rating of the review by clicking on the stars, type in your review in the comments text input, and press post review to post it.



## Cart Page
This is mainly just a display. You can edit the quantities of items here by pressing the - and + buttons. If you press the Proceed To Checkout Button, the order will be made, the cart will empty, and if you are logged in, the order should appear in the order history tab.



## Order History
This page is just a display. There is no functionality beyond the navbar. 
If there are orders, they should all appear here.
If there are none, the page will display a message saying you have no orders.
