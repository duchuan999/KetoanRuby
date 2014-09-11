$(document).ready(function () {
    // hàm điền dữ liệu vào form thay đổi thông tin tài khoản
    function dien_du_lieu_vao_form() {
        // khai báo url, data gửi
        var url = '/cyber/thaydoithongtin/act_lay_thong_tin_tai_khoan';
        var data = '';
        // đầu tiên lấy thông tin từ server
        gui_du_lieu(url, data, function (res) {
            // chuyển kiểu json
            var datajson = JSON.parse(res);

            // sử lý thông tin json vào các textbox
            $('#txtTendangnhap').val(datajson.username_);
            $('#txtHoten').val(datajson.hoten);
            $('#txtDiachiemail').val(datajson.lh_email);
            $('#txtSocmnd').val(datajson.cmnd);
            $('#txtNgaysinh').val(datajson.ngaysinh);
            $('#txtDtdd').val(datajson.lh_dtdd);
            $('#txtDiachi').val(datajson.sonha);
            $('#txtChucvu').val(datajson.chucvu);
        });
    }

    // gọi hàm điền dữ liệu vào form tài khoản
    dien_du_lieu_vao_form();

    // sự kiện khi nhấn nút cập nhật thông tin
    $('#btncapnhat').click(function () {
        // khai báo url, data gửi
        var url = '/cyber/thaydoithongtin/act_cap_nhat_tai_khoan';
        var data = {
            txtTendangnhap: $('#txtTendangnhap').val(),
            txtHoten: $('#txtHoten').val(),
            txtDiachiemail: $('#txtDiachiemail').val(),
            txtSocmnd: $('#txtSocmnd').val(),
            txtNgaysinh: $('#txtNgaysinh').val(),
            txtDtdd: $('#txtDtdd').val(),
            txtDiachi: $('#txtDiachi').val(),
            txtChucvu: $('#txtChucvu').val()
        };

        // đầu tiên lấy thông tin từ server
        gui_du_lieu(url, data, function (res) {
            // hiển thị thông báo server trả vê
            alert(res);

            // sau đó hiển thị lại form đã cập nhật
            dien_du_lieu_vao_form();
        });
    });

    // sự kiện cho nút hủy bỏ
    $('#btnhuybo').click(function () {
        window.location.href = '/cyber/home';
    });
});
