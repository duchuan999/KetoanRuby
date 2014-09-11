/*
      1.1. Tiếp nhận đăng ký khám bệnh
      http://172.168.1.9:3000/cyber/tiepnhan/dangkykhambenh/index#
  */

// Truyền Json vào các form
function dang_ky_kham_benh_truyen_thong_tin_benh_nhan_vao_form(json) {
    try {

        $("#HoTen").val(json.hoten);

        $("#GioiTinh").val(json.phai);
        $("#GioiTinh").attr('key', json.phai_id);

        $("#NgaySinh").val(json.ngaysinh);
        $("#NamSinh").val(json.namsinh);
        $("#SoNha").val(json.sonha);

        $("#TinhTP").val(json.tinh);
        $("#TinhTP").attr('key', json.tinh_id);
        $("#QuanHuyen").val(json.quan);
        $("#QuanHuyen").attr('key', json.quan_id);
        $("#PhuongXa").val(json.xa);
        $("#PhuongXa").attr('key', json.xa_id);
        $("#DoiTuong").val(json.doituong);
        $("#DoiTuong").attr("key", json.doituong_id);

        $("#MaBHYT").val(json.mabhyt);

        $("#Tuyen").val(json.bh_traituyen);
        $("#Tuyen").attr('key', json.bh_traituyen_id);

        $("#TuNgay").val(json.bh_tungay);
        $("#DenNgay").val(json.bh_denngay);
        $("#HuongKTC").val(json.ngayktc);
        $("#ThaiSan").val(json.ngayts);
        $("#UngThu").val(json.ngayut);

        $("#NoiKC").val(json.bh_tenvien);
        $("#NoiKC").attr('key', json.bh_tenvien_id);

        $("#NgayDK").val(json.ngay.substr(0, 10));
        $("#Gio").val(json.ngay.substr(11));
        $("#SoKham").val(json.sovaovien);

        $("#PhongKham").val(json.khoa);
        $("#PhongKham").attr('key', json.khoa_id);
        $("#BacSiKham").val(json.bacsi);
        $("#BacSiKham").attr('key', json.bacsi_id);

        $("#LyDoKham").val(json.lydokham);

        $("#NgheNghiep").val(json.nghenghiep);
        $("#NgheNghiep").attr('key', json.nghenghiep_id);
        $("#DanToc").val(json.dantoc);
        $("#DanToc").attr('key', json.dantoc_id);
        $("#QuocGia").val(json.quocgia);
        $("#QuocGia").attr('key', json.quocgia_id);
        $("#NhomMau").val(json.nhommau);
        $("#NhomMau").attr('key', json.nhommau_id);

        $("#CMND").val(json.macmnd);
        $("#BHXH").val(json.mabhxh);
        $("#DTNha").val(json.lh_dtnha);
        $("#DTCoQuan").val(json.lh_dtcq);
        $("#DTDiDong").val(json.lh_dtdd);
        $("#Email").val(json.lh_email);
        $("#ChoLam").val(json.lh_cholam);
        $("#QuanHeVaiVe").val(json.vaive);
        $("#QuanHeHoTen").val(json.hoten_qh);
        $("#QuanHeDiaChi").val(json.diachi_qh);
        $("#QuanHeDT").val(json.dienthoai_qh);
    } catch (e) {
        msg(e);
    }
}
// Show form dang ky kham benh
// Tìm kiếm mã bệnh nhân từ Id bệnh viện và mã nhập vào từ MaSoBenhNhan 
// nếu tồn tại thì tiến hành truyền thông tin bệnh nhân về các input form
function kiem_tra_id_ma_benh_nhan_va_dien_vao_form() {

    $("#MaSoBenhNHan").on('keyup', function(event) {
        var idmsbn = $(this);
        // Khi người dùng enter trong input mã bệnh nhân
        if (event.keyCode == 13) {
            //  nếu người dùng nhập mã sai hoặc ko nhập
            if ($(this).val().length != 10) {
                $.get('/cyber/tiepnhan/dangkykhambenh/act_sinh_mabn_tu_dong', function(data) {
                    // Reset  giao dien
                    reset_giao_dien();
                    idmsbn.val(data);
                    $("#HoTen").focus();
                });
            }
            // nếu người dùng nhập đúng điều kiện
            else {
                //  kiểm tra mã người dùng nếu đúng trả về giá trị của id bệnh viện + mã bệnh nhân nếu sai trả về false
                var content = idmsbn;
                var data = {mabn: idmsbn.val()};
                var url = "/cyber/dungchung/cdungchung/act_kiem_tra_ma_bn";
                gui_du_lieu(url, data, function(result) {
                    var masobenhnhan = result + idmsbn.val();
                    // mabn nầy đã tồn tại         
                    if (result!='false') {
                        var url = "/cyber/tiepnhan/dangkykhambenh/act_lay_thong_tin_dang_ky_mabn";
                        var data = {mabn: masobenhnhan};
                        alert('true');
                        $.post(url, data, function(json) {
                            $(this).val(masobenhnhan)
                            // Reset  giao dien
                            reset_giao_dien();
                            dang_ky_kham_benh_truyen_thong_tin_benh_nhan_vao_form(json);
                            // Nạp lại giao diện
                            Initialize();
                        });
                    }
                    // ngược lại nếu mã bệnh này chưa tồn tại
                    else {
                        // no do any thing
                    }
                });
            }
            // focus đến phần tử tiếp theo
            $("#HoTen").focus();
        }
    });
}

/*  
    JS định dạng style hỗ trợ css style
    Style Form tùy chỉnh
*/


// Datepicker tùy chỉnh ngày tháng
function ho_so_benh_an_ngay_thang() {
    $(".datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd/mm/yy",
        monthNamesShort: ['1', '2', '3', '4', '5', '6',
            '7', '8', '9', '10', '11', '12'
        ],
        yearRange: '1920:+0',
        onClose: function() {
            this.focus();
        }
    });

    $(".datepicker").keydown(function(event) {
        var valueL = $(this).val().length;
        if (event.keyCode <= 57 && event.keyCode >= 48 || event.keyCode <= 105 && event.keyCode >= 96) {
            // 
            if (valueL == 2) {
                $(this).val($(this).val() + '/');
            }
            if (valueL == 5) {
                $(this).val($(this).val() + '/');
            }
        }
    });
    // Tất cả các form text datepicker không quá 10  ký tự
    $('.datepicker').prop('maxlength', '10');
    // .next("input[type='text']").focus();
}
// Lấy Thông Tin Giới Tính 
function thong_tin_gioi_tinh(id) {
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_gioi_tinh";
    var keyvalue = "1~0";
    var cols = "ten~id";

    var tieude = t('gioitinh') + "~ID";

    var content = $(id);
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, null, function(data) {
        dien_du_lieu_dang_table(content, keyvalue, cols, data, function(self) {

        });
    });

}
function thong_tin_nhomtk(id) {
    var url = "/dungchung/act_tim_kiem_nhom_tk";
    var keyvalue = "1~0";
    var cols = "tennhom~manhom";

    var tieude = t('dmnhomtk') + "~manhom";

    var content = $(id);
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, null, function(data) {
        dien_du_lieu_dang_table(content, keyvalue, cols, data, function(self) {

        });
    });

}
// Lấy Thoogn tin tỉnh TP 
function thong_tin_tinh_TP(id) { // key trước rùi value
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_ten_tinh_thanh_pho";
    // định nghĩa tiêu đề, content
    var tieude = t("tinhtp") + "~" + t("vung") + "~" + t("ma");
    var keyvalue = "2~0";
    var cols = "tentt~vungbv~id";
    var content = $(id);
    var data = {
        tentp: $(id).val()
    };
    form_goi_y(tieude, content);
    // gửi dữ liệu đến server
    $.post(url, null, function(json) {
        // điền dữ liệu vào form gợi ý
        dien_du_lieu_dang_table(content, keyvalue, cols, json, function(self) {
            // Xóa dữ liệu trong huyện xã
            $("#QuanHuyen").attr('key', '').val('');
            $("#PhuongXa").attr('key', '').val('');
        });
    });
}
// // Lấy Thông Tin Quận Huyện
function thong_tin_quan_huyen(id) {
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_ten_quan_huyen";
    // định nghĩa tiêu đề, content
    var tieude = t('quanhuyen') + "~" + t("tinhtp") + "~" + t("vung") + "~" + t("ma");
    var cols = "tenqh~tentt~vungbv~id";
    var keyvalue = "3~0";
    var cols = "tenqh~tentt~vungbv~id";
    var data = {
        matt: $("#TinhTP").attr("key"),
        tenqh: $(id).val()
    };
    var content = $(id);
    form_goi_y(tieude, content);
    // gửi dữ liệu đến server
    $.post(url, null, function(json) {

        // điền dữ liệu vào form gợi ý
        dien_du_lieu_dang_table(content, keyvalue, cols, json, function(self) {
            // Xóa dữ liệu trong xã
            $("#PhuongXa").attr('key', '').val('');
        });
    });
}
// Lấy Thông Tin Xã Phường
function thong_tin_xa_phuong(id) {
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_ten_phuong_xa";
    // định nghĩa tiêu đề, content
    var tieude = t('phuongxa') + "~" + t('quanhuyen') + "~" + t("tinhtp") + "~" + t("vung") + "~" + t("ma");
    var cols = "tenxa~tenqh~tentt~viettat~id";
    var keyvalue = "4~0";
    var data = {
        matt: $("#TinhTP").attr("key"),
        maquan: $("#QuanHuyen").attr("key"),
        tenpxa: $(id).val()
    };
    var content = $(id);
    form_goi_y(tieude, content);
    // gửi dữ liệu đến server
    $.post(url, null, function(json) {
        // Lấy địa chỉ huyện, tỉnh
        // url_tinh    =   "/cyber/dungchung/cdungchung/act_tim_kiem_matt_tinh_thanh_pho";
        // matinh      =   json[id]
        // url_huyen   =   "";
        // mahuyen     =
        // điền dữ liệu vào form gợi ý
        dien_du_lieu_dang_table(content, keyvalue, cols, json, function(self) {

        });
    });
}

function thong_tin_doi_tuong(id) {
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_doi_tuong";
    var keyvalue = "2~0";
    var cols = "tendt~ma~id";
    var tieude = "Đối Tượng~Mã~ID";
    var content = $(id);
    var data = {
        tendt: $(id).val()
    };
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, null, function(data) {
        dien_du_lieu_dang_table(content, keyvalue, cols, data, function(self) {

        });
    });
}

function thong_tin_tuyen(id) {
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_danh_muc_trai_tuyen";
    var keyvalue = "1~0";
    var cols = "tent~id";
    var tieude = "Tuyến~ID";
    // định nghĩa tiêu đề, content
    //id":1,"ma":"BHY01","tendt":"BHYT"
    var content = $(id);
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, null, function(data) {
        dien_du_lieu_dang_table(content, keyvalue, cols, data, function(self) {

        });
    });

}
// Lấy Thông Tin Xã Phường
function thong_tin_phong_kham(id) {
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_khoa_phong";
    var keyvalue = "3~0";
    var cols = "tenkp~baocaobo~phanloai~id";
    var tieude = "Khoa phòng~Tên báo cáo bộ~Phân loại~ID";
    // định nghĩa tiêu đề, content        
    var content = $(id);
    var data = {
        tenkp: $(id).val()
    };
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, data, function(data) {
        dien_du_lieu_dang_table(content, keyvalue, cols, data, function(self) {

        });
    });
}
// Lấy thông tin bác sĩ
function thong_tin_bac_si(id) {
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_bac_si";
    var keyvalue = "5~0";
    var cols = "hoten~ngaysinh~gioitinh~nhom~id~ma";
    var tieude = "Họ và tên~Ngày sinh~Giới tính~Nhóm nhân viên~ID~Mã";
    var content = $(id);
    var data = {
        tenbs: $(id).val()
    };
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, data, function(data) {
        dien_du_lieu_dang_table(content, keyvalue, cols, data, function(self) {

        });
    });
}
// Lấy thông tin nghe nghiep
function thong_tin_nghe_nghiep(id) {
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_nghe_nghiep";
    var keyvalue = "1~0";
    var cols = "tennn~id";
    var tieude = "Nghề nghiệp~ID";
    var content = $(id);
    var data = {
        tennn: $(id).val()
    };
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, data, function(data) {
        dien_du_lieu_dang_table(content, keyvalue, cols, data, function(self) {

        });
    });
}
// Lấy thông tin Dan Tộc
function thong_tin_dan_toc(id) {
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_dan_toc";
    var keyvalue = "1~0";
    var cols = "tendt~id";
    var tieude = "Dân Tộc~ID";

    var content = $(id);
    var data = {
        tendt: $(id).val()
    };
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, data, function(data) {
        dien_du_lieu_dang_table(content, keyvalue, cols, data, function(self) {

        });
    });
}
// Lấy thông tin Quốc gia
function thong_tin_quoc_gia(id) {
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_quoc_gia";
    var keyvalue = "3~0";
    var cols = "tenqg~ma~iso~id";
    var tieude = "Quốc gia~Mã~ISO~ID";
    var content = $(id);
    var data = {
        tenqg: $(id).val()
    };
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, data, function(data) {
        dien_du_lieu_dang_table(content, keyvalue, cols, data, function(self) {

        });
    });
}
// Hiệu chỉnh form gọi ý

// Lấy thông tin Nhóm Máu
function thong_tin_nhom_mau(id) {
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_nhom_mau";
    var keyvalue = "1~0";
    var cols = "tennm~id";
    var tieude = "Nhóm máu~ID";
    // định nghĩa tiêu đề, content
    var content = $(id);
    var data = {
        tennm: $(id).val()
    };
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, data, function(data) {
        dien_du_lieu_dang_table(content, keyvalue, cols, data, function(self) {});
    });
}

// Lấy thông tin ĐKKCBBĐ
function thong_tin_noi_dkkcbbd(id) {
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_ten_vien_theo_ten";
    var keyvalue = "6~0";
    var cols = "tenvien~tenxa~tenquan~tentt~mabh~ma~id";
    var tieude = "Tên cơ sở y tế~Phường/Xã~Quận/Huyện~Tỉnh/TP~Mã BHYT~Mã~ID";
    var content = $(id);
    var data = {
        tenv: $(id).val()
    };
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, data, function(data) {
        dien_du_lieu_dang_table(content, keyvalue, cols, data, function(self) {

        });
    });
}

// Lấy thông tin nhân viên nhập liệu

function thong_tin_nhan_vien(id) {
    var url = "/cyber/dungchung/cdungchung/act_tim_kiem_nhan_vien_nhap_lieu";
    var keyvalue = "5~0";
    var cols = "hoten~username_~ngaysinh~ten~ma";
    var tieude = "Tên đăng nhập ~Họ và tên~Ngày sinh~Giới tính~ID";
    var content = $(id);
    var data = {
        tenv: $(id).val()
    };
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, data, function(json) {
        dien_du_lieu_dang_table(content, keyvalue, cols, json, function(self) {

        });
    });
}

// Viết tắt tên xa, phường, tỉnh
/*
    @Params: 
    - @thisId: 
    - @xaId: 
    - @quanId: 
    - @tinhId:
    @Result: Dữ liệu đổ về 3 textBox   xaId, quanId, tinhId với value, và key
// */
// keyup="gan_thong_tin_viet_tat(this,'#PhuongXa','#QuanHuyen','#TinhTP')"
function gan_thong_tin_viet_tat() {
    $("#TQX").keyup(function(event) {
        if (event.keyCode == 13 || event.keyCode == 32) {
            // Lấy từ khóa viết tắt
            tukhoa = $.trim($(this).val());
            // Lấy dữ liệu trả về
            url = '/cyber/dungchung/cdungchung/act_ten_viet_tat_dia_chi';
            data = {
                tukhoa: tukhoa
            };
            $.post(url, data, function(json, textStatus, xhr) {
                // Gán dữ liệu vào các form
                $("#PhuongXa").attr({
                    key: json.maxa
                }).val(json.tenxa);
                $("#QuanHuyen").attr({
                    key: json.maquan
                }).val(json.tenquan);
                $("#TinhTP").attr({
                    key: json.matinh
                }).val(json.tentinh);

            });
        }
    });
}
//  Lấy thông tin nơi đăng ký khám chữa bệnh và tuyến bệnh viện
/*
    @Params: 
    @Form: có chứa các form: $("#MaBHYT"), $("#NoiDKKCBBD"), $("#Tuyen")
    @Result: Trả về kết quả mã, và tên của viện và tuyến
*/
function tu_dong_lay_xat_dinh_tuyen_bv() {
    mabh = $("#MaBHYT").val().substr(-5, 5);
    url = "/cyber/tiepnhan/dangkykhambenh/act_xat_dinh_tuyen_bv";
    data = {
        mabh: mabh
    };

    $.post(url, data, function(json, textStatus, xhr) {
        try {
            $("#NoiDKKCBBD").attr('key', json[1].idvien).val(json[1].tenvien);
            $("#Tuyen").attr('key', json[0].idtuyen).val(json[0].tentuyen);
        } catch (e) {
            msg("Không tồn tại bệnh viện nào phù hợp với mã này");
            $("#Tuyen").attr('key', json[0].idtuyen).val(json[0].tentuyen);
        }

    });
}
// Lấy mã tỉnh
// hàm lấy biến đối tượng bệnh nhân
function object_Benh_Nhan() {
    var objectInputText = [$("#MaSoBenhNHan"),
        $("#HoTen"), $("#GioiTinh"), $("#NgaySinh"), $("#NamSinh"), $("#TQX"),
        $("#SoNha"), $("#TinhTP"), $("#QuanHuyen"), $("#PhuongXa"),
        $("#DoiTuong"), $("#MaBHYT"), $("#Tuyen"), $("#TuNgay"),
        $("#DenNgay"), $("#HuongKTC"), $("#ThaiSan"), $("#UngThu"), $("#NoiDKKCBBD"),
        $("#NoiKC"), $("#NgayDK"), $("#Gio"), $("#SoKham"),
        $("#PhongKham"), $("#BacSiKham"), $("#GhiChu"), $("#LyDoKham"), $("#NgheNghiep"),
        $("#DanToc"), $("#QuocGia"), $("#NhomMau"), $("#CMND"),
        $("#BHXH"), $("#DTNha"), $("#DTCoQuan"), $("#DTDiDong"),
        $("#Email"), $("#ChoLam"), $("#QuanHe"), $("#QuanHeVaiVe"),
        $("#QuanHeHoTen"), $("#QuanHeDiaChi"), $("#QuanHeDT")
    ];
    return objectInputText;
}

/*############################

        1. Tiếp đón

############################*/

/*###############################
     1.1. Style Js Đăng Ký Khám Bệnh 
#################################*/
/*
    Cách dùng:
    -
*/
/* a. Thông Tin hành chính
        - Khi click vào nút ngày tháng năm
        - tự động tách ngày sinh lấy năm sinh
*/
function Initialize_thong_tin_hanh_chinh() {
    // - tự động tách ngày sinh lấy năm sinh
    $("#NgaySinh").on("blur", function(event) {
        var ns = $('#NgaySinh').val();
        if (ns.length == 10) {
            var year = ns.substr(6, 10);
            var d = new Date();
            var tuoi = d.getFullYear() - year;
            var month = 12 - ns.substr(3, 2) + d.getMonth() + 1;
            ngay = ns.substr(0, 2) - d.getDay();
            $("#NamSinh").val(year);
            $('#Tuoi').val(tuoi);
            $("#NgayThangTuoi").text(month + " tháng");
        } else {
            $(this).addClass('input-warming');
        }
    });
    //  Khi click hoacwj blur khỏi box NamSinh thì tự động sinh tuổi, sinh ngày tháng dư
    $("#NamSinh").on("click blur", function() {
        var year = $(this).val();
        var d = new Date();
        var tuoi = d.getFullYear() - year;
        var month = 0;

        $('#Tuoi').val(tuoi);
        $("#NgayThangTuoi").text(month + " tháng");
    });
    // Gán thông tin viết tắt
    gan_thong_tin_viet_tat();
    // Set chiều cao
    // if($("#contain-1").height()>$("#contain-2").height())
    //     $("#contain-2").height($("#contain-1").height());
    // else
    //     $("#contain-1").height($("#contain-2").height());

}
/*  b. Thông tin đối tượng: Input đối tượng nếu là BHYT thì cho phép nhập
        - Tự động lấy chiều dày MaBHYT
        - Input đối tượng nếu là BHYT thì cho phép nhập các form bên dưới
*/
function Initialize_thong_tin_doi_tuong_on_start() {
    // Biến truyền vào
    var objectInputText = object_Benh_Nhan();
    // Tự động lấy chiều dày MaBHYT

    var str = $("#MaBHYT").val();
    $("#MaBHYT").val(str.toUpperCase());
    $("#MaBHYT").next("span").text(str.length);

    // Khi đối tượng là có bảo hiểm y tế
    if ($("#DoiTuong").attr('key') == "1") {

        for (var i = 0; i < objectInputText.length; i++) {
            if (i > 10 && i <= 18) {
                objectInputText[i].prop("disabled", false);
            }
        };
    } else {
        for (var i = 0; i < objectInputText.length; i++) {
            if (i > 10 && i <= 18) {
                objectInputText[i].prop("disabled", true);
                objectInputText[i].val("");
            }
        };
    }

}

function Initialize_thong_tin_doi_tuong() {


    // - Input đối tượng nếu là BHYT thì cho phép nhập các form bên dưới
    $("#DoiTuong").on("focus", function(event) {
        Initialize_thong_tin_doi_tuong_on_start();
    });

    Initialize_thong_tin_doi_tuong_on_start();
    // Sự kiện khi mã thẻ BHYT được enter, tab
    $("#MaBHYT").bind("keyup", function(event) {
        // Viết hoa ô MaBHYT và đếm chiều dày của form
        var str = $("#MaBHYT").val();
        $("#MaBHYT").val(str.toUpperCase());
        $("#MaBHYT").next("span").text(str.length);
        if (event.keyCode == 13 || event.keyCode == 9 || event.keyCode == 32) {
            // Kiểm tra nhập đầu vào của form Ma Thẻ BHYT
            validate_mathebhyt();
        }
    });
}
/*#######################################
    1.1.2. Style phần điền thêm thông tin
#########################################*/
function Initialize_thong_tin_bo_sung() {
    // $('input[type="checkbox"]').prop('checked', false );
    $('#contain-2 ul input[type="checkbox"]').on("click load", function(event) {
        var i = $(this).parents("#contain-2 ul").index();

        if (this.checked)
            $("#contain-2 ul").eq(i).find('input[type="text"]').removeAttr('disabled');
        else
            $("#contain-2 ul").eq(i).find('input[type="text"]').prop('disabled', true);
    });

}
/*######################################
    1.2. Style IU tìm kiếm bệnh nhân
#######################################*/
function Initialize_timkiembenhnhan() {

    // Sự kiện khi tìm kiếm bệnh nhân show dữ liệu vào table
    showTimKiemBenhNhan();
    // Xóa tất cả các cell có giá trị null trong table

    event_tim_kiem_benh_nhan();


}

// Hiển thị tìm kiếm nội dung
function showTimKiemBenhNhan() {

    $("#search_bn").click(function(event) {
        url = "/cyber/tiepnhan/dangkykhambenh/act_tim_benh_nhan";
        // Status get value
        $('input:radio[name="rb_bn"]').on("change click", function() {
            status = $(this).val();
        });
        // tungay
        tungay = $("#SearchTuNgay").val();
        // Đến ngày
        denngay = $("#SearchDenNgay").val();
        //  Khoa phòng
        khoa = $("#SearchPhongKham").attr('key');
        // Bác sĩ
        bacsi = $("#SearchBacSi").attr('key');
        // Người nhập
        userid = $("#SearchUser").attr('key');
        // Limit

        e = document.getElementById("limit-row");
        limit = e.options[e.selectedIndex].value;
        // (limit, mabs,makhoa, manv, tungay, denngay, dakham
        params = {
            limit: limit,
            dakham: status,
            tungay: tungay,
            denngay: denngay,
            makhoa: khoa,
            mabs: bacsi,
            manv: userid
        };
        var tbody = $("#tab3 tbody");
        $.post(url, params, function(json) {
            // Trả về các row là rỗng
            tbody.html("");
            // Lấy giá trị năm hiện tại                
            year = new Date().getFullYear();
            // var arrColumnValue = [["das","asda","asdas","asdas","asdas"] ,[ "das","asda","asdas","asdas","asdas"] ,[ "das","asda","asdas","asdas","asdas"] ,[ "das","asda","asdas","asdas","asdas"]]; 

            // create_table_tim_kiem_benh_nhan("#tab3 #table",  arrColumnValue);
            for (var i = 0; i < json.length; i++) {
                // Xác định row có màu xen kẻ
                if (i % 2 != 0)
                    bg = 'tablerowbg';
                else bg = "";
                tbody.append('<tr class="' + bg + '"><td class="icon-new"></td>' + '<td>' + (json[i].mabn).substr(10) + '</td><td>' + json[i].hoten + '</td><td>' + json[i].ngaysinh + '</td>' + '<td>' + (year - json[i].namsinh) + '</td>' + '<td>' + json[i].gioitinh + '</td><td>' + json[i].doituong + '</td><td>' + json[i].ngaydk + '</td>' + '<td>' + json[i].tenkhoaphong + '</td><td>' + json[i].tenbacsi + '</td><td>' + json[i].chandoan + '</td>' + '<td>' + json[i].lanthu + '</td><td>' + json[i].sovaovien + '</td><td>' + json[i].sothe + '</td>' + '<td>' + json[i].sothe + '</td><td>' + json[i].cholam + '</td>' + '<td>' + json[i].sonha + '</td>' + '<td>' + json[i].tenxa + '</td><td>' + json[i].tenhuyen + '</td><td>' + json[i].tentinh + '</td>' + '<td>' + json[i].lh_email + '</td><td>' + json[i].lh_dtnha + '</td><td>' + json[i].lh_dtcq + '</td>' + '<td>' + json[i].lh_dtdd + '</td><td>' + json[i].ngayupdate + '</td><td>' + json[i].nhaplieuvien + '</td></tr>');
            };
            // Tính tổng của tất cả các row
            $("#SumRow").html(json.length);
            // Nếu không có kết quả tìm kiếm nào
            $("#tong_kQ_tim_kiem").html("");
            if (json.length == 0)
                $("#tong_kQ_tim_kiem").html("<b>Không tìm thấy kết quả nào.</b>");
            // Diable nút tìm kiếm
            $("#search_bn").prop("disabled", true);
            //  
            lay_thong_tin_benh_nhan_tu_form_tim_kiem();
        });
    });
}
// Chức năng lấy thông tin bệnh nhân từ form tìm kiếm Show taij form đăng ký bệnh nhân 
function lay_thong_tin_benh_nhan_tu_form_tim_kiem() {
    $("#tab3 table tbody tr td:first-child").click(function(event) {
        //Reset all giao diện
        reset_giao_dien();
        // lấy mã bệnh nhân cần chỉnh sửa
        var mabn = $(this).next("td").html();
        // Sự kiện tương tự như click vào nút tab1
        $("#tablist ul li").eq(0).trigger('click');

        // Lấy mã bệnh nhân
        $("#MaSoBenhNHan").val(mabn);
        // Sự kiện enter tại form $("#MaSoBenhNHan")
        $("#MaSoBenhNHan").trigger($.Event("keyup", {
            keyCode: 13
        }));
        // Enable các nút như new_patient, registor_patient, sửa, xóa, in, print
        $(".btn-bar button, .btn-bar select").prop('disabled', false);
        //  Ẩn 2 nút lưu và sửa
        $("#btnLuu, #btnBoQua").prop('disabled', true);
        // Hủy các input có class borderRed 
        $("input").removeAttr('borderRed');
    });
}
/*###############################
     1.0. Style Js Giao diện cho các tab
#################################*/
function tab_initialize() {
    $(".tab-content:first-child").show();
    $("#tablist ul li").click(function(event) {
        // Khi nhấp vào mỗi tab sẽ gán active cho tab đó
        $("#tablist ul li").removeClass('tab-active');
        $(this).addClass('tab-active');
        // khi click vào các tab phần nội dung tuong ứng sẽ hiễn thị
        index = $(this).index();
        $(".tab-content").hide();
        $(".tab-content").eq(index).show();
        // Set chiều cao cho phần nội dung table
        hs = $(window).height() - $("#tab3 #table").position().top - 60;
        $("#tab3 #table").css('height', hs);
    });
}
// Kich hoat nut tìm kiem 
function event_tim_kiem_benh_nhan() {
    bt = $("#search_bn");
    $('input:radio[name="rb_bn"]').on("change click", function() {
        bt.prop("disabled", false);
    });
    $("#SearchTuNgay, #SearchDenNgay").on("blur focus change", function(event) {

        if ($(this).val().length > 0)
            bt.prop("disabled", false);
    });
    $("#SearchBacSi, #SearchPhongKham, #SearchUser").on("change blur", function(event) {
        if ($(this).val().length > 0)
            bt.prop("disabled", false);
    }).change();
}
/*
    Table loading 
// */
// function table_loading(){
//     var imgload = '<div style="display: block; position: absolute; top:0; left:0; height: 100%; width: 100%; background: silver; opacity: 0.6;"></div>';
//     $("#tab3 tbody").html(imgload);
// }
/*
    1.3. Phần bệnh án 
*/
function loading() {
    var loads = '<img id="loading" style="position:fixed; " src="/assets/cyber/icon/waiting.gif" alt="">';
    $("#view-hidden").html(loads).show();
    top = $(window).height() / 2 - 25;
    left = $(window).width() / 2 - 25;
    $("#loading").css({
        top: top,
        left: left,
        height: 50,
        width: 50
    });
}
// hủy loadding
function destroy_loading() {
    $("#view-hidden").hide();
}
// 
function initialize_tro_giup_nhanh() {
    // Phần ẩn nếu nhấp nút divHide sẽ hiện nội dung trong phần option 
    $(".divHide").next("*").hide();
    $(".divHide").click(function(event) {
        /* Act on the event */
        $(this).next("*").slideToggle();
    });
}

function Initialize_benh_an() {
    // Phần show giao diện
    var view = '<div id="view_benhan"><div id="bg"></div><div id="view"></div></div>';
    $("#contain-3 >ul >li > a").click(function(event) {
        w = $(document).width() - 25;
        h = $(document).height() - 50;
        // Không cho chuyễn trang
        event.preventDefault();
        loading();
        // Click vào link dị ứng
        url = $(this).attr('href');
        $.post(url, null, function(data, textStatus, xhr) {
            // Khởi tạo giao diện thông tin hồ sơ bênh án
            $(".view-hidden").html(view);
            $(".view-hidden > #view_benhan > #view").html(data);
            $(".view-hidden").show();
            // Set css
            $("#view_benhan > #view").height(h).css({
                left: 10,
                width: w
            });
            h = h - 70;
            $("#report_wrapper").css({
                height: h,
                'overflow-x': 'hidden'
            });
            $("#view_benhan > #view").resizable();
        });

    });
    // #view_benhan > #bg {; }
}

//Reset all giao diện
function reset_giao_dien() {
    //Reset all giao diện
    var obj_bn = object_Benh_Nhan();
    for (var i = 1; i < obj_bn.length; i++) {
        obj_bn[i].val("");
        obj_bn[i].attr('key', '');
    };
    Initialize_thong_tin_doi_tuong_on_start();
}
// Khởi tạo giao diện
function Initialize() {
    // Khởi tạo giao diện khi click vào bệnh án 
    Initialize_benh_an();
    // Khởi tạo giao diện tab
    tab_initialize();
    //  Form style Phần nhập số liệu bệnh nhân
    Initialize_thong_tin_hanh_chinh();
    Initialize_thong_tin_doi_tuong();
    Initialize_thong_tin_bo_sung();
    initialize_tro_giup_nhanh();
    //  Event cho các button
    event_button();
    // event_button_form_goi_y();
    /*
        Phần dùng chung
    */
    // - Khi click vào các nút ngày tháng năm
    ho_so_benh_an_ngay_thang();

    // Khởi tạo lại giao diện tìm kiếm bệnh nhân
    Initialize_timkiembenhnhan();

}
/*#################
    1.4. Sự kiện cho các nút
####################*/
function event_button() {
    var objectInputText = object_Benh_Nhan();
    // a. Nút Bỏ Qua
    $("#btnBoQua").click(function(event) {
        // Trạng thái các nút khác
        $("#btnNguoiBenhMoi, #btnDangKyMoi").prop('disabled', false);
        $("#btnLuu, #btnBoQua").prop('disabled', true);

        // Trạng Thái các Input
        $('.contain input').prop('disabled', 'disabled');
    });
    // b. Nút Người bệnh mới, Đăng ký mới
    $("#btnNguoiBenhMoi").click(function(event) {
        $('.contain input').val('');
    });
    $("#btnNguoiBenhMoi, #btnDangKyMoi").click(function(event) {
        // Trạng thái các nút khác
        $(".btn-bar button, .btn-bar select").not('.btn-bar button:last-child').prop('disabled', true);

        $("#btnLuu, #btnBoQua").prop('disabled', false);
        $('.contain input[type="checkbox"], #btnClose').prop('disabled', false);
        // Trạng Thái các Input
        for (var i = 0; i < objectInputText.length; i++) {
            if (i <= 10)
                objectInputText[i].prop("disabled", false);
            else if (i <= 22)
                objectInputText[i].prop("disabled", true);
            else if (i < 26)
                objectInputText[i].prop("disabled", false);
            else return objectInputText.length;
        };
    });
    // Sự kiện cho các icon button combobox down
    $(".icon-cb-down").click(function(event) {
        // nếu click vào icon-cb-dow mà input trước đó disabled
        if ($(this).prev("input").attr('disabled'))
            $(this).unbind('keyup click');
        //  ngược lai
        else
            $(this).prev().trigger('keyup');
    });

    // Tự động lấy mã bệnh nhân
    kiem_tra_id_ma_benh_nhan_va_dien_vao_form();
}
/*###################
    Validate dữ liệu đầu vào
    1. Validate form đăng ký khám
    - Validate các trường không được bỏ trống
    - Validate NHập Mã thẻ BHYT
    2. Validate form tìm kiếm người bệnh
#################*/
// Các trường dữ liệu bắt buộc phải có dữ liệu
function is_number(stringValue, minLen, maxLen) {

}
// Kiểm tra các trường nhập Không được rổng
function validate_object_bn() {
    var object = [$("#MaSoBenhNHan"), $("#HoTen"), $("#GioiTinh"), $("#NamSinh"), $("#GioiTinh"),
        $("#SoNha"), $("#TinhTP"), $("#QuanHuyen"), $("#PhuongXa"),
        $("#DoiTuong"), $("#PhongKham")
    ];
    var err = 0;
    for (var i = 0; i < object.length; i++) {
        if (object[i].val().length < 1) {
            object[i].css('border', 'solid 1px red');
            err = 1;
        }
    };
    return err;
}
// Kiểm tra đầu vào khi nhập mã Mã thẻ BHYT:
function validate_mathebhyt() {

    // Kiểm tra chiều dài chuổi
    len = $("#MaBHYT").val().length;
    value = $.trim($("#MaBHYT").val());
    err = "0";
    if (len == 20) {
        // Kiểm tra 2 ký tự đầu
        p = /(DN|HX|CH|NN|TK|HC|XK|CA|HT|TB|MS|XB|XN|TN|CC|CK|CB|KC|HD|BT|HN|TC|TQ|TA|TY|TE|HG|LS|CN|HS|GD|TL|XV|NO)/gi;
        if (value.match(p) == null)
            err = "2 ký tự đầu không đúng";
        else err = "0";
        // Kiểm tra các ký tự sau có phải là số
        if (len == 20 && value.match(/\d{18}$/g) == null)
            err = "=>Các ký tự sau 0 đúng";
    } else {
        err = " Chiều dài chưa đủ:  ";
    }
    // Kết thúc xuất thông báo nếu nhập sai
    if (err != 0) {
        msg(err);
    } else {
        // Tu dong xat dinh tuyen va ten vien
        tu_dong_lay_xat_dinh_tuyen_bv();
    }
}
// Validate dữ liệu theo loại tên loại 
function validate(id) {
    switch ($(id).attr('id')) {
        case "":

            break;
    }
}
/*###############
    Function: 
    1. Thêm mới đối tượng, là tạo mới hoàn toàn 1 đối tượng patient trong CSDL    
    @Result: Thêm mới dữ liệu vào CSDL và xuất thông báo thành công hay thất bại
    2. Đăng ký mới 1 bệnh nhân đã có trong CSDL
    3. Xóa 1 bệnh nhân đã đăng ký nhưng chưa khám
    @Result: Xóa 1 lần đăng ký của người bệnh
    4. Sữa thông tin 1 người bệnh
    
################*/
/* 1. Thêm mới đối tượng, là tạo mới hoàn toàn 1 đối tượng patient trong CSDL  */
function Insert_them_moi_doi_tuong() {
    var data = {
        mabn: $("#MaSoBenhNHan").val(),
        hoten: $("#HoTen").val(),
        gioitinh: $("#GioiTinh").attr("key"),
        ngaysinh: $("#NgaySinh").val(),
        namsinh: $("#NamSinh").val(),
        sonha: $("#SoNha").val(),
        tinhtp: $("#TinhTP").attr("key"),
        quanhuyen: $("#QuanHuyen").attr("key"),
        phuongxa: $("#PhuongXa").attr("key"),
        doituong: $("#DoiTuong").attr("key"),
        mabhyt: $("#MaBHYT").val(),
        traituyen: $("#Tuyen").val(),
        tungay: $("#TuNgay").val(),
        denngay: $("#DenNgay").val(),
        ngayktc: $("#HuongKTC").val(),
        ngayts: $("#ThaiSan").val(),
        ngayut: $("#UngThu").val(),
        noikcbbd: $("#NoiDKKCBBD").val(),
        ngaydk: $("#NgayDK").val(),
        sokham: $("#SoKham").val(),
        phongkham: $("#PhongKham").attr("key"),
        bskham: $("#BacSiKham").attr("key"),
        lydokham: $("#LyDoKham").val(),
        nghenghiep: $("#NgheNghiep").attr("key"),
        dantoc: $("#DanToc").attr("key"),
        quocgia: $("#QuocGia").attr("key"),
        nhommau: $("#NhomMau").attr("key"),
        macmnd: $("#CMND").val(),
        mabhxh: $("#BHXH").val(),
        dtnha: $("#DTNha").val(),
        dtcoquan: $("#DTCoQuan").val(),
        dtdidong: $("#DTDiDong").val(),
        email: $("#Email").val(),
        cholam: $("#ChoLam").val(),
        vaive: $("#QuanHeVaiVe").val(),
        hoten_qh: $("#QuanHeHoTen").val(),
        diachi_qh: $("#QuanHeDiaChi").val(),
        dienthoai_qh: $("#QuanHeDT").val()
    };
    if (validate_object_bn() == false) {
        var url = "/cyber/tiepnhan/dangkykhambenh/act_dang_ky_kham_benh";
        gui_du_lieu(url, data, function(result) {
            msg(result);
            if (result != 'null') {
                // Enable các nút như new_patient, registor_patient, sửa, xóa, in, print
                $(".btn-bar button, .btn-bar select").prop('disabled', false);
                //  Ẩn 2 nút lưu và sửa
                $("#btnLuu, #btnBoQua").prop('disabled', true);
                // ẩn tất cả các input
                $("#nhaplieu input").attr('disabled', 'disabled');
                // Hủy các input có class borderRed 
                $("input").removeAttr('borderRed');
            }
        });
    } else {
        msg("Hãy điền đầy đủ các trường có màu đỏ.");

    }
}
/* 2. Đăng ký mới 1 bệnh nhân đã có trong CSDL */
/* 3. Xóa 1 bệnh nhân đã đăng ký nhưng chưa khám */
function Delete_benh_nhan() {
    var r = confirm("Bạn có muốn xóa bệnh nhân có mã là:" + $("#MaSoBenhNHan").val());
    if (r == true) {
        data = {
            mabn: $.trim($("#MaSoBenhNHan").val())
        };
        url = '/cyber/tiepnhan/dangkykhambenh/act_xoa_benh_nhan_chua_kham';
        $.post(url, data, function(data, textStatus, xhr) {
            msg(data.error);
        });
    } else {
        // nothing
    }
}
// Function dùng chung
/*###############
    Tạo table
    @Params: 
    - @idContent: là phần tử chứa table
    - @arrColumnName: Là Array tập hợp tên của tất cả các cột 
    Ex: ["c1","c2","c3","c4","c5"]
    - @arrColumnValue: Dạng Array tập hợp tất cả các giá trị trong phần nội dung table
    Ex: [["das","asda","asdas","asdas","asdas"] ,[ "das","asda","asdas","asdas","asdas"]]
    @Result: Xuất ra 1 table
################*/
function create_table_header(idContent, arrTitleColumn) {
    var string = "";
    // Phần header
    string += "<table> <thead>  <tr>";
    for (var i = 0; i < arrTitleColumn.length; i++) {
        string += '<th>' + arrTitleColumn[i] + '</th>';
    };
    string += '</tr></thead>';
    string += '<tbody>';
    string += '</tbody></table>';
    $(idContent).append(string);
}

function create_table_body(idContent, json) {
    for (var i = 0; i < arrColumnValue.length; i++) {
        string += '<tr>';
        for (x in arrColumnValue[i]) {
            string += '<td>' + arrColumnValue[i][x] + '</td>';
        }
        string += '</tr>';
    };
    string += '</tbody></table>';
    $(idContent).append(string);
}
/*#######################
    Parse dữ liệu dạng json ra cho table sử dụng
    @Params: 
    - @json: dữ liệu json     
    Ex: [{"a1":"v1","k1":"v2"},{"a1":"v1","k1":"v2"}]
    - @keyArr: Dạng Array tập hợp tất cả các giá trị trong phần nội dung table
    Ex: ["c1","c2","c3","c4","c5"]
    @Result: Xuất ra array sau khi parse json 
    Ex: [["das","asda","asdas","asdas","asdas"] ,[ "das","asda","asdas","asdas","asdas"]]
#######################*/
function testA() {

    gui_du_lieu('/cyber/tiepnhan/dangkykhambenh/act_tim_kiem_benh_nhan', null, function(json) {

        // điền dữ liệu vào form gợi ý                            
        var json = $.parseJSON(json);
        msg(json.bh_userid_ten);
    });
}

function parseJsonTable(json, keyArr) {
    var arrColumnValue = ["bacsi", "bh_userid", "maql"];
    // data = JSON.parse(json);
    var arrResult = new Array();
    var arrTemp = new Array();
    var j = 0;
    for (var i = 0; i < json.length; i++) {

        for (x in json) {
            arrTemp[j] = json[i][x];
            j++;
        };
        arrResult[i] = arrTemp;
    };
    msg(arrResult);
}

// Table tìm kiếm bệnh nhân
// function create_table_tim_kiem_benh_nhan(idContent,arrColumnValue){
//     var arrColumnName  = ["۞","Mã Bệnh Nhân"," Họ và tên"," Ngày sinh"," Tuổi","Giới tính","Đối tượng","Ngày đăng ký","Khoa phòng"," Bác sĩ","Chẩn đoán bệnh","  Lần","Số vào viện","Tuyến"," Mã thẻ BHYT","Chỗ làm","Số nhà"," đường"," Phường/Xã"," Quận/Huyện"," Tỉnh/TP","Email","ĐT Nhà"," ĐT Cơ quan"," ĐT Di động"," Ngày cập nhật"," Nhập liệu viên"];

//     create_table(idContent,arrColumnName,arrColumnValue);
// }

// hieu_ung_dung_chung
// Viết hoa đầu chữ
function capitalize(thisId) {

    $(thisId).css('text-transform', 'capitalize');

}

function uppercase(thisId) {
    $(thisId).val().toUpperCase();
}
// Alert dialog 
function msg(message) {
    // Nội dung mesage
    var dialog = '<div class="dialog-content"></div><div class="dialog"><div class="dialog-caption"><b>';
    dialog += t('thongbao') + '</b></div><div class="dialog-message">' + message;
    dialog += '</div><div class="dialog-footer"><button class="dialog-bt-cancel">Cancel</button></div></div>';
    // Ghi vào document
    $("#view-hidden").show().html(dialog);
    var top = $(window).height() / 2 - $(".dialog").height() / 2;
    var left = $(window).width() / 2 - $(".dialog").width() / 2;
    //  Set póition
    $(".dialog").css({
        top: top,
        left: left
    });
    // Set nút close
    $(".dialog-bt-cancel").click(function(event) {
        $("#view-hidden").html('');
    });

    //  Focus button trên dialog
    $(".dialog-bt-cancel").focus();
    // Sự kiện khi enter thì ẩn dialog
    $(".dialog-bt-cancel").keyup(function(event) {
        if (event.keyCode == 13) {
            $(this).trigger('click');
            $(currentIdFocus).focus();
        }
    });
    // Drag box
    $(".dialog").draggable({
        handle: ".dialog-caption"
    });
    $(".dialog-bt-cancel").focusin();
}
// Function khi enter sẽ nhảy đến input tiếp theo
function enter_to_tab(){
    $("input").keydown(function(event) {
        if(event.keyCode==13){
            index = parseInt ($(this).attr('tab'));
            for (var i = index; i < index+10; i++) {              
                // Nếu input tiếp theo là  disable true
                if($("input[tab="+(i+1)+"]").prop('disabled')==false){                        
                    $("input[tab="+(i+1)+"]").focus();
                    //  Thoát khỏi vòng lặp
                    i = index+11;
                }else
                {
                    
                }        
            };
        }
    });
   
    
}
// Enter input 
$(window).ready(function() {
    // Khởi tạo giao diện
    Initialize();
    enter_to_tab();
});