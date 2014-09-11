// sự kiên tải trang xong
$(document).ready(function () {
    // di chuyển trỏ vào ô textbox đầu tiên (tên đăng nhập)
    $("#txtTenDangNhap").focus();

    // binds form submission and fields to the validation engine
    $("#loginForm").validationEngine('attach', {promptPosition: "bottomLeft", autoPositionUpdate: true});
    $("#loginForm").validationEngine();

    // sự kiện khi nhấn enter tên đăng nhập
    $("#txtTenDangNhap").keydown(function (e) {
        // kiểm tra có nhấn phím enter (13)
        if (e.which == 13) {
            // bỏ qua hoạt dộng mặc định của phím enter
            e.preventDefault();

            // di chuyển đến mật khẩu
            $("#txtMatKhau").focus();
        }
    });

    // sự kiện khi nhấn enter mật khẩu
    $("#txtMatKhau").keydown(function (e) {
        // kiểm tra có nhấn phím enter (13)
        if (e.which == 13) {
            // bỏ qua hoạt dộng mặc định của phím enter
            e.preventDefault();

            // di chuyển đến mật khẩu
            $("#ckbTuDongDangNhapLanSau").focus();
        }
    });

    // sự kiện khi enter trên checkbox lưu thông tin
    $("#ckbTuDongDangNhapLanSau").keydown(function (e) {
        // kiểm tra có nhấn phím enter (13)
        if (e.which == 13) {
            // bỏ qua hoạt dộng mặc định của phím enter
            e.preventDefault();

            // di chuyển đến mật khẩu
            $("#sbmDangNhap").focus();
        }
    });
});
