document.addEventListener("DOMContentLoaded", () => {  // Makes sure the page is loaded before running the code
    const toggleButton = document.querySelector('input[type="checkbox"]') // Calls the toggle button
    
    toggleButton.addEventListener("click", () => { // Adds a listenerer for the click event
        const prices = document.querySelectorAll('.text-4xl strong') // using text-4xl as an ID for what is needed to change
        const originalPrices = Array.from(prices).map(price => +price.innerText.replace('$', '')) // Takes are ID and makes an array

        let multiply;
        if (toggleButton.checked) {
            multiply = 11;
        } else {
            multiply = 1 / 11;
        }

        prices.forEach((price, index) => { // Update prices
        price.innerText = '$' + (originalPrices[index] * multiply).toFixed(2); // Keeps dollar sign and does Original price and uses the multiple from the loop
    }
    )
})
})

