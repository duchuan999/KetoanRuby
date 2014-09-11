$(document).ready(function () {
    // chứa phần tử cần tải
    var content_ajax = $("#load_ajax");

    // định nghĩa hàm tải trang welcome
    function trang_welcome() {
        // khai báo tham số
        var path = "/cyber/welcome/index"
        // tải trang
        tai_trang(path, content_ajax);
    }

    // đầu tiên load trang welcome
    trang_welcome();

    // thiết lập menu hiển thị đầu tiên (mặc định)
    function menu_hien_thi_dau_tien() {
        // chứa đường dẫn
        var path = "/assets/cyber/menu/_menu_qlbn.html";

        // thiết lập phần tử chứa
        content_ajax = $("#container");

        // tải trang
        tai_trang(path, content_ajax);
    }

    // gọi hiển thị menu
    menu_hien_thi_dau_tien();
});
