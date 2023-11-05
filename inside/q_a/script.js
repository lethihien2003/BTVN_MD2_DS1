$(document).ready(function() {
    $('.side-show a').removeAttr('href');

    $('.side-show').on('click', function() {
        $('.side-show').toggleClass('show-hide');
        $('.category-menu ul > li:gt(4)').toggleClass('side-hide');
    });
});

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
/*---------------------------accordion-----------------------------  */
$(document).ready(function () {
    $('.tab button').click(function () {
        var btn = $(this).find('.fa');
        var content = $(this).parent().find('.content');

        if (btn.hasClass('fa-plus')) {
            btn.removeClass('fa-plus').addClass('fa-minus');
            content.show(500);
            $(this).find('.text').css('color', 'blue').css('font-weight', 'bold');
        } else {
            btn.removeClass('fa-minus').addClass('fa-plus');
            content.hide(500);
            $(this).find('.text').css('color', '#323232');
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
