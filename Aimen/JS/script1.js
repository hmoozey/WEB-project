let cartItems = [];
let totalPrice = 0;

// Add item to cart (Example function)
function addItemToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    totalPrice += itemPrice;

    // Update the cart display
    updateCartDisplay();
}

// Update the cart display (UI)
function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear previous cart items
    cartItemsList.innerHTML = '';

    // Add each item to the cart display
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
    });

    // Update the total price
    totalPriceElement.textContent = `الإجمالي: $${totalPrice.toFixed(2)}`;
}

// Checkout function
function checkout() {
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to checkout...');
        // Implement checkout process here (e.g., redirect to payment page)
    }
}

// Example: Adding an item (You can call this from elsewhere in your app)
addItemToCart('Laptop', 999.99);
addItemToCart('Mouse', 25.50);