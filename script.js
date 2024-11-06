// Function to calculate the pizza cost
function calculatePizzaCost(size, toppingsCount) {
    const sizePrices = {
        'large': 6.00,
        'extra_large': 10.00
    };

    const toppingPrices = {
        1: 1.00,
        2: 1.75,
        3: 2.50,
        4: 3.35
    };

    // Get the pizza size cost
    let pizzaCost = sizePrices[size];

    // Get the topping cost
    let toppingCost = toppingPrices[toppingsCount];

    // Calculate subtotal
    let subtotal = pizzaCost + toppingCost;

    // Calculate tax (13% HST)
    let tax = subtotal * 0.13;

    // Calculate total cost
    let totalCost = subtotal + tax;

    return { subtotal, tax, totalCost };
}

// Handle form submission
document.getElementById("pizza-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get selected pizza size
    const size = document.querySelector('input[name="size"]:checked').value;

    // Get selected number of toppings
    const toppingsCount = parseInt(document.getElementById("toppings").value);

    // Calculate costs
    const { subtotal, tax, totalCost } = calculatePizzaCost(size, toppingsCount);

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Order Summary</h3>
        <p>Pizza Size: ${size === 'large' ? 'Large' : 'Extra Large'}</p>
        <p>Toppings: ${toppingsCount}</p>
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Tax (13% HST): $${tax.toFixed(2)}</p>
        <p><strong>Total Cost: $${totalCost.toFixed(2)}</strong></p>
    `;
});
