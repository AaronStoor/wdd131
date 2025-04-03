// Product Array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate Product Name Options
const productSelect = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id; // Use the product's id as the value
    option.textContent = product.name; // Use the product's name as the display text
    productSelect.appendChild(option);
});

// Track Reviews Using localStorage
if (window.location.pathname.includes('review.html')) {
    // Check if the counter exists in localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0; // Initialize if not present
    }

    // Increment the counter
    reviewCount = parseInt(reviewCount) + 1;

    // Save the updated counter back to localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Display the review count on the review.html page
    const reviewCountDisplay = document.getElementById('review-count');
    if (reviewCountDisplay) {
        reviewCountDisplay.textContent = `You have completed ${reviewCount} reviews.`;
    }
}