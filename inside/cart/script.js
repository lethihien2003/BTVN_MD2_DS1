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


// validate
function validateForm() {
    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;

    // Kiểm tra xem các trường bắt buộc có được điền đầy đủ hay không
    if (country === "" || state === "" || zip === "") {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc.");
        return false;
    }
    return true;
}


