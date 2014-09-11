$(document).ready(function () {
    // sự kiện khi click vào textbox tỉnh thành
    $('#txtTinhthanh').click(function () {
        // khai báo tiêu đề, phần tử chứa
        var tieude = 'Tỉnh/TP~Vùng~Mã';
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);
    });

    // sự kiện khi keyup vào textbox tỉnh thành
    $('#txtTinhthanh').keyup(function () {
        // định nghĩa tham số
        var id = this;
        // key trước rùi value
        var keyvalue = "2~0";
        var cols = "tinhtp~vung~ma";
        var url = "/cyber/dangkydichvu/act_loc_tinh_thanh";
        var data = {tentt: $(this).val()};

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, ser_res, function (self) {

            });
        });
    });

    // sự kiện khi click vào textbox quận huyện
    $('#txtQuanhuyen').click(function () {
        // khai báo tiêu đề, phần tử chứa
        var tieude = 'Quận/Huyện~Tỉnh/TP~Vùng~Mã';
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);
    });

    // sự kiện khi keyup vào textbox quận huyện
    $('#txtQuanhuyen').keyup(function () {
        // định nghĩa tham số
        var id = this;
        // key trước rùi value
        var keyvalue = "3~0";
        var cols = "quanhuyen~tinhtp~vung~ma";
        var url = "/cyber/dangkydichvu/act_loc_quan_huyen";
        var data = {matt: $('#txtTinhthanh').attr('key'), tenqh: $(this).val()};

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, ser_res, function (self) {

            });
        });
    });

    // sự kiện khi click vào textbox phường xã
    $('#txtPhuongxa').click(function () {
        // khai báo tiêu đề, phần tử chứa
        var tieude = 'Phường/Xã~/Quận/Huyện~Tỉnh/TP~Viết tắt~Mã';
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);
    });

    // sự kiện khi keyup vào textbox phường xã
    $('#txtPhuongxa').keyup(function () {
        // định nghĩa tham số
        var id = this;
        // key trước rùi value
        var keyvalue = "4~0";
        var cols = "phuongxa~quanhuyen~tinhtp~viettat~ma";
        var url = "/cyber/dangkydichvu/act_loc_phuong_xa";
        var data = {maquan: $('#txtQuanhuyen').attr('key'), tenpxa: $(this).val()};

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, ser_res, function (self) {

            });
        });
    });

    // sự kiện khi click vào textbox loại cơ sở kcb
    $('#txtLoaicosokcb').click(function () {
        // khai báo tiêu đề, phần tử chứa
        var tieude = 'Tên tuyến~Mã';
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);
    });

    // sự kiện khi keyup vào textbox loại cơ sở kcb
    $('#txtLoaicosokcb').keyup(function () {
        // định nghĩa tham số
        var id = this;
        // key trước rùi value
        var keyvalue = "1~0";
        var cols = "tentuyen~ma";
        var url = "/cyber/dangkydichvu/act_loc_tuyen_bv";
        var data = {tentuyen: $(this).val()};

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, ser_res, function (self) {

            });
        });
    });

    // sự kiện khi click vào textbox tên cơ sở kcb
    $('#txtTencosokcb').click(function () {
        // khai báo tiêu đề, phần tử chứa
        var tieude = 'Tên cơ sở~Địa chỉ~Mã cơ sở';
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);
    });

    // sự kiện khi keyup vào textbox tên cơ sở kcb
    $('#txtTencosokcb').keyup(function () {
        // định nghĩa tham số
        var id = this;
        // key trước rùi value
        var keyvalue = "3~0";
        var cols = "tenvien~diachi~[dienthoai]~ma";
        var url = "/cyber/dangkydichvu/act_loc_ten_vien";
        var data = {
            matt: $('#txtTinhthanh').attr('key'),
            maquan: $('#txtQuanhuyen').attr('key'),
            maxa: $('#txtPhuongxa').attr('key'),
            matuyen: $('#txtLoaicosokcb').attr('key'),
            tenv: $(this).val()
        };

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, ser_res, function (self) {

            });
        });
    });

    // sự kiện khi click nút hủy bỏ
    $('#btnhuybo').click(function () {
        // chuyển đến trang /cyber/home/index
        window.location.href = '/cyber/home';
    });

    // sự kiện khi click nút đăng ký
    $('#btncapnhat').click(function () {
        // khai báo url, và tham số gửi
        var url = "/cyber/dangkydichvu/act_dang_ky_modules";
        var data = {
            tenvienid: $("#txtTencosokcb").attr("key"),
            modules: '',
            songuoidungs: ''
        };

        // chứa danh sách modules và số người dùng
        var modules = "";
        var songuoidungs = "";

        // khai báo lấy các phần tử tag
        var ckbModuleIds = document.getElementsByName("ckbModuleId");
        var txtSoNguoiDungs = document.getElementsByName("txtSoNguoiDung");

        // duyệt từng tag
        for (var i = 0; i < ckbModuleIds.length; i++) {
            // kiểm tra xem checkbox nào đc chọn
            if (ckbModuleIds[i].checked) {
                // có chọn thì thì id modules và số người dùng
                modules += ckbModuleIds[i].value + "~";
                songuoidungs += txtSoNguoiDungs[i].value + "~";
            }
        }

        // xử lý lại chuỗi
        modules = modules.substr(0, modules.lastIndexOf("~"));
        songuoidungs = songuoidungs.substr(0, songuoidungs.lastIndexOf("~"));

        // gán lại biến vào data
        data.modules = modules;
        data.songuoidungs = songuoidungs;

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            // hiển thị thông báo
            alert(ser_res);
        });
    });
});

// khi thay đổi tiền
function thay_doi_tien() {
    var ckbModuleId = document.getElementsByName("ckbModuleId");
    var txtSoNguoiDung = document.getElementsByName("txtSoNguoiDung");
    var txtDonGia = document.getElementsByName("txtDonGia");
    var txtThanhTien = document.getElementsByName("txtThanhTien");
    var txtTongTien = document.getElementById("txtTongTien");
    var tongtien = 0;

    for (var i = 0; i < ckbModuleId.length; i++) {
        if (ckbModuleId[i].checked) {
            txtSoNguoiDung[i].readOnly = false;
            txtThanhTien[i].value = parseInt(txtSoNguoiDung[i].value) * parseInt(txtDonGia[i].value);
            tongtien += parseInt(txtThanhTien[i].value);
        } else {
            txtThanhTien[i].value = "";
            txtSoNguoiDung[i].readOnly = true;
            txtSoNguoiDung[i].value = "1";
        }
    }

    txtTongTien.value = tongtien;
}
