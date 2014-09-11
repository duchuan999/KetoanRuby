// hiện step 1 ẩn step 2,3,4
$(document).ready(function () {
    // validation cho form khi click submit
    $("#myForm").validationEngine('attach', {
        promptPosition: "bottomLeft",
        autoPositionUpdate: true,
        showOneMessage: true,
        autoHidePrompt: true,
        onValidationComplete: function (form, status) {
            if (status) {
                var url = "/cyber/register/act_change_step";
                var data = {step: "t", optndtt: $("#optNguoiDungThongThuong").is(':checked')};

                // gửi dữ liệu
                gui_du_lieu(url, data, function (ser_res) {
                    if (ser_res == "1") {
                        // gọi step 1
                        step1();
                    }
                    if (ser_res == "2") {
                        // gọi step 2
                        step2();
                    }
                    if (ser_res == "3") {
                        // gọi step 3
                        step3();
                    }
                    if (ser_res == "ndtt") {
                        // gọi xử lý người dùng thông thường
                        submit_dang_ky_ndtt();
                    }
                    if (ser_res == "cskcb") {
                        // gọi xử lý cơ sở khám chữa bệnh
                        submit_dang_ky_cskcb();
                    }
                });
            }
        }
    });

    // khi load trang đầu tiên thì hiển step1, ẩn step 2,3,4 (gọi step 1)
    step1();

    // step 1 - hiện step 1, ẩn step 2,3,4,5
    function step1() {
        $("#step1").show();
        $("#step2").hide();
        $("#step3").hide();
        $("#step4").hide();
        $("#step5").hide();

        // ẩn button trở lại, hiện button đăng ký, hủy bỏ
        $("#btnTroLai").hide();
        $("#btnHuyBo").show();
        $("#btnDangKy").show();

        // kiểm tra xem checkbox người dùng thông thường có checked ko
        if ($("#optNguoiDungThongThuong").is(':checked')) {
            // có, đổi button tiếp tục thành Gửi yêu cầu đăng ký
            $("#btnDangKy").val("Gửi yêu cầu đăng ký");

            // Ẩn các field CMND, Ngày sinh, Số điện thoại, Địa chỉ, Chức vụ
            $("#trCMND").hide();
            $("#trNgaySinh").hide();
            $("#trDTDD").hide();
            $("#trDiaChi").hide();
            $("#trChucVu").hide();
        }
    }

    // step 2 - hiện step 2, ẩn step 1,3,4,5
    function step2() {
        $("#step1").hide();
        $("#step2").show();
        $("#step3").hide();
        $("#step4").hide();
        $("#step5").hide();

        // hiện thêm button trở lại, tiếp tục, hủy bỏ
        $("#btnTroLai").show();
        $("#btnHuyBo").show();
        $("#btnDangKy").show();

        // đổi button gửi yêu cầu đăng ký thành tiếp tục
        $("#btnDangKy").val("Tiếp tục");
    }

    // step 3 - hiện step 3, ẩn step 1,2,4,5
    function step3() {
        $("#step1").hide();
        $("#step2").hide();
        $("#step3").show();
        $("#step4").hide();
        $("#step5").hide();

        // hiện thêm button trở lại, tiếp tục, hủy bỏ
        $("#btnTroLai").show();
        $("#btnHuyBo").show();
        $("#btnDangKy").show();

        // đổi button tiếp tục thành gửi yêu cầu đăng ký
        $("#btnDangKy").val("Gửi yêu cầu đăng ký");
    }

    // step 4 (thành công) - hiện step 4, ẩn step 1,2,3,5
    function step4() {
        $("#step1").hide();
        $("#step2").hide();
        $("#step3").hide();
        $("#step4").show();
        $("#step5").hide();

        // ẩn 3 button trở lại, hủy bỏ, tiếp tục (gửi yêu cầu đăng ký)
        $("#myForm .return").hide();
    }

    // step 5 (lỗi) - hiện step 5, ẩn step 1,2,3,4
    function step5() {
        $("#step1").hide();
        $("#step2").hide();
        $("#step3").hide();
        $("#step4").hide();
        $("#step5").show();

        // ẩn 3 button trở lại, hủy bỏ, tiếp tục (gửi yêu cầu đăng ký)
        $("#myForm .return").hide();
    }

    // submit dữ liệu lên server phần người dùng thông thường
    function submit_dang_ky_ndtt() {
        var url = "/cyber/register/act_dang_ky_ndtt";
        var data = {
            hoten: $("#txtHoTen").val(),
            tendangnhap: $("#txtTenDangNhap").val(),
            matkhau: $("#txtMatKhau").val(),
            email: $("#txtEmail").val()
        };

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            if (ser_res == "tc") {
                // gọi step 4
                step4();
            }
            if (ser_res == "tb") {
                // gọi step 5
                step5();
            }
        });
    }

    // submit dữ liệu lên server phần cơ sở kcb
    function submit_dang_ky_cskcb() {
        var url = "/cyber/register/act_dang_ky_cskcb";
        var data = {
            hoten: $("#txtHoTen").val(),
            tendangnhap: $("#txtTenDangNhap").val(),
            matkhau: $("#txtMatKhau").val(),
            email: $("#txtEmail").val(),
            cmnd: $("#txtCMND").val(),
            ngaysinh: $("#txtNgaySinh").val(),
            dtdd: $("#txtDTDD").val(),
            diachi: $("#txtDiaChi").val(),
            chucvu: $("#txtChucVu").val(),
            tenvien: $("#txtTenKCB").attr("tenvienid"),
            modules: '',
            songuoidungs: ''
        };
        var modules = "";
        var songuoidungs = "";

        var ckbModuleIds = document.getElementsByName("ckbModuleId");
        var txtSoNguoiDungs = document.getElementsByName("txtSoNguoiDung");

        for (var i = 0; i < ckbModuleIds.length; i++) {
            if (ckbModuleIds[i].checked) {
                modules += ckbModuleIds[i].value + "~";
                songuoidungs += txtSoNguoiDungs[i].value + "~";
            }
        }
        modules = modules.substr(0, modules.lastIndexOf("~"));
        songuoidungs = songuoidungs.substr(0, songuoidungs.lastIndexOf("~"));

        data.modules = modules;
        data.songuoidungs = songuoidungs;

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            if (ser_res == "tc") {
                // gọi step 4
                step4();
            }
            if (ser_res == "tb") {
                // gọi step 5
                step5();
            }
        });
    }

    // sự kiện ko khi click check người dùng thông thường
    $("#optNguoiDungThongThuong").click(function () {
        // Ẩn các field CMND, Ngày sinh, Số điện thoại, Địa chỉ, Chức vụ
        $("#trCMND").hide();
        $("#trNgaySinh").hide();
        $("#trDTDD").hide();
        $("#trDiaChi").hide();
        $("#trChucVu").hide();

        // ẩn button trở lại, hiện button hủy bỏ, đăng ky
        $("#btnTroLai").hide();
        $("#btnDangKy").show();
        $("#btnHuyBo").show();

        // đổi tên button tiếp tục thành gửi yêu cầu đăng ký
        $("#btnDangKy").val("Gửi yêu cầu đăng ký");
    });

    // sự kiện khi click check cơ sở khám chữa bệnh
    $("#optCoSoKhamChuaBenh").click(function () {
        // Hiện các field số CMND, Ngày sinh, Số điện thoại, Địa chỉ, Chức vụ
        $("#trCMND").show();
        $("#trNgaySinh").show();
        $("#trDTDD").show();
        $("#trDiaChi").show();
        $("#trChucVu").show();

        // ẩn button trở lại, hiện button hủy bỏ, đăng ky
        $("#btnTroLai").hide();
        $("#btnDangKy").show();
        $("#btnHuyBo").show();

        // đổi tên button gửi yêu cầu đăng ký thành tiếp tục
        $("#btnDangKy").val("Tiếp tục");
    });

    // sự kiện khi click button trở lại
    $("#btnTroLai").click(function () {
        var url = "/cyber/register/act_change_step";
        var data = {step: "g"};

        // gửi dữ liệu
        gui_du_lieu(url, data, function (ser_res) {
            if (ser_res == "1") {
                // gọi step 1
                step1();
            }
            if (ser_res == "2") {
                // gọi step 2
                step2();
            }
            if (ser_res == "3") {
                // gọi step 3
                step3();
            }
        });
    });

    // sự kiện khi click button hủy bỏ
    $("#btnHuyBo").click(function () {
        //khi nhan huy bo chuyen den trang login
        window.location.href = "/cyber/login/index";
    });

    // sự kiện blur của input tên đăng nhập
    $("#txtTenDangNhap").blur(function () {
        // khai báo tham số
        var url = '/cyber/register/act_kiem_tra_ten_dang_nhap';
        var data = {tendangnhap: $(this).val()};

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            if (ser_res != "") {
                // đã tồn tại, thông báo
                alert(ser_res)
            }
        });
    });

    // sự kiện blur của input email
    $("#txtEmail").blur(function () {
        // khai báo tham số
        var url = '/cyber/register/act_kiem_tra_email';
        var data = {email: $(this).val()};

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            if (ser_res != "") {
                // đã tồn tại, thông báo
                alert(ser_res)
            }
        });
    });

    // sự kiện focus của input tỉnh thành
    $("#txtTinhThanh").focus(function () {
        // định nghĩa tiêu đề, content
        var tieude = "Tỉnh/TP~Vùng~Mã";
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện keyup của input tỉnh thành
    $("#txtTinhThanh").keyup(function () {
        // định nghĩa tham số
        var id = this;
        // key trước rùi value
        var keyvalue = "2~0";
        var cols = "tinhtp~vung~ma";
        var url = "/cyber/register/act_loc_tinh_thanh";
        var data = {tentt: $(this).val()};

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, ser_res, function (self) {

            });
        });
    });

    // sự kiên focus input quận huyện
    $("#txtQuanHuyen").focus(function () {
        // định nghĩa tiêu đề, content
        var tieude = "Quận/Huyện~Tỉnh/TP~Vùng~Mã";
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện keyup của input quận huyện
    $("#txtQuanHuyen").keyup(function () {
        // định nghĩa tham số
        var id = this;
        // key trước rùi value
        var keyvalue = "3~0";
        var cols = "quanhuyen~tinhtp~vung~ma";
        var url = "/cyber/register/act_loc_quan_huyen";
        var data = {matt: $("#txtTinhThanh").attr("key"), tenqh: $(this).val()};

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, ser_res, function (self) {

            });
        });
    });

    // sự kiên focus input phường xã
    $("#txtPhuongXa").focus(function () {
        // định nghĩa tiêu đề, content
        var tieude = "Phường/Xã~Quận/Huyện~Tỉnh/TP~Vùng~Mã";
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện keyup của input phường xã
    $("#txtPhuongXa").keyup(function () {
        // định nghĩa tham số
        var id = this;
        // key trước rùi value
        var keyvalue = "4~0";
        var cols = "phuongxa~quanhuyen~tinhtp~viettat~ma";
        var url = "/cyber/register/act_loc_phuong_xa";
        var data = {maquan: $("#txtQuanHuyen").attr("key"), tenpxa: $(this).val()};

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, ser_res, function (self) {

            });
        });
    });

    // sự kiên focus input danh mục kcb
    $("#txtDanhMucKCB").focus(function () {
        // định nghĩa tiêu đề, content
        var tieude = "Tên tuyến~Mã tuyến";
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện keyup của input danh mục kcb
    $("#txtDanhMucKCB").keyup(function () {
        // định nghĩa tham số
        var id = this;
        // key trước rùi value
        var keyvalue = "1~0";
        var cols = "tentuyen~ma";
        var url = "/cyber/register/act_loc_tuyen_bv";
        var data = {tentuyen: $(this).val()};

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, ser_res, function (self) {

            });
        });
    });

    // sự kiên focus input tên viện
    $("#txtTenKCB").focus(function () {
        // định nghĩa tiêu đề, content
        var tieude = "Tên cơ sở~Địa chỉ~Mã cơ sở";
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện keyup của input tên viện
    $("#txtTenKCB").keyup(function () {
        // định nghĩa tham số
        var id = this;
        // key trước rùi value
        var keyvalue = "3~0";
        var cols = "tenvien~diachi~[dienthoai]~ma";
        var url = "/cyber/register/act_loc_ten_vien";
        var data = {
            matt: $("#txtTinhThanh").attr("key"),
            maquan: $("#txtQuanHuyen").attr("key"),
            maxa: $("#txtPhuongXa").attr("key"),
            matuyen: $("#txtDanhMucKCB").attr("key"),
            tenv: $(this).val()
        };

        // gửi dữ liệu đến server
        gui_du_lieu(url, data, function (ser_res) {
            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, ser_res, function (self) {
                // 1, 2 la ung voi cols hien thi
                $("#txtSoNhaDuong").val($(self).children().eq(1).text());
                $("#txtDienThoaiLienHe").val($(self).children().eq(2).text());
            });
        });
    });
});

// Sự kiện add slash, kiểm tra ngày/tháng/năm
function addSlashes(input) {
    var v = input.value;
    if (v.match(/^\d{2}$/) !== null) {
        input.value = v + '/';
    } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
        input.value = v + '/';
    }
}

$(function () {
    $('#btnDangKy').bind('click', function () {
        var txtVal = $('#txtNgaySinh').val();
        if (isDate(txtVal))
            return true
        else
            $('#txtNgaySinh').val('01/01/1900');
    });

    function isDate(txtNgaySinh) {
        var currVal = txtNgaySinh;
        if (currVal == '')
            return false;

        var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
        var dtArray = currVal.match(rxDatePattern);

        if (dtArray == null)
            return false;

        // Kiểm tra ngày/tháng/năm.
        dtDay = dtArray[1];
        dtMonth = dtArray[3];
        dtYear = dtArray[5];
        console.log(dtYear);

        // Giới hạn giá trị của năm, nếu nhỏ hơn năm 1900 thì trả về false.
        if (dtYear < 1900) {
            return false;
        }

        if (dtDay < 1 || dtDay > 31)
            return false;
        else if (dtMonth < 1 || dtMonth > 12)
            return false;
        else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
            return false;
        else if (dtMonth == 2) {
            var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
            if (dtDay > 29 || (dtDay == 29 && !isleap))
                return false;
        }
        return true;
    }
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
