document.addEventListener('DOMContentLoaded', function () {
    // Cart array to hold product information
    let cart = [];

    // Function to update the cart count in the navbar
    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    // Function to add a product to the cart
    function addToCart(productName, productPrice) {
        const product = { name: productName, price: productPrice };
        cart.push(product);
        updateCartCount(); // Update cart count in the navbar
    }

    // Event listener for adding products to the cart
    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const productName = event.target.getAttribute('data-name');
            const productPrice = event.target.getAttribute('data-price');
            addToCart(productName, productPrice);
        });
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent form from reloading the page
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Your message has been sent!');
            form.reset();  // Reset the form after submission
        } else {
            alert('Please fill in all fields.');
        }
    });
});

