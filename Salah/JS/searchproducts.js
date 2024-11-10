document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("query");
    const searchBox = document.getElementById("input-box");
    document.getElementById('price-filter').style.display = 'none';

    if (searchQuery) {
        searchBox.value = searchQuery;
        filterProducts(searchQuery);
    }

    // تفعيل البحث عند الضغط على "Enter" أو زر البحث
    searchBox.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            search(searchBox.value);
        }
    });

    document.querySelector('.search-container button').addEventListener("click", function () {
        search(searchBox.value);
    });

    function search(query) {
        if (query) {
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    }

    function filterProducts(query) {
        const searchUpperCase = query.toUpperCase();
        const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = '';

        // قائمة المنتجات
        const products = [
            { id: 1, image: "../images/61kVeIFOnFL._AC_SX466_.jpg", name: "High-End Laptop", description: "Powerful performance and sleek design for professionals.", brand: "Brand: Lenovo", price: 1200 },
            { id: 2, image: "../images/Latest Smartphone.jpg", name: "Latest Smartphone", description: "Stay connected with style and cutting-edge features.", brand: "Brand: Samsung", price: 1299.99 },
            { id: 3, image: "../images/Wireless Headphones.jpg", name: "Wireless Headphones", description: "Experience sound quality like never before.", brand: "Brand: Sony", price: 119.99 },
            


        ];

        // تحديد الحد الأدنى والحد الأقصى للأسعار
        const minPriceValue = Math.min(...products.map(product => product.price));
        const maxPriceValue = Math.max(...products.map(product => product.price));

        const priceDisplay = document.getElementById('price-display');
        priceDisplay.textContent = `${minPriceValue}$ - ${maxPriceValue}$`;

        const priceRange = document.getElementById('price-range');
        noUiSlider.create(priceRange, {
            start: [minPriceValue, maxPriceValue],
            connect: true,
            range: {
                'min': minPriceValue,
                'max': maxPriceValue
            }
        });

        // تحديث النطاق السعري عند تغييره
        priceRange.noUiSlider.on('update', function (values) {
            const minPrice = parseFloat(values[0]);
            const maxPrice = parseFloat(values[1]);
            priceDisplay.textContent = `${minPrice}$ - ${maxPrice}$`;
            // لا يتم التصفية فوراً عند تغيير السعر
        });

        // إضافة حدث للنقر على زر "بحث"
        document.getElementById('price-filter-button').addEventListener('click', function () {
            const values = priceRange.noUiSlider.get();
            const minPrice = parseFloat(values[0]);
            const maxPrice = parseFloat(values[1]);
            filterAndDisplayProducts(searchUpperCase, minPrice, maxPrice);  // تصفية وعرض المنتجات بعد النقر على زر البحث
        });

        // تصفية وعرض المنتجات
        filterAndDisplayProducts(searchUpperCase, minPriceValue, maxPriceValue);
    }

    // دالة لتصفية المنتجات بناءً على الاستعلام ونطاق السعر
    function filterAndDisplayProducts(query, minPrice, maxPrice) {
        const productContainer = document.getElementById('product-container');
        const products = [
            { id: 1, image: "../images/61kVeIFOnFL._AC_SX466_.jpg", name: "High-End Laptop", description: "Powerful performance and sleek design for professionals.", brand: "Brand: Lenovo", price: 1249.99 },
            { id: 2, image: "../images/Latest Smartphone.jpg", name: "Latest Smartphone", description: "Stay connected with style and cutting-edge features.", brand: "Brand: Samsung", price: 1299.99 },
            { id: 3, image: "../images/Wireless Headphones.jpg", name: "Wireless Headphones", description: "Experience sound quality like never before.", brand: "Brand: Sony", price: 119.99 },
        ];

        const filteredProducts = products.filter(product =>
            (product.name.toUpperCase().includes(query) || product.brand.toUpperCase().includes(query)) &&
            product.price >= minPrice &&
            product.price <= maxPrice
        );

        if (filteredProducts.length > 0) {

            displayProducts(filteredProducts);

            const minFilteredPrice = Math.min(...filteredProducts.map(product => product.price));
            const maxFilteredPrice = Math.max(...filteredProducts.map(product => product.price));

            const priceDisplay = document.getElementById('price-display');
            priceDisplay.textContent = `${minFilteredPrice}$ - ${maxFilteredPrice}$`;

            // تأكد من أن min و max ليست متساوية
            if (minFilteredPrice !== maxFilteredPrice) {
                const priceRange = document.getElementById('price-range');
                priceRange.noUiSlider.updateOptions({
                    range: {
                        'min': minFilteredPrice,
                        'max': maxFilteredPrice
                    },
                    start: [minFilteredPrice, maxFilteredPrice]
                });
                document.getElementById('price-filter').style.display = 'block';

            } else {
                document.getElementById('price-filter').style.display = 'none';

            }

        } else {
            productContainer.innerHTML = '<p>No products found matching your search.</p>';
            document.getElementById('price-filter').style.display = 'none';
        }
    }



    function displayProducts(productsToDisplay) {
        const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = ''; // تفريغ الحاوية قبل إضافة المنتجات المفلترة
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <a href="../html/product.html?id=${product.id}" class="card-link">
                    <div class="content-wrapper">

                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="brand">${product.brand}</p>
                    <p class="price">${product.price}$</p>
                </a>
                </div>
                <button class="add-to-carts">Add to Cart</button>
            `;
            productContainer.appendChild(productCard);
        });
    }
});


