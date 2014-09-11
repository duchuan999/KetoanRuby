$(document).ready(function () {
    // sự kiện cho nút hủy bỏ
    $('#btnhuybo').click(function () {
        window.location.href = '/cyber/home'
    });

    // sự kiện cho nút thay đổi mật khẩu
    $('#btncapnhat').click(function () {
        // khai báo url, và data gửi đến server
        var url = '/cyber/thaydoimatkhau/act_thay_doi_mat_khau'
        var data = {
            txtMatkhauhientai: $('#txtMatkhauhientai').val(),
            txtMatkhaumoi: $('#txtMatkhaumoi').val()
        };

        // gửi dữ liệu đến server xử lý
        gui_du_lieu(url, data, function (res) {
            // hiển thị thông báo
            alert(res);
        });
    });
});