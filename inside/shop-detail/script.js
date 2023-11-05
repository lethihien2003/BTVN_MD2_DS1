// $(document).ready(function() {
//     $('.side-show a').removeAttr('href');

//     $('.side-show').on('click', function() {
//         $('.side-show').toggleClass('show-hide');
//         $('.category-menu ul > li:gt(4)').toggleClass('side-hide');
//     });
// });


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

// ===============================main=================================

// ---------------------------------------------------------------------
function load() {
    // Xử lý sự kiện khi click nút tăng
    const incButton = document.querySelector(".inc");
    incButton.addEventListener("click", function (e) {
      e.preventDefault();
      const quantityInput = document.querySelector("input[name='quantity']");
      const currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
  
    // Xử lý sự kiện khi click nút giảm
    const decButton = document.querySelector(".dec");
    decButton.addEventListener("click", function (e) {
      e.preventDefault();
      const quantityInput = document.querySelector("input[name='quantity']");
      const currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
  
    // Xử lý chuyển đổi giữa các tab
    const tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(tab => {
      tab.addEventListener('click', (event) => {
        event.preventDefault();
        tabs.forEach(t => t.classList.remove('active'));
        event.currentTarget.classList.add('active');
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const tabContents = document.querySelectorAll('.tab-pane');
        tabContents.forEach(content => {
          content.classList.remove('show', 'active');
        });
        const targetContent = document.getElementById(targetId);
        targetContent.classList.add('show', 'active');
      });
    });
  }
  
  window.onload = load;

  

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



