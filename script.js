const bar = document.getElementById('bar');
const close = document.getElementById('close');

const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',  () => {
        nav.classList.add('active');
})
}
if(close){
    close.addEventListener('click',  () => {
        nav.classList.remove('active');
})
}
document.addEventListener("DOMContentLoaded", function() {
    // Function to add the main image details to the cart
    function addToCart() {
        var product = {
            image: document.getElementById("MainImg").src,
            name: document.querySelector(".single-pro-details h4").textContent,
            price: document.querySelector(".single-pro-details h2").textContent,
            quantity: parseInt(document.querySelector(".single-pro-details input[type='number']").value)
        };

        // Retrieve existing cart items from localStorage
        var cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Add the product to the cart
        cart.push(product);

        // Store the updated cart in localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Redirect to cart.html
        window.location.href = "cart.html";
    }

    // Add event listener to the "Add To Cart" button
    document.querySelector(".single-pro-details button.normal").addEventListener("click", function() {
        // Add the main image details to the cart and redirect to cart.html
        addToCart();
    });
});


