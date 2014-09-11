$(document).ready(function () {
    // hàm tô màu cho phần chọn đc chọn trong menu
    $('ul li .child').click(function (e) {
        // ngăn cản sự kiện mặc định của thẻ a
        e.preventDefault();

        // xóa tất cả màu, in đậm đã chọn
        reset_color_font_weight_menuitem()

        // thiết lập màu, in đậm cho phần tử hiện tại đc chọn
        $(this).css('color', 'red');
        $(this).css('font-weight', 'bold');
    });
});

// định nghĩa hàm reset lại màu, in đậm cho menuitem đã chọn
function reset_color_font_weight_menuitem() {
    $('ul li .child').css('color', '');
    $('ul li .child').css('font-weight', '');
}
