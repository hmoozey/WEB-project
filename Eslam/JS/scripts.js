﻿document.addEventListener('DOMContentLoaded', function () {
    const resultsBox = document.querySelector(".result-box");
    const inputBox = document.getElementById("input-box");
    let currentIndex = -1;

    let availableKeywords = [
        'Intel Core i9 14900k',
        'Intel Core i9 13900k',
        'Intel Core i9 12900k',
        'Intel Core i7 13700k',
        'Intel Core i7 12700k',
        'Intel Core i5 13600k',
        'Intel Core i5 13400',
        'Intel Core i5 12400',
        'Intel Core i3 12100',
        'AMD Ryzen 9 7950X',
        'AMD Ryzen 9 7900X',
        'AMD Ryzen 7 7800X',
        'AMD Ryzen 7 7700X',
        'AMD Ryzen 7 5800X',
        'AMD Ryzen 5 7600X',
        'AMD Ryzen 5 5600X',
        'AMD Ryzen 5 3400G',
        'Intel Xeon W-3300 Series',
        'AMD Threadripper PRO 5975WX',
        'AMD Threadripper 3990X',

        'NVIDIA GeForce RTX 4090 - 24GB',
        'NVIDIA GeForce RTX 4080 Super - 16GB',
        'NVIDIA GeForce RTX 4080 Ti - 16GB',
        'NVIDIA GeForce RTX 4080 - 16GB',
        'NVIDIA GeForce RTX 4070 Ti Super - 16GB',
        'NVIDIA GeForce RTX 4070 Ti - 12GB',
        'NVIDIA GeForce RTX 4070 - 12GB',
        'NVIDIA GeForce RTX 4060 Ti - 8GB',
        'NVIDIA GeForce RTX 4060 Ti - 16GB',
        'NVIDIA GeForce RTX 4060 - 8GB',
        'NVIDIA GeForce RTX 4060 - 12GB',
        'NVIDIA GeForce RTX 3090 Ti - 24GB',
        'NVIDIA GeForce RTX 3090 - 24GB',
        'NVIDIA GeForce RTX 3080 Ti - 12GB',
        'NVIDIA GeForce RTX 3080 - 10GB',
        'NVIDIA GeForce RTX 3080 - 12GB',
        'NVIDIA GeForce RTX 3070 - 8GB',
        'NVIDIA GeForce RTX 3070 - 16GB',
        'NVIDIA GeForce RTX 3060 Ti - 8GB',
        'NVIDIA GeForce RTX 3060 - 12GB',
        'NVIDIA GeForce GTX 1660 Ti - 6GB',
        'NVIDIA GeForce GTX 1650 - 4GB',
        'NVIDIA GeForce RTX 2060 Super - 8GB',
        'NVIDIA GeForce RTX 2070 Super - 8GB',
        'NVIDIA GeForce RTX 2080 Super - 8GB',

        // AMD Radeon
        'AMD Radeon RX 7900 XT - 20GB',
        'AMD Radeon RX 7900 XTX - 24GB',
        'AMD Radeon RX 6800 XT - 16GB',
        'AMD Radeon RX 6800 - 16GB',
        'AMD Radeon RX 6700 XT - 12GB',
        'AMD Radeon RX 6600 XT - 8GB',

        //  حسب الشركة
        'ASUS ROG Strix GeForce RTX 3080 - 10GB',
        'ASUS ROG Strix GeForce RTX 3080 - 12GB',
        'MSI Gaming GeForce RTX 3070 - 8GB',
        'Gigabyte AORUS GeForce RTX 3060 - 12GB',
        'EVGA GeForce RTX 3050 - 8GB',
        'ASRock Radeon RX 6600 - 8GB',
        'ZOTAC Gaming GeForce RTX 3060 - 12GB',
        'Sapphire Radeon RX 6700 XT - 12GB',



        // اللوحات الأم
        'ASUS ROG Strix Z790-E',
        'ASUS ROG Crosshair VIII Hero',
        'ASUS TUF Gaming B650-Plus',
        'MSI MAG B650M Mortar',
        'Gigabyte AORUS X670E',
        'Gigabyte B550 AORUS Elite',
        'ASRock B550 Steel Legend',
        'ASUS Prime Z690-A',
        'MSI Pro Z690-A WiFi',
        'ASUS ROG Strix B550-F Gaming',
        'Gigabyte Z490 AORUS Master',
        'ASRock Z490 Taichi',
        'MSI MPG X570 Gaming Pro Carbon',
        'ASUS TUF Gaming X570-Plus',
        'Gigabyte X570 AORUS Elite',

        // الذواكر
        'Corsair Vengeance LPX 16GB DDR4 3200MHz',
        'G.Skill Ripjaws V 32GB DDR4 3600MHz',
        'Crucial Ballistix 16GB DDR4 2400MHz',
        'Kingston Fury Beast 16GB DDR4 3200MHz',
        'HyperX Fury 32GB DDR4 3600MHz',
        'G.Skill Trident Z RGB 32GB DDR4 3600MHz',
        'Corsair Dominator Platinum RGB 32GB DDR4 3200MHz',
        'Teamgroup T-Force Vulcan Z 16GB DDR4 3200MHz',
        'Corsair Vengeance LPX 32GB DDR4 3600MHz',
        'G.Skill Ripjaws V 16GB DDR4 3200MHz',
        'Crucial P5 Plus 1TB NVMe SSD',

        // الأقراص الصلبة
        'Samsung 970 EVO Plus 1TB NVMe SSD',
        'Samsung 980 PRO 1TB NVMe SSD',
        'Western Digital Blue 1TB SATA SSD',
        'Seagate Barracuda 2TB HDD',
        'Crucial P3 1TB NVMe SSD',
        'SanDisk Ultra 1TB SATA SSD',
        'ADATA XPG SX8200 Pro 1TB NVMe SSD',
        'Samsung 860 EVO 2TB SATA SSD',
        'Toshiba X300 4TB HDD',
        'WD Black SN850 1TB NVMe SSD',
        'Samsung 870 QVO 4TB SATA SSD',
        'Western Digital Black SN750 2TB NVMe SSD',

        // مزودات الطاقة
        'Corsair RM850x 850W 80 Plus Gold',
        'Seasonic Focus GX-750, 750W 80 Plus Gold',
        'EVGA SuperNOVA 650 G5',
        'Thermaltake Toughpower GF1 750W',
        'Cooler Master MWE Gold 650W',
        'Corsair HX1200i 1200W 80 Plus Platinum',
        'be quiet! Straight Power 11 750W',
        'FSP Hydro G Pro 850W',
        'SilverStone Strider Platinum 850W',
        'Cooler Master V850 Gold',

        // صناديق الكمبيوتر
        'NZXT H510 ATX Mid Tower Case',
        'Fractal Design Meshify C',
        'Corsair 4000D Airflow',
        'Lian Li PC-O11 Dynamic',
        'Phanteks Eclipse P400A',
        'Cooler Master MasterBox Q300L',
        'Thermaltake V200 Tempered Glass RGB Edition',
        'Corsair iCUE 465X RGB Mid-Tower Case',
        'be quiet! Pure Base 500DX',
        'Antec NX410 Mid Tower Case',
        'Thermaltake H200 TG ARGB Mini Tower Case',

        // تبريد المعالج
        'Noctua NH-D15',
        'Corsair H100i RGB Platinum',
        'be quiet! Dark Rock Pro 4',
        'Cooler Master Hyper 212 EVO',
        'NZXT Kraken X63 AIO',
        'Thermalright Peerless Assassin 120',
        'Arctic Freezer 34 eSports DUO',
        'Deepcool Gammaxx 400 V2',
        'Scythe Mugen 5 Rev.B',
        'Cryorig H7',

        // مكونات إضافية
        'Logitech G Pro Wireless Gaming Mouse',
        'Razer BlackWidow V3 Mechanical Gaming Keyboard',
        'BenQ ZOWIE XL2411K Gaming Monitor',
        'ASUS ROG Swift PG259QN Gaming Monitor',
        'Acer Predator X27 4K Gaming Monitor',
        'SteelSeries QcK Gaming Mouse Pad',
        'Razer Firefly V2 RGB Gaming Mouse Pad',
        'HyperX Alloy FPS Pro Mechanical Gaming Keyboard',

        // بطاقات الصوت
        'ASUS Xonar SE PCIe Sound Card',
        'Creative Sound Blaster Audigy RX',
        'Focusrite Scarlett 2i2 Audio Interface',
        'EVGA Nu Audio Card',
        'M-Audio M-Track 2X2',
        'ASUS Essence STX II 7.1 Sound Card',

        // كروت الشبكة
        'TP-Link Archer TX3000E WiFi 6 PCIe Card',
        'ASUS PCE-AC88 AC3100 PCIe Adapter',
        'Gigabyte GC-WBAX200 WiFi 6 PCIe Card',
        'Intel Wi-Fi 6 AX200',
        'TP-Link TL-WN881ND Wi-Fi Adapter',

        // مراوح التبريد
        'Noctua NF-A12x25 PWM Fan',
        'Corsair LL120 RGB Fan',
        'be quiet! Pure Wings 2 Fan',
        'Arctic P12 PWM Fan',
        'Thermaltake Riing Plus 12 RGB Fan',
        'Cooler Master SickleFlow 120 RGB Fan',
        'Noctua NF-F12 PWM Fan',

        // مكونات التعديل
        'CableMod PRO ModMesh Cables',
        'Thermal Grizzly Kryonaut Thermal Paste',
        'EKWB EK-Thermosphere Liquid Cooling Kit',
        'Phanteks Glacier One 240MP AIO Liquid Cooler',
        'Cooler Master MasterLiquid ML240L RGB',

        //
        'Corsair K55 RGB Gaming Keyboard',
        'Logitech G502 HERO Gaming Mouse',
        'Razer Kraken X Lite Gaming Headset',
        'HyperX Cloud II Gaming Headset',
        'Logitech G935 Wireless Gaming Headset',


        'High-End Laptop',
    ];

    inputBox.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            search(inputBox.value);
        }
    });

    document.querySelector('.search-container button').addEventListener("click", function () {
        search(inputBox.value);
    });

    inputBox.onkeyup = function (e) {
        let input = inputBox.value;
        if (input.length) {
            let result = availableKeywords.filter((keyword) => {
                return keyword.toLowerCase().split(" ").some(word => word.startsWith(input.toLowerCase()));
            }).slice(0, 10);

            if (result.length) {
                display(result);
            } else {
                resultsBox.style.display = "none";
            }

            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                e.preventDefault();
                navigateResults(e.key === "ArrowDown" ? 1 : -1);
            } else if (e.key === "Enter" && currentIndex >= 0) {
                e.preventDefault();
                selectInput(document.querySelectorAll(".result-box li")[currentIndex]);
            }
        } else {
            resultsBox.style.display = "none";
        }
    };

    inputBox.onclick = function () {
        let input = inputBox.value;
        if (input.length) {
            let result = availableKeywords.filter((keyword) => {
                return keyword.toLowerCase().split(" ").some(word => word.startsWith(input.toLowerCase()));
            }).slice(0, 10);
            display(result);
        } else {
            resultsBox.style.display = "none";
        }
    };

    function display(result) {
        if (result.length) {
            currentIndex = -1; // إعادة تعيين التحديد عند عرض النتائج الجديدة
            const content = result.map((list, index) => {
                return `<li onclick="selectInput(this)" data-index="${index}">${list}</li>`;
            });
            resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
            resultsBox.style.display = "block";
        }
    }

    // تعديل دالة selectInput هنا لتكون موجودة عند الاستدعاء
    window.selectInput = function (list) {
        inputBox.value = list.innerHTML;
        resultsBox.style.display = "none";
        currentIndex = -1;
        search(list.innerHTML);
    };

    function search(query) {
        if (query) {
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    }

    function navigateResults(direction) {
        const items = document.querySelectorAll(".result-box li");
        if (!items.length) return;

        currentIndex += direction;
        if (currentIndex < 0) currentIndex = items.length - 1;
        if (currentIndex >= items.length) currentIndex = 0;

        items.forEach(item => item.classList.remove("highlight"));
        items[currentIndex].classList.add("highlight");
        inputBox.value = items[currentIndex].innerHTML;
    }

    document.addEventListener("click", function (event) {
        if (!inputBox.contains(event.target) && !resultsBox.contains(event.target)) {
            resultsBox.style.display = "none";
        }
    });

    // التعامل مع نافذة تسجيل الدخول
    const loginModal = document.querySelector(".login-modal");
    if (loginModal) {
        document.querySelector('.fa-user').addEventListener('click', function () {
            loginModal.style.display = 'block';
        });

        window.addEventListener('click', function (event) {
            if (event.target == loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }
});


function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

function initTheme() {
    const savedTheme = localStorage.getItem("theme");

    const theme = savedTheme || (prefersDark ? "light" : "dark");

    // ضبط حالة الزر بناءً على الثيم
    document.getElementById("theme-toggle").checked = (theme === "light");

    // تطبيق الثيم
    setTheme(theme);
}

document.getElementById("theme-toggle").addEventListener("change", () => {
    const newTheme = document.getElementById("theme-toggle").checked ? "light" : "dark" ;
    setTheme(newTheme);
});



initTheme();


// تحديد العناصر
const productItem = document.getElementById("product-item");
const productLink = document.getElementById("product-link");
const dropdown = productItem.querySelector(".dropdown");

// متغير لتعقب حالة العرض
let isDropdownVisible = false;





// دالة لتبديل العرض عند النقر
productLink.addEventListener("click", (event) => {
    event.preventDefault(); // منع الانتقال الافتراضي للرابط
    isDropdownVisible = !isDropdownVisible; // تبديل الحالة
    dropdown.style.display = isDropdownVisible ? "block" : "none"; // تغيير العرض
});

// دالة لتحديد الفئة المختارة وتخزينها في localStorage
function selectCategory(radio) {
    const selectedValue = radio.nextElementSibling.textContent;
    productLink.textContent = selectedValue;
    localStorage.setItem("selectedCategory", selectedValue); // تخزين الفئة المختارة
    dropdown.style.display = "none";
    isDropdownVisible = false;
}

// إخفاء القائمة عند النقر خارجها
document.addEventListener("click", (event) => {
    if (!productItem.contains(event.target)) {
        dropdown.style.display = "none";
        isDropdownVisible = false;
    }
});

// التأكد من أن الفئة المحفوظة هي الفئة المحددة عند إعادة تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {

    const isHomePage = window.location.pathname === "/" || window.location.pathname.includes("index.html");

    // إذا كانت الصفحة الرئيسية، يتم تغيير القيمة المحفوظة إلى "All"
    if (isHomePage) {
        localStorage.setItem("selectedCategory", "All");
    }

    const savedCategory = isHomePage ? "All" : localStorage.getItem("selectedCategory") || "All";
    productLink.textContent = savedCategory; // تعيين النص داخل الرابط ليكون الفئة المحفوظة

    if (savedCategory === "All") {
        // إذا كانت الفئة هي "All"، تأكد من أن الخيار "All" هو المحدد في القائمة
        const allRadio = dropdown.querySelector('.label .text').textContent === "All";
        if (allRadio) {
            dropdown.querySelector('input').checked = true; // تعيين الخيار "All"
        }
    } else {
        // إذا كانت الفئة محفوظه في localStorage، قم بتحديد الخيار المناسب
        const selectedRadio = Array.from(dropdown.querySelectorAll('.label'))
            .find(label => label.querySelector('.text').textContent === savedCategory);

        if (selectedRadio) {
            selectedRadio.querySelector('input').checked = true; // تعيين الخيار المختار
        }
    }
});

