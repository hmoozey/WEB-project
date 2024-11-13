// الحصول على السلة من localStorage أو إنشاء مصفوفة جديدة إذا لم تكن موجودة
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// إضافة المنتج إلى السلة
function addToCart() {
    const product = {
        name: "High-End Laptop",
        price: 1500,  // السعر كمثال
        image: "../images/laptop.jpeg"
    };

    // إضافة المنتج إلى السلة
    cart.push(product);

    // حفظ السلة في localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.name} تم إضافته إلى سلتك!`);
}

// تحديث واجهة السلة في صفحة السلة
function updateCartDisplay() {
    const cartItemsList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // مسح المحتويات السابقة للسلة
    cartItemsList.innerHTML = "";
    
    let totalPrice = 0;

    // إضافة العناصر إلى واجهة السلة
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });

    // عرض الإجمالي
    totalPriceElement.textContent = `الإجمالي: $${totalPrice}`;
}

// إذا كانت الصفحة هي صفحة المنتجات، نضيف وظيفة إضافة المنتج إلى السلة
if (document.getElementById("add-to-cart-btn")) {
    document.getElementById("add-to-cart-btn").addEventListener("click", addToCart);
}

// إذا كانت الصفحة هي صفحة السلة، نعرض السلة
if (document.getElementById("cart-items")) {
    updateCartDisplay();
}