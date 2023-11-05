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

/* ============================== main ==============================*/
/*---------------------------left-----------------------------  */
document.getElementById("shippingForm").addEventListener("submit", function (event) {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Kiểm tra xem các trường bắt buộc có được điền đầy đủ hay không
    if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || phone.trim() === "") {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc.");
        event.preventDefault(); // Ngăn chặn việc submit form
    }

    // Hàm validate số điện thoại: Trả về true nếu đúng và trả về false nếu sai

    function isVietnamesePhoneNumber(number) {
        return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
    }

    //validate email
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
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
