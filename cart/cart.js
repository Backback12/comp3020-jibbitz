let cart = JSON.parse(localStorage.getItem('cart')) || [];


function addModalToPage() {
    const modalHTML = `
    <div class="modal fade" id="removeItemModal" tabindex="-1" aria-labelledby="removeItemModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="removeItemModalLabel">Remove Item</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Are you sure you want to remove this item from your cart?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No, Keep Item</button>
                    <button type="button" class="btn btn-danger" id="confirmRemove">Yes, Remove Item</button>
                </div>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}


function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
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


function generateCartItems() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some items to your cart and they will appear here.</p>
                <a href="/index.html" class="btn btn-primary mt-3">Continue Shopping</a>
            </div>`;
        updateCartTotals();
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="row align-items-center">
                <div class="col-2">
                    <img src="${item.images[0]}" class="cart-item-image" alt="${item.name}">
                </div>
                <div class="col">
                    <h5>${item.name}</h5>
                    <p class="mb-0">$${item.price}</p>
                </div>
                <div class="col-3">
                    <div class="quantity-control">
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <div class="col-2 text-end">
                    <span class="remove-item" onclick="showRemovePrompt(${index})">
                        <i class="fas fa-trash"></i>
                    </span>
                </div>
            </div>
        </div>
    `).join('');

    updateCartTotals();
}


function showRemovePrompt(index) {
    const modal = new bootstrap.Modal(document.getElementById('removeItemModal'));
    

    const confirmButton = document.getElementById('confirmRemove');
    const newConfirmButton = confirmButton.cloneNode(true);
    confirmButton.parentNode.replaceChild(newConfirmButton, confirmButton);
    

    newConfirmButton.addEventListener('click', () => {
        removeItem(index);
        modal.hide();
    });
    
    modal.show();
}


function updateQuantity(index, change) {
    const newQuantity = cart[index].quantity + change;
    
    if (newQuantity <= 0) {
        showRemovePrompt(index);
    } else {
        cart[index].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        generateCartItems();
        updateCartCount();
    }
}


function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    generateCartItems();
    updateCartCount();
    showNotification('Item removed from cart');
}


function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = cart.length > 0 ? 4.99 : 0;
    const total = subtotal + shipping;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}


function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    clearCart();
    //alert('Proceeding to checkout...');
    
}


document.addEventListener('DOMContentLoaded', () => {
    addModalToPage();
    updateCartCount();
    generateCartItems();
});

function clearCart() {
    // Clear the cart array
    cart = [];
    
    // Re-generate the cart items (which will show the empty cart message)
    generateCartItems();
    
    // Update the cart count to show 0
    updateCartCount();
    
    // Optionally, show a notification that the cart was cleared
    showNotification('Your cart has been cleared');
}