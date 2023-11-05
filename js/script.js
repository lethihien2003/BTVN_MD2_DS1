// Tiêu đề dính
document.addEventListener("DOMContentLoaded", function () {
    // Lấy phần tử header-top
    const headerTop = document.querySelector('.sticky-header');

    // Thiết lập ngưỡng cuộn trang để cố định lớp
    const scrollThreshold = 100; // Điều chỉnh ngưỡng tùy ý

    // Thêm sự kiện cuộn trang
    window.addEventListener('scroll', () => {
        // Lấy vị trí cuộn trang hiện tại
        const scrollPosition = window.scrollY || window.pageYOffset;

        // Kiểm tra vị trí cuộn trang và thêm hoặc loại bỏ lớp header-top
        if (scrollPosition > scrollThreshold) {
            headerTop.classList.add('fixed-sticky-header');
        } else {
            headerTop.classList.remove('fixed-sticky-header');
        }
    });
});


// ngăn liên kết này chuyển hướng đến các trang khác khi được nhấp đối với search
$(document).ready(function () {
    $('.side-show a').removeAttr('href');

    $('.side-show').on('click', function () {
        $('.side-show').toggleClass('show-hide');
        $('.category-menu ul > li:gt(4)').toggleClass('side-hide');
    });
});


//================main===================
//---------------slide--------------------
function load()  {
    var content = document.getElementById("content");
    var slides = document.querySelectorAll(".slide");
    var header = document.querySelector(".header_bg");
    var body = document.querySelector(".body_bg");
    var footer = document.querySelector(".footer_bg");
    var dots = document.querySelectorAll(".icon_footer i");
    var currentSlide = 0;
    var currentIndex = 0;

    //hiển thị slide thứ n
    function showSlide(n) {
        slides.forEach((slide) => {
            slide.style.display = "none"; // Ẩn tất cả các slide
        });
        dots.forEach((dot) => {
            dot.classList.remove("active"); //Loại bỏ lớp "active" của các biểu tượng vòng tròn
        });
        slides[n].style.display = "block"; // Hiển thị slide hiện tại
        dots[n].classList.add("active"); //Cập nhật lớp "active" cho biểu tượng vòng tròn tương ứng

        // Lấy ảnh hiện tại từ slide và đặt làm nền cho header, body và footer
        var currentSlideBackground = getComputedStyle(slides[n]).backgroundImage;
        header.style.backgroundImage = currentSlideBackground;
        body.style.backgroundImage = currentSlideBackground;
        footer.style.backgroundImage = currentSlideBackground;
    }

    // Chuyển đến slide tiếp theo
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Chuyển đến slide trước đó
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Thêm sự kiện click cho các biểu tượng vòng tròn
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            showSlide(index);
        });
    });

    // Thêm sự kiện click cho nút Previous và Next
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    // Tự động chuyển đổi sau 5 giây
    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(autoSlide, 5000);

} window.onload = load;

// Tạo danh sách sản phẩm tương ứng với mỗi tab -->
// --------------Fruites---------------

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".nav-link");
    const productLists = document.querySelectorAll(".our-product-four");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            productLists.forEach((productList) => {
                productList.style.display = "none";
            });

            if (tab.dataset.tab === "fruits") {
                productLists[index].style.display = "block";
            } else if (tab.dataset.tab === "milk") {
                productLists[index].style.display = "block";
            }
        });
    });

    const defaultTab = document.querySelector(".tab-fruits");
    if (defaultTab) {
        const defaultTabIndex = Array.from(tabs).indexOf(defaultTab);
        productLists[defaultTabIndex].style.display = "block";
    }
});




document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;
    slideShow();

    setInterval(function () {
        slideIndex = slideIndex + 1;
        slideShow();
    }, 5000);

    function slideShow() {
        const slides = document.querySelectorAll('.testimonial-slide');
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(slide => slide.classList.remove('active'));
        slides[slideIndex - 1].classList.add('active');

        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('dot_active'));
        dots[slideIndex - 1].classList.add('dot_active');
    }

    function activeDot(n) {
        slideIndex = n;
        slideShow();
    }
});


function scrollToTop() {
    document.documentElement.scrollTop = 0; // Cho trình duyệt lên đầu trang
}

// Hiển thị hoặc ẩn nút trượt dựa trên vị trí cuộn trang
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
};


//validate email
$(document).ready(function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
});


