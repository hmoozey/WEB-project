const products = [
    {
        id: "1",
        name: "High-End Laptop",
        description: "Powerful performance and sleek design for professionals.",
        image: "../images/61kVeIFOnFL._AC_SX466_.jpg",
        features: [
            "32GB RAM DDR5",
            "1TB SSD",
            "Intel i7-1355U Processor",
            "16 inch Display",
            "Win 11 pro",

        ],
        price: "$1249.99"
    },
    {
        id: "2",
        name: "Latest Smartphone",
        description: "Stay connected with style and cutting-edge features.",
        image: "../images/Latest Smartphone.jpg",
        features: [
            "6.5 inch OLED Display",
            "128GB Storage",
            "Triple Camera System",
            "5G Connectivity",
        ],
        price: "$1299.99"
    },
    {
        id: "3",
        name: "Wireless Headphones",
        description: "Experience sound quality like never before.",
        image: "../images/Wireless Headphones.jpg",
        features: [
            "Active Noise Cancellation",
            "30 Hours Battery Life",
            "Touch Controls",
            "Fast Charging",
        ],
        price: "$119.99"
    }
];

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const product = products.find(p => p.id === productId);

window.onload = function () {
    const productDetails = document.getElementById('product-details');
    if (product) {
        productDetails.innerHTML = `
            <div class="product-container">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h1>${product.name}</h1>
                    <p class="price">${product.price}</p>
                    <p>${product.description}</p>
                    <h3>Features:</h3>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <button class="add-to-cart">Add to Cart</button>
                    <a href="index.html" class="back-to-products">Back to Products</a>
                </div>
            </div>
        `;
    } else {
        productDetails.innerHTML = '<p>Product not found</p>';
    }
}


