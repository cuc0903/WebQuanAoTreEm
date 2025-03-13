document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".category-menu ul li > a");
  
  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const parent = this.parentElement;
  
      // Đóng tất cả menu khác trước khi mở menu được chọn
      document.querySelectorAll(".category-menu ul li").forEach((li) => {
        if (li !== parent) {
          li.classList.remove("active");
        }
      });
  
        // Toggle class active để hiển thị danh mục con
        parent.classList.toggle("active");
      });
    });
  });
  const searchBar = document.getElementById("searchBar");
        const searchInput = document.getElementById("searchInput");

        searchInput.addEventListener("focus", () => {
            searchBar.classList.add("active");
        });

        searchInput.addEventListener("blur", () => {
            if (searchInput.value === "") {
                searchBar.classList.remove("active");
            }
        });
function toggleVoucher(id) {
    var details = document.getElementById("voucher-" + id);
    details.classList.toggle("active");
}
//Trang cá nhân
document.getElementById('edit-btn').addEventListener('click', function() {
  document.querySelectorAll('input').forEach(input => input.disabled = false);
  document.getElementById('edit-btn').style.display = 'none';
  document.getElementById('save-btn').style.display = 'block';
});

document.getElementById('profile-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thông tin đã được lưu!');
  document.querySelectorAll('input').forEach(input => input.disabled = true);
  document.getElementById('edit-btn').style.display = 'block';
  document.getElementById('save-btn').style.display = 'none';
});