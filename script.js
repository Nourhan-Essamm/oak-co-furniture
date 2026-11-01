
// Shopping Cart
let cartCount = 0;

const cartCounter = document.getElementById("cartCount");

const addButtons = document.querySelectorAll(".add-button");

addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        cartCount++;

        cartCounter.textContent = cartCount;

        const productName = button.dataset.name;

        alert(productName + " added to your cart!");
    });
});


// Newsletter Form
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("emailInput").value;

    document.getElementById("message").textContent =
        "Thank you for subscribing!";

    newsletterForm.reset();
});
