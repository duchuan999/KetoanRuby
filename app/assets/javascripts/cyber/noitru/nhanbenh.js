// khai báo biến toàn cục
var g_maql = '';
var g_bhyt_id = '';
var g_mabn = '';
var g_is_mabn = false;
var g_is_sua = false;
var g_is_nguoibenhmoi = true;
var g_is_dangkymoi = false;

$(document).ready(function () {
    // sự kiện khi tải web xong, hiện thông tin hành chánh, đối tượng, vào viện, ẩn đi bổ sung, liên hệ, quan hệ
    hide_thong_tin_hanh_chanh(false);
    hide_thong_tin_doi_tuong(false);
    hide_thong_tin_vao_vien(false);
    hide_thong_tin_bo_sung(true);
    hide_thong_tin_lien_he(true);
    hide_thong_tin_quan_he(true);

    // ẩn btn người bệnh mới, đăng ký mới, sửa, xóa, in, hiện lưu, bỏ qua
    $('#btnNguoibenhmoi').attr('disabled', true);
    $('#btnDangkymoi').attr('disabled', true);
    $('#btnLuu').attr('disabled', false);
    $('#btnBoqua').attr('disabled', false);
    $('#btnSua').attr('disabled', true);
    $('#btnXoa').attr('disabled', true);
    $('#btnIn').attr('disabled', true);

    // sự kiện khi click vào checkbox thông tin bổ sung
    $('#cbThongtinbosung').click(function () {
        if ($(this).is(':checked')) {
            hide_thong_tin_bo_sung(false)
        } else {
            hide_thong_tin_bo_sung(true);
        }
    });

    // sự kiện khi click vào checkbox thông tin liên hệ
    $('#cbThongtinlienhe').click(function () {
        if ($(this).is(':checked')) {
            hide_thong_tin_lien_he(false)
        } else {
            hide_thong_tin_lien_he(true);
        }
    });

    // sự kiện khi click vào checkbox thông tin liên hệ
    $('#cbThongtinquanhe').click(function () {
        if ($(this).is(':checked')) {
            hide_thong_tin_quan_he(false)
        } else {
            hide_thong_tin_quan_he(true);
        }
    });

    // sự kiện di chuyển trỏ chuột khỏi textbox mã bn
    $('#txtMabn').blur(function () {
        // khai báo url và data
        var url = '/cyber/noitru/nhanbenh/act_lay_thong_tin_nhan_benh';
        var data = {mabn: $(this).val().toString()};

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // tìm thấy, chuyển đổi kiểu json
            var res_temp = JSON.parse(res);

            // kiểm tra xem data server gửi về là kiểu gì nếu kiểu json là tìm thấy mabn, ngược lại là k
            if (typeof res_temp == 'object') {
                // gán thuộc tính tìm thấy mabn
                g_mabn = res_temp.mabn;
                g_is_mabn = true;

                // gán dữ liệu vào các textbox
                // thông tin hành chánh
                $('#txtHoten').val(chuyen_doi_gia_tri(res_temp.hoten));
                $('#txtGioitinh').attr('key', chuyen_doi_gia_tri(res_temp.phai_id));
                $('#txtGioitinh').val(chuyen_doi_gia_tri(res_temp.phai));
                $('#txtNgaysinh').val(chuyen_doi_gia_tri(res_temp.ngaysinh));
                $('#txtNamsinh').val(chuyen_doi_gia_tri(res_temp.namsinh));
                $('#txtTuoi').val(new Date().getFullYear() - eval($('#txtNamsinh').val()));
                $('#spanTuoi').text();
                $('#txtSonhaduong').val(chuyen_doi_gia_tri(res_temp.sonha) + ' ' + chuyen_doi_gia_tri(res_temp.thon));
                $('#txtTinhtp').attr('key', chuyen_doi_gia_tri(res_temp.tinh_id));
                $('#txtTinhtp').val(chuyen_doi_gia_tri(res_temp.tinh));
                $('#txtQuanhuyen').attr('key', chuyen_doi_gia_tri(res_temp.quan_id));
                $('#txtQuanhuyen').val(chuyen_doi_gia_tri(res_temp.quan));
                $('#txtPhuongxa').attr('key', chuyen_doi_gia_tri(res_temp.xa_id));
                $('#txtPhuongxa').val(chuyen_doi_gia_tri(res_temp.xa));

                // thông tin đối tượng
                $('#txtDoituong').attr('key', chuyen_doi_gia_tri(res_temp.doituong_id));
                $('#txtDoituong').val(chuyen_doi_gia_tri(res_temp.doituong));
                $('#txtMabhyt').val(chuyen_doi_gia_tri(res_temp.bh_sothe));
                $('#txtTuyen').attr('key', chuyen_doi_gia_tri(res_temp.bh_traituyen_id));
                $('#txtTuyen').val(chuyen_doi_gia_tri(res_temp.bh_traituyen));
                $('#txtGiatritungay').val(chuyen_doi_gia_tri(res_temp.bh_tungay));
                $('#txtDenngay').val(chuyen_doi_gia_tri(res_temp.bh_denngay));
                $('#txtHuongktc').val(chuyen_doi_gia_tri(res_temp.bh_ngayktc));
                $('#txtThaisantu').val(chuyen_doi_gia_tri(res_temp.bh_ngayts));
                $('#txtUngthutu').val(chuyen_doi_gia_tri(res_temp.bh_ngayut));
                $('#txtNoidkkcbbd').attr('key', chuyen_doi_gia_tri(res_temp.bh_tenvien_id));
                $('#txtNoidkkcbbd').val(chuyen_doi_gia_tri(res_temp.bh_tenvien));

                // thông tin vào viện
                var ngayvaovien = '';
                var gio = '';
                if (res_temp.ngayud != null) {
                    ngayvaovien = res_temp.ngayud.toString().substr(0, 10);
                    gio = res_temp.ngayud.toString().substr(11, 5);
                }
                $('#txtNgayvaovien').val(ngayvaovien);
                $('#txtGio').val(gio);
                $('#txtNhantu').attr('key', chuyen_doi_gia_tri(res_temp.nhantu_id));
                $('#txtNhantu').val(chuyen_doi_gia_tri(res_temp.nhantu));
                $('#txtDentu').attr('key', chuyen_doi_gia_tri(res_temp.dentu_id));
                $('#txtDentu').val(chuyen_doi_gia_tri(res_temp.dentu));
                $('#txtNoigioithieu').attr('key', chuyen_doi_gia_tri(res_temp.noigioithieu_tenvien_id));
                $('#txtNoigioithieu').val(chuyen_doi_gia_tri(res_temp.noigioithieu_tenvien));
                $('#txtLan').val(chuyen_doi_gia_tri(res_temp.lanthu));
                $('#txtSovaovien').val(chuyen_doi_gia_tri(res_temp.sovaovien));
                $('#txtKhoa').attr('key', chuyen_doi_gia_tri(res_temp.khoa_id));
                $('#txtKhoa').val(chuyen_doi_gia_tri(res_temp.khoa));
                $('#txtBacsi').attr('key', chuyen_doi_gia_tri(res_temp.bacsi_id));
                $('#txtBacsi').val(chuyen_doi_gia_tri(res_temp.bacsi));
                $('#txtMachandoanbenh').attr('key', chuyen_doi_gia_tri(res_temp.maicd_id));
                $('#txtMachandoanbenh').val(chuyen_doi_gia_tri(res_temp.maicd));
                $('#txtTenchandoanbenh').attr('key', chuyen_doi_gia_tri(res_temp.maicd_id));
                $('#txtTenchandoanbenh').val(chuyen_doi_gia_tri(res_temp.chandoan));

                // thông tin bổ sung
                $('#txtNghenghiep').attr('key', chuyen_doi_gia_tri(res_temp.nghenghiep_id));
                $('#txtNghenghiep').val(chuyen_doi_gia_tri(res_temp.nghenghiep));
                $('#txtDantoc').attr('key', chuyen_doi_gia_tri(res_temp.dantoc_id));
                $('#txtDantoc').val(chuyen_doi_gia_tri(res_temp.dantoc));
                $('#txtQuocgia').attr('key', chuyen_doi_gia_tri(res_temp.quocgia_id));
                $('#txtQuocgia').val(chuyen_doi_gia_tri(res_temp.quocgia));
                $('#txtNhommau').attr('key', chuyen_doi_gia_tri(res_temp.nhommau_id));
                $('#txtNhommau').val(chuyen_doi_gia_tri(res_temp.nhommau));
                $('#txtMacmnd').val(chuyen_doi_gia_tri(res_temp.macmnd));
                $('#txtMabhxh').val(chuyen_doi_gia_tri(res_temp.mabhyt));

                // thông tin liên hệ
                $('#txtDtnha').val(chuyen_doi_gia_tri(res_temp.lh_lh_dtnha));
                $('#txtDtcoquan').val(chuyen_doi_gia_tri(res_temp.lh_lh_dtcq));
                $('#txtDtdidong').val(chuyen_doi_gia_tri(res_temp.lh_lh_dtdd));
                $('#txtEmail').val(chuyen_doi_gia_tri(res_temp.lh_lh_email));
                $('#txtCholam').val(chuyen_doi_gia_tri(res_temp.lh_cholam));

                // thông tin quan hệ
                $('#txtQuanhe').val(chuyen_doi_gia_tri(res_temp.qh_ten));
                $('#txtHovaten').val(chuyen_doi_gia_tri(res_temp.qh_hoten));
                $('#txtDiachi').val(chuyen_doi_gia_tri(res_temp.qh_diachi));
                $('#txtDienthoai').val(chuyen_doi_gia_tri(res_temp.qk_dienthoai));

                // ẩn đi tất cả các form
                hide_thong_tin_hanh_chanh(true);
                hide_thong_tin_doi_tuong(true);
                hide_thong_tin_vao_vien(true);
                hide_thong_tin_bo_sung(true);
                hide_thong_tin_lien_he(true);
                hide_thong_tin_quan_he(true);

                // hiện btn người bệnh mới, đăng ký mới, sửa, xóa, in, ẩn lưu, bỏ qua
                $('#btnNguoibenhmoi').attr('disabled', false);
                $('#btnDangkymoi').attr('disabled', false);
                $('#btnLuu').attr('disabled', true);
                $('#btnBoqua').attr('disabled', true);
                $('#btnSua').attr('disabled', true);
                $('#btnXoa').attr('disabled', true);
                $('#btnIn').attr('disabled', true);
            }
            else {
                // reset lại giá trị cho các textbox
                reset_gia_tri_thong_tin_hanh_chanh();
                reset_gia_tri_thong_tin_doi_tuong();
                reset_gia_tri_thong_tin_vao_vien();
                reset_gia_tri_thong_tin_bo_sung();
                reset_gia_tri_thong_tin_lien_he();
                reset_gia_tri_thong_tin_quan_he();

                // gán thuộc tính vào ko tìm thấy
                g_is_mabn = false;

                // k tìm thấy, cấp số tự động cho txtbox mabn
                $('#txtMabn').val(res_temp.toString());
            }
        });
    });

    // sự kiện khi click vào calander ngày sinh
    $('#txtNgaysinh').datepicker({dateFormat: 'dd/mm/yy'});

    // sự kiện khi click vào calander giá trị từ ngày
    $('#txtGiatritungay').datepicker({dateFormat: 'dd/mm/yy'});

    // sự kiện khi click vào calander giá trị đến ngày
    $('#txtDenngay').datepicker({dateFormat: 'dd/mm/yy'});

    // sự kiện khi click vào calander giá trị hưởng ktc
    $('#txtHuongktc').datepicker({dateFormat: 'dd/mm/yy'});

    // sự kiện khi click vào calander giá trị thai sản từ
    $('#txtThaisantu').datepicker({dateFormat: 'dd/mm/yy'});

    // sự kiện khi click vào calander giá trị ung thư từ
    $('#txtUngthutu').datepicker({dateFormat: 'dd/mm/yy'});

    // sự kiện khi click vào calander giá trị ngày vào viện
    $('#txtNgayvaovien').datepicker({dateFormat: 'dd/mm/yy'});

    // sự kiện khi click vào txtbox giới tính
    $('#txtGioitinh').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Giới tính~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtGioitinh').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_gioi_tinh';
        var data = {tengt: $(this).val()};

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtGioitinh');
            var keyvalue = '1~0';
            var cols = 'ten~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện khi click vào txtbox tỉnh thành phố
    $('#txtTinhtp').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Tỉnh/TP~Vùng~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtTinhtp').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_ten_tinh_thanh_pho';
        var data = {tentp: $(this).val()};

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtTinhtp');
            var keyvalue = '2~0';
            var cols = 'tentt~vungbv~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện khi click vào txtbox quận huyện
    $('#txtQuanhuyen').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Quận/Huyện~Tỉnh/TP~Vùng~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtQuanhuyen').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_ten_quan_huyen';
        var data = {
            tenqh: $(this).val(),
            matt: $('#txtTinhtp').attr('key')
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtQuanhuyen');
            var keyvalue = '4~0';
            var cols = 'tenqh~[tt_id]~tentt~vungbv~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
                // kiểm tra xem quận có chọn chưa
                if ($('#txtTinhtp').attr('key') == '' || $('#txtTinhtp').attr('key') == null) {
                    // tỉnh thành chưa đc chọn, gán giá trị tỉnh thành
                    $('#txtTinhtp').attr('key', $(self).children().eq(1).text());
                    $('#txtTinhtp').val($(self).children().eq(2).text());
                }
            });
        });
    });

    // sự kiện khi click vào txtbox phường xã
    $('#txtPhuongxa').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Phường/Xã~Quận/Huyện~Tỉnh/TP~TQX~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtPhuongxa').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_ten_phuong_xa';
        var data = {
            tenpxa: $(this).val(),
            maquan: $('#txtQuanhuyen').attr('key'),
            matt: $('#txtTinhtp').attr('key')
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtPhuongxa');
            var keyvalue = '6~0';
            var cols = 'tenxa~[quan_id]~tenqh~[tt_id]~tentt~viettat~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
                // kiểm tra xem quận huyện có đc chọn k
                if ($('#txtQuanhuyen').attr('key') == '' || $('#txtQuanhuyen').attr('key') == null) {
                    // quận huyện chưa có giá trị, gán giá trị vào
                    $('#txtQuanhuyen').attr('key', $(self).children().eq(1).text());
                    $('#txtQuanhuyen').val($(self).children().eq(2).text());
                }

                // kiểm tra xem tỉnh thành có đc chọn k
                if ($('#txtTinhtp').attr('key') == '' || $('#txtTinhtp').attr('key') == null) {
                    // quận huyện chưa có giá trị, gán giá trị vào
                    $('#txtTinhtp').attr('key', $(self).children().eq(3).text());
                    $('#txtTinhtp').val($(self).children().eq(4).text());
                }
            });
        });
    });

    // sự kiện khi click vào txtbox đối tượng
    $('#txtDoituong').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Đối tượng~Mã~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtDoituong').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_doi_tuong';
        var data = {
            tendt: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtDoituong');
            var keyvalue = '2~0';
            var cols = 'tendt~ma~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện khi click vào txtbox trái tuyến
    $('#txtTuyen').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Tuyến~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtTuyen').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_danh_muc_trai_tuyen';
        var data = {
            tent: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtTuyen');
            var keyvalue = '1~0';
            var cols = 'tent~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện khi click vào textbox nơi đkkcbbd
    $('#txtNoidkkcbbd').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Tên cơ sở y tế~Phường/xã~Quận/huyện~Tỉnh/tp~Mã bhyt~Mã~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào textbox
    $('#txtNoidkkcbbd').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_ten_vien_theo_ten';
        var data = {
            tenv: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtNoidkkcbbd');
            var keyvalue = '6~0';
            var cols = 'tenvien~tenxa~tenquan~tentt~mabh~ma~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện khi click vào txtbox nhận từ
    $('#txtNhantu').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Nhận từ~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtNhantu').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_nhan_tu';
        var data = {
            nt: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtNhantu');
            var keyvalue = '1~0';
            var cols = 'tennt~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện khi click vào txtbox đến từ
    $('#txtDentu').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Nhận từ~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtDentu').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_den_tu';
        var data = {
            dt: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtDentu');
            var keyvalue = '1~0';
            var cols = 'tendt~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện khi click vào txtbox khoa
    $('#txtKhoa').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Khoa phòng~Tên báo cáo bộ~Phân loại~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtKhoa').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_khoa_phong';
        var data = {
            tenkp: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtKhoa');
            var keyvalue = '3~0';
            var cols = 'tenkp~baocaobo~phanloai~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện khi click vào txtbox nơi giới thiệu
    $('#txtNoigioithieu').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Mã~Tên cơ sở y tế~Địa chỉ~Phường/xã~Quận huyện~Tỉnh/tp~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập đữ liệu vào
    $('#txtNoigioithieu').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_ten_vien_theo_ten';
        var data = {
            tenv: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtNoigioithieu');
            var keyvalue = '6~1';
            var cols = 'ma~tenvien~diachi~tenxa~tenquan~tentt~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện khi di chuyển rời khởi textbox số vào viện
    $('#txtSovaovien').blur(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_so_vao_vien_tu_dong';
        var data = {};

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // gán số vào viện vào textbox
            $('#txtSovaovien').val(res);
        });
    });

    // sự kiện khi click vào txtbox bác sĩ
    $('#txtBacsi').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Họ tên~Ngày sinh~Giới tính~Nhóm nhân viên~Mã~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtBacsi').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_bac_si';
        var data = {
            tenbs: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtBacsi');
            var keyvalue = '5~0';
            var cols = 'hoten~ngaysinh~gioitinh~nhom~ma~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện khi click vào txtbox mã chẩn đoán bệnh
    $('#txtMachandoanbenh').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Mã Icd~Tên bệnh~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtMachandoanbenh').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_ma_icd';
        var data = {
            maicd: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtMachandoanbenh');
            var keyvalue = '2~0';
            var cols = 'ma~tenicd~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
                // điền dữ liệu vào txtbox tên chẩn đoán bệnh
                $('#txtTenchandoanbenh').attr('key', $(self).children().eq(2).text())
                $('#txtTenchandoanbenh').val($(self).children().eq(1).text())
            });
        });
    });

    // sự kiện khi click vào txtbox tên chẩn đoán bệnh
    $('#txtTenchandoanbenh').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Mã Icd~Tên bệnh~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtTenchandoanbenh').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_ten_icd';
        var data = {
            tenicd: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtTenchandoanbenh');
            var keyvalue = '2~1';
            var cols = 'ma~tenicd~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
                // điền dữ liệu vào txtbox tên chẩn đoán bệnh
                $('#txtMachandoanbenh').attr('key', $(self).children().eq(2).text())
                $('#txtMachandoanbenh').val($(self).children().eq(0).text())
            });
        });
    });

    // sự kiện khi click vào txtbox nghề nghiệp
    $('#txtNghenghiep').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Tên nghề nghiệp~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtNghenghiep').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_nghe_nghiep';
        var data = {
            tennn: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtNghenghiep');
            var keyvalue = '1~0';
            var cols = 'tennn~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện khi click vào txtbox dân tộc
    $('#txtDantoc').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Tên dân tộc~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtDantoc').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_dan_toc';
        var data = {
            tendt: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtDantoc');
            var keyvalue = '1~0';
            var cols = 'tendt~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện khi click vào txtbox quốc gia
    $('#txtQuocgia').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Quốc gia~Mã~ISO~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtQuocgia').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_quoc_gia';
        var data = {
            tenqg: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtQuocgia');
            var keyvalue = '3~0';
            var cols = 'tenqg~ma~iso~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện khi click vào txtbox nhóm máu
    $('#txtNhommau').click(function () {
        // khai báo tiêu đề form
        var tieude = 'Nhóm máu~ID';

        // khai báo tag chứa form gợi ý
        var content = this;

        // hiển thị form gợi ý
        form_goi_y(tieude, content);

        // gọi thêm sự kiện keyup
        $(this).trigger('keyup');
    });

    // sự kiện khi nhập dữ liệu vào
    $('#txtNhommau').keyup(function () {
        // khai báo url và data
        var url = '/cyber/dungchung/cdungchung/act_tim_kiem_nhom_mau';
        var data = {
            tennm: $(this).val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // khai báo
            var id = $('#txtNhommau');
            var keyvalue = '1~0';
            var cols = 'tennm~id';

            // điền dữ liệu vào form gợi ý
            dien_du_lieu_dang_table(id, keyvalue, cols, res, function (self) {
            });
        });
    });

    // sự kiện cho nút người bệnh mới
    $('#btnNguoibenhmoi').click(function () {
        // ẩn btn người bệnh mới, đăng ký mới, sửa, xóa, in, hiện lưu, bỏ qua
        $('#btnNguoibenhmoi').attr('disabled', true);
        $('#btnDangkymoi').attr('disabled', true);
        $('#btnLuu').attr('disabled', false);
        $('#btnBoqua').attr('disabled', false);
        $('#btnSua').attr('disabled', true);
        $('#btnXoa').attr('disabled', true);
        $('#btnIn').attr('disabled', true);

        // hiển thị form thông tin hành chánh
        hide_thong_tin_hanh_chanh(false);

        // form thông tin đối tượng
        hide_thong_tin_doi_tuong(false);

        // form thông tin vào viện
        hide_thong_tin_vao_vien(false);

        // form thông tin bổ sung
        hide_thong_tin_bo_sung(true);

        // form thông tin liên hệ
        hide_thong_tin_lien_he(true);

        // form thông tin quan hệ
        hide_thong_tin_quan_he(true);

        // reset lại giá trị cho các textbox
        reset_gia_tri_thong_tin_hanh_chanh();
        reset_gia_tri_thong_tin_doi_tuong();
        reset_gia_tri_thong_tin_vao_vien();
        reset_gia_tri_thong_tin_bo_sung();
        reset_gia_tri_thong_tin_lien_he();
        reset_gia_tri_thong_tin_quan_he();

        // reset giá trị trạng thái
        reset_gia_tri_trang_thai();

        // reset giá trị mã bệnh nhân
        g_mabn = '';

        // thiết lập trạng thái người bệnh mới
        g_is_nguoibenhmoi = true;
    });

    // sự kiện khi click nút đăng ký mới
    $('#btnDangkymoi').click(function () {
        // ẩn btn người bệnh mới, đăng ký mới, sửa, xóa, in, hiện lưu, bỏ qua
        $('#btnNguoibenhmoi').attr('disabled', true);
        $('#btnDangkymoi').attr('disabled', true);
        $('#btnLuu').attr('disabled', false);
        $('#btnBoqua').attr('disabled', false);
        $('#btnSua').attr('disabled', true);
        $('#btnXoa').attr('disabled', true);
        $('#btnIn').attr('disabled', true);

        // hiển thị form thông tin hành chánh
        hide_thong_tin_hanh_chanh(false);

        // form thông tin đối tượng
        hide_thong_tin_doi_tuong(false);

        // form thông tin vào viện
        hide_thong_tin_vao_vien(false);

        // reset giá trị form thông tin vào viện
        reset_gia_tri_thong_tin_vao_vien();

        // reset giá trị trạng thái
        reset_gia_tri_trang_thai();

        // reset lại giá trị mã bn
        g_mabn = '';

        // thiết lập trạng thái người bệnh mới
        g_is_dangkymoi = true;
    });

    // sự kiện khic click nút lưu
    $('#btnLuu').click(function () {
        // hiện btn người bệnh mới, đăng ký mới, sửa, xóa, in, ẩn lưu, bỏ qua
        $('#btnNguoibenhmoi').attr('disabled', false);
        $('#btnDangkymoi').attr('disabled', false);
        $('#btnLuu').attr('disabled', true);
        $('#btnBoqua').attr('disabled', true);
        $('#btnSua').attr('disabled', true);
        $('#btnXoa').attr('disabled', true);
        $('#btnIn').attr('disabled', true);

        // khai báo url và data
        var url = '';
        var data = {};

        // kiểm tra xem đang ở trạng thái người bệnh mới
        if (g_is_nguoibenhmoi) {
            // thêm mới nhận bệnh
            url = '/cyber/noitru/nhanbenh/act_them_nhan_benh';
            data = {
                // thông tin hành chánh
                mabn: $('#txtMabn').val(),
                hoten: $('#txtHoten').val(),
                gioitinh: $('#txtGioitinh').attr('key'),
                ngaysinh: $('#txtNgaysinh').val(),
                namsinh: $('#txtNamsinh').val(),
                sonha: $('#txtSonhaduong').val(),
                tinhtp: $('#txtTinhtp').attr('key'),
                quanhuyen: $('#txtQuanhuyen').attr('key'),
                phuongxa: $('#txtPhuongxa').attr('key'),
                // thông tin đối tượng
                doituong: $('#txtDoituong').attr('key'),
                mabhyt: $('#txtMabhyt').val(),
                tuyen: $('#txtTuyen').attr('key'),
                giatritu: $('#txtGiatritungay').val(),
                denngay: $('#txtDenngay').val(),
                huongktc: $('#txtHuongktc').val(),
                thaisantu: $('#txtThaisantu').val(),
                ungthutu: $('#txtUngthutu').val(),
                noidkkcbbd: $('#txtNoidkkcbbd').attr('key'),
                // thông tin vào viện
                ngayvaovien: $('#txtNgayvaovien').val(),
                giovaovien: $('#txtGio').val(),
                nhantu: $('#txtNhantu').attr('key'),
                dentu: $('#txtDentu').attr('key'),
                noigioithieu: $('#txtNoigioithieu').attr('key'),
                lan: $('#txtLan').val(),
                sovaovien: $('#txtSovaovien').val(),
                khoa: $('#txtKhoa').attr('key'),
                bacsi: $('#txtBacsi').attr('key'),
                maicd: $('#txtMachandoanbenh').attr('key'),
                chandoan: $('#txtTenchandoanbenh').val(),
                // thông tin bổ sung
                nghenghiep: $('#txtNghenghiep').attr('key'),
                dantoc: $('#txtDantoc').attr('key'),
                quocgia: $('#txtQuocgia').attr('key'),
                nhommau: $('#txtNhommau').attr('key'),
                macmnd: $('#txtMacmnd').val(),
                mabhxh: $('#txtMabhxh').val(),
                // thông tin liên hệ
                lh_dtnha: $('#txtDtnha').val(),
                lh_dtcoquan: $('#txtDtcoquan').val(),
                lh_dtdd: $('#txtDtdidong').val(),
                lh_email: $('#txtEmail').val(),
                lh_cholam: $('#txtCholam').val(),
                // thông tin quan hệ
                qh_ten: $('#txtQuanhe').val(),
                qh_hoten: $('#txtHovaten').val(),
                qh_diachi: $('#txtDiachi').val(),
                qh_dienthoai: $('#txtDienthoai').val()
            };
        }

        // kiểm tra trạng thái đăng ký mới
        if (g_is_dangkymoi) {
            // thêm mới thông tin vào viện
            url = '/cyber/noitru/nhanbenh/act_them_thong_tin_vao_vien';
            data = {
                // thông tin hành chánh
                mabn: $('#txtMabn').val(),

                // thông tin đối tượng
                doituong: $('#txtDoituong').attr('key'),

                // thông tin vào viện
                ngayvaovien: $('#txtNgayvaovien').val(),
                giovaovien: $('#txtGio').val(),
                nhantu: $('#txtNhantu').attr('key'),
                dentu: $('#txtDentu').attr('key'),
                noigioithieu: $('#txtNoigioithieu').attr('key'),
                lan: $('#txtLan').val(),
                sovaovien: $('#txtSovaovien').val(),
                khoa: $('#txtKhoa').attr('key'),
                bacsi: $('#txtBacsi').attr('key'),
                maicd: $('#txtMachandoanbenh').attr('key'),
                chandoan: $('#txtTenchandoanbenh').val()
            };
        }

        // kiểm tra trạng thái sửa
        if (g_is_sua) {
            // cập nhật nhận bệnh
            url = '/cyber/noitru/nhanbenh/act_cap_nhat_nhan_benh';
            data = {
                // thông tin hành chánh
                mabn: $('#txtMabn').val(),
                hoten: $('#txtHoten').val(),
                gioitinh: $('#txtGioitinh').attr('key'),
                ngaysinh: $('#txtNgaysinh').val(),
                namsinh: $('#txtNamsinh').val(),
                sonha: $('#txtSonhaduong').val(),
                tinhtp: $('#txtTinhtp').attr('key'),
                quanhuyen: $('#txtQuanhuyen').attr('key'),
                phuongxa: $('#txtPhuongxa').attr('key'),
                // thông tin đối tượng
                bhyt_id: g_bhyt_id,
                doituong: $('#txtDoituong').attr('key'),
                mabhyt: $('#txtMabhyt').val(),
                tuyen: $('#txtTuyen').attr('key'),
                giatritu: $('#txtGiatritungay').val(),
                denngay: $('#txtDenngay').val(),
                huongktc: $('#txtHuongktc').val(),
                thaisantu: $('#txtThaisantu').val(),
                ungthutu: $('#txtUngthutu').val(),
                noidkkcbbd: $('#txtNoidkkcbbd').attr('key'),
                // thông tin vào viện
                maql: g_maql,
                ngayvaovien: $('#txtNgayvaovien').val(),
                giovaovien: $('#txtGio').val(),
                nhantu: $('#txtNhantu').attr('key'),
                dentu: $('#txtDentu').attr('key'),
                noigioithieu: $('#txtNoigioithieu').attr('key'),
                lan: $('#txtLan').val(),
                sovaovien: $('#txtSovaovien').val(),
                khoa: $('#txtKhoa').attr('key'),
                bacsi: $('#txtBacsi').attr('key'),
                maicd: $('#txtMachandoanbenh').attr('key'),
                chandoan: $('#txtTenchandoanbenh').val(),
                // thông tin bổ sung
                nghenghiep: $('#txtNghenghiep').attr('key'),
                dantoc: $('#txtDantoc').attr('key'),
                quocgia: $('#txtQuocgia').attr('key'),
                nhommau: $('#txtNhommau').attr('key'),
                macmnd: $('#txtMacmnd').val(),
                mabhxh: $('#txtMabhxh').val(),
                // thông tin liên hệ
                lh_dtnha: $('#txtDtnha').val(),
                lh_dtcoquan: $('#txtDtcoquan').val(),
                lh_dtdd: $('#txtDtdidong').val(),
                lh_email: $('#txtEmail').val(),
                lh_cholam: $('#txtCholam').val(),
                // thông tin quan hệ
                qh_ten: $('#txtQuanhe').val(),
                qh_hoten: $('#txtHovaten').val(),
                qh_diachi: $('#txtDiachi').val(),
                qh_dienthoai: $('#txtDienthoai').val()
            };
        }

        // gửi đến server
//        gui_du_lieu(url, data, function (res) {
//            // thông báo
//            alert(res);
//        });
    });

    // sự kiện click nút bỏ qua
    $('#btnBoqua').click(function () {
        // ẩn btn lưu, bỏ qua, sửa, xóa, in hiện người bệnh mới, đăng ký mới
        $('#btnNguoibenhmoi').attr('disabled', false);
        $('#btnDangkymoi').attr('disabled', false);
        $('#btnLuu').attr('disabled', true);
        $('#btnBoqua').attr('disabled', true);
        $('#btnSua').attr('disabled', true);
        $('#btnXoa').attr('disabled', true);
        $('#btnIn').attr('disabled', true);

        // hiển thị form thông tin hành chánh
        hide_thong_tin_hanh_chanh(true);

        // form thông tin đối tượng
        hide_thong_tin_doi_tuong(true);

        // form thông tin vào viện
        hide_thong_tin_vao_vien(true);

        // form thông tin bổ sung
        hide_thong_tin_bo_sung(true);

        // form thông tin liên hệ
        hide_thong_tin_lien_he(true);

        // form thông tin quan hệ
        hide_thong_tin_quan_he(true);
    });

    // sự kiện click nút sửa
    $('#btnSua').click(function () {
        // ẩn btn lưu, bỏ qua, sửa, xóa, in hiện người bệnh mới, đăng ký mới
        $('#btnNguoibenhmoi').attr('disabled', false);
        $('#btnDangkymoi').attr('disabled', false);
        $('#btnLuu').attr('disabled', true);
        $('#btnBoqua').attr('disabled', true);
        $('#btnSua').attr('disabled', false);
        $('#btnXoa').attr('disabled', false);
        $('#btnIn').attr('disabled', false);

        // hiển thị form thông tin hành chánh
        hide_thong_tin_hanh_chanh(false);

        // form thông tin đối tượng
        hide_thong_tin_doi_tuong(false);

        // form thông tin vào viện
        hide_thong_tin_vao_vien(false);

        // form thông tin bổ sung
        hide_thong_tin_bo_sung(true);

        // form thông tin liên hệ
        hide_thong_tin_lien_he(true);

        // form thông tin quan hệ
        hide_thong_tin_quan_he(true);

        // reset giá trị trạng thái
        reset_gia_tri_trang_thai();

        // thiết lập trạng thái người bệnh mới
        g_is_sua = true;
    });

    // sự kiện click nút xóa
    $('#btnXoa').click(function () {

    });

    // sự kiên click nút in
    $('#btnIn').click(function () {

    });

    // sự kiện click nút kết thúc
    $('#btnKetthuc').click(function () {

    });
});

// định nghĩa hàm ẩn hiện các textbox thông tin hành chánh
function hide_thong_tin_hanh_chanh(bool) {
    $('#txtMabn').prop('disabled', bool);
    $('#txtHoten').prop('disabled', bool);
    $('#txtGioitinh').prop('disabled', bool);
    $('#txtNgaysinh').prop('disabled', bool);
    $('#txtNamsinh').prop('disabled', bool);
    $('#txtSonhaduong').prop('disabled', bool);
    $('#txtTuoi').prop('disabled', bool);
    $('#txtTinhtp').prop('disabled', bool);
    $('#txtQuanhuyen').prop('disabled', bool);
    $('#txtPhuongxa').prop('disabled', bool);
}

// định nghĩa hàm ẩn hiện các textbox thông tin đối tượng
function hide_thong_tin_doi_tuong(bool) {
    $('#txtDoituong').prop('disabled', bool);
    $('#txtMabhyt').prop('disabled', bool);
    $('#txtTuyen').prop('disabled', bool);
    $('#txtGiatritungay').prop('disabled', bool);
    $('#txtDenngay').prop('disabled', bool);
    $('#txtHuongktc').prop('disabled', bool);
    $('#txtThaisantu').prop('disabled', bool);
    $('#txtUngthutu').prop('disabled', bool);
    $('#txtNoidkkcbbd').prop('disabled', bool);
}

// định nghĩa hàm ẩn hiện các textbox thông tin vào viện
function hide_thong_tin_vao_vien(bool) {
    $('#txtNgayvaovien').prop('disabled', bool);
    $('#txtGio').prop('disabled', bool);
    $('#txtNhantu').prop('disabled', bool);
    $('#txtDentu').prop('disabled', bool);
    $('#txtNoigioithieu').prop('disabled', bool);
    $('#txtLan').prop('disabled', bool);
    $('#txtSovaovien').prop('disabled', bool);
    $('#txtKhoa').prop('disabled', bool);
    $('#txtBacsi').prop('disabled', bool);
    $('#txtMachandoanbenh').prop('disabled', bool);
    $('#txtTenchandoanbenh').prop('disabled', bool);
}

// hàm định nghĩa ẩn hiện các textbox thông tin bổ sung
function hide_thong_tin_bo_sung(bool) {
    $('#cbThongtinbosung').attr('checked', !bool);
    $('#cbThongtinbosung').prop('disabled', bool);
    $('#txtNghenghiep').prop('disabled', bool);
    $('#txtDantoc').prop('disabled', bool);
    $('#txtQuocgia').prop('disabled', bool);
    $('#txtNhommau').prop('disabled', bool);
    $('#txtMacmnd').prop('disabled', bool);
    $('#txtMabhxh').prop('disabled', bool);
}

// hàm định nghĩa ẩn hiện các textbox thông tin liên hệ
function hide_thong_tin_lien_he(bool) {
    $('#cbThongtinlienhe').attr('checked', !bool);
    $('#cbThongtinlienhe').prop('disabled', bool);
    $('#txtDtnha').prop('disabled', bool);
    $('#txtDtcoquan').prop('disabled', bool);
    $('#txtDtdidong').prop('disabled', bool);
    $('#txtEmail').prop('disabled', bool);
    $('#txtCholam').prop('disabled', bool);
}

// hàm định nghĩa ẩn hiện các textbox thông tin liên hệ
function hide_thong_tin_quan_he(bool) {
    $('#cbThongtinquanhe').attr('checked', !bool);
    $('#cbThongtinquanhe').prop('disabled', bool);
    $('#txtQuanhe').prop('disabled', bool);
    $('#txtHovaten').prop('disabled', bool);
    $('#txtDiachi').prop('disabled', bool);
    $('#txtDienthoai').prop('disabled', bool);
}

// reset giá trị form thông tin hành chánh
function reset_gia_tri_thong_tin_hanh_chanh() {
    // thông tin hành chánh
    $('#txtMabn').val('');
    $('#txtHoten').val('');
    $('#txtGioitinh').attr('key', '');
    $('#txtGioitinh').val('');
    $('#txtNgaysinh').val('');
    $('#txtNamsinh').val('');
    $('#txtTuoi').val('');
    $('#txtSonhaduong').val('');
    $('#txtTinhtp').attr('key', '');
    $('#txtTinhtp').val('');
    $('#txtQuanhuyen').attr('key', '');
    $('#txtQuanhuyen').val('');
    $('#txtPhuongxa').attr('key', '');
    $('#txtPhuongxa').val('');
}

// reset giá trị form thông tin đối tượng
function reset_gia_tri_thong_tin_doi_tuong() {
    // thông tin đối tượng
    $('#txtDoituong').attr('key', '');
    $('#txtDoituong').val('');
    $('#txtMabhyt').val('');
    $('#txtTuyen').attr('key', '');
    $('#txtTuyen').val('');
    $('#txtGiatritungay').val('');
    $('#txtDenngay').val('');
    $('#txtHuongktc').val('');
    $('#txtThaisantu').val('');
    $('#txtUngthutu').val('');
    $('#txtNoidkkcbbd').attr('key', '');
    $('#txtNoidkkcbbd').val('');
}

// reset giá trị form thông tin vào viện
function reset_gia_tri_thong_tin_vao_vien() {
    // thông tin vào viện
    $('#txtNgayvaovien').val('');
    $('#txtGio').val('');
    $('#txtNhantu').val('');
    $('#txtDentu').val('');
    $('#txtNoigioithieu').val('');
    $('#txtLan').val('');
    $('#txtSovaovien').val('');
    $('#txtKhoa').attr('key', '');
    $('#txtKhoa').val('');
    $('#txtBacsi').val('');
    $('#txtMachandoanbenh').attr('');
    $('#txtMachandoanbenh').val('');
    $('#txtTenchandoanbenh').val('');
}

// reset giá trị form thông tin bổ sung
function reset_gia_tri_thong_tin_bo_sung() {
    // thông tin bổ sung
    $('#txtNghenghiep').attr('key', '');
    $('#txtNghenghiep').val('');
    $('#txtDantoc').attr('key', '');
    $('#txtDantoc').val('');
    $('#txtQuocgia').attr('key', '');
    $('#txtQuocgia').val('');
    $('#txtNhommau').attr('key', '');
    $('#txtNhommau').val('');
    $('#txtMacmnd').val('');
    $('#txtMabhxh').val('');
}

// reset giá trị form thông tin liên hệ
function reset_gia_tri_thong_tin_lien_he() {
    // thông tin liên hệ
    $('#txtDtnha').val('');
    $('#txtDtcoquan').val('');
    $('#txtDtdidong').val('');
    $('#txtEmail').val('');
    $('#txtCholam').val('');
}

// reset giá trị form thông tin quan hệ
function reset_gia_tri_thong_tin_quan_he() {
    // thông tin quan hệ
    $('#txtQuanhe').val('');
    $('#txtHovaten').val('');
    $('#txtDiachi').val('');
    $('#txtDienthoai').val('');
}

// reset giá trị các trạng thái
function reset_gia_tri_trang_thai() {
    g_is_dangkymoi = false;
    g_is_nguoibenhmoi = false;
    g_is_sua = false;
}

// hiển thị treeview các lần điều trị
function hien_thi_treeview_cac_lan_dieu_tri() {
    // kiểm tra xem mã bn có tồn tại ko
    if (g_mabn != '') {
        // có tồn tại
        // khai báo url, data
        var url = '/cyber/noitru/nhanbenh/act_hien_thi_cac_lan_dieu_tri';
        var data = {mabn: g_mabn};

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // chuyển đổi thành json
            var res_temp = JSON.parse(res);

            // chứa chuỗi html
            var html = "";

            // duyệt từng mảng dữ liệu
            $.each(res_temp, function (i, items) {
                // kiểm tra là lần đầu tiên
                if (i == 0) {
                    // là lần đầu tiên, thì gán giá trị họ tên, tuổi, năm sinh vào tiêu đề các lần điều trị
                    $('#divTieudecaclandieutri').html(chuyen_doi_gia_tri(items.hoten) + ' - ' + chuyen_doi_gia_tri(items.gioitinh) + ' - ' + chuyen_doi_gia_tri(items.namsinh));
                }

                // kiểm tra xem có phải là lần duyêt cuối
                if (i == (res_temp.length - 1)) {
                    // đúng thì thiết lập element cuối có padding-bottom là 15px
                    html += "<li style=\"padding-bottom: 15px\" class=\"closed\"><span class=\"people\">" + chuyen_doi_gia_tri(items.tenloaiba) + "</span>";
                } else {
                    // ngược lại thì ko có thì bình thường
                    html += "<li class=\"closed\"><span class=\"people\">" + chuyen_doi_gia_tri(items.tenloaiba) + "</span>";
                }
                html += "<ul>";

                // kiểm tra xem tình trạng là ra viện hay vào viện
                if (chuyen_doi_gia_tri(items.tinhtrang) == "rv") {
                    // là ra viện, thì có thêm 1 nhánh con ra viện
                    html += "<li class=\"closed\"><span class=\"people\" id=\"\" key=\"\">Vào viện " + chuyen_doi_gia_tri(items.ngayvv) + ' ' + chuyen_doi_gia_tri(items.tenkp_vv) + ' (' + chuyen_doi_gia_tri(items.tenba) + ")</span>";
                    html += "<ul>";
                    html += "<li><span class=\"file\" onclick=\"tim_kiem_cac_lan_dieu_tri(this);\" key=\"" + chuyen_doi_gia_tri(items.maquanly) + '~' + chuyen_doi_gia_tri(items.mabn) + "\">Ra viện " + chuyen_doi_gia_tri(items.ngayrv) + ' ' + chuyen_doi_gia_tri(items.tenkp_vv) + ' ' + chuyen_doi_gia_tri(items.chandoan) + "</span></li>";
                    html += "</ul>";
                    html += "</li>";
                } else {
                    // ngược lại là vào viện
                    html += "<li><span class=\"file\" onclick=\"tim_kiem_cac_lan_dieu_tri(this);\" key=\"" + chuyen_doi_gia_tri(items.maquanly) + '~' + chuyen_doi_gia_tri(items.mabn) + "\">Vào viện" + chuyen_doi_gia_tri(items.ngayvv) + ' ' + chuyen_doi_gia_tri(items.tenkp_vv) + ' (' + chuyen_doi_gia_tri(items.tenba) + ")</span></li>";
                }
                html += "</ul>";
                html += "</li>";
            });

            // gán vào treeview
            $('#browser').html(html);

            // tải treeview
            $("#browser").treeview();
        });
    }
}

// sự kiện khi click vào các lần điều trị vào viện, ra viện thì hiện thông tin flexigrid
function tim_kiem_cac_lan_dieu_tri(self) {
    alert($(self).attr('key'));

    // khai báo url, data
    var url = '/cyber/noitru/nhanbenh/act_tim_kiem_cac_lan_dieu_tri';

    // khai báo các option cho flexigrid
    $("#tab2 .caclandieutri").flexOptions({url: url, params: [
        {name: 'mabn', value: $(self).attr('key').split('~')[1]},
        {name: 'maql', value: $(self).attr('key').split('~')[0]}
    ]});

    // tải lại flexigrid
    $("#tab2 .caclandieutri").flexReload();
}
