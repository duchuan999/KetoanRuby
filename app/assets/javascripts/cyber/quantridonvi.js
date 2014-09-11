$(document).ready(function () {
    // ẩn danh sách thành viên và đăng ký thêm thành viên, ẩn lun button
    $('#thongtinthaydoi_header2').hide();
    $('#thongtinthaydoi_content2').hide();
    $('#thongtinthaydoi_header3').hide();
    $('#thongtinthaydoi_content3').hide();
    $('#thongtinthaydoi_footer').hide();

    // sự kiện khi click vào số thành viên hiện tại
    $('#filldata_content1 .sothanhvienht').click(function () {
        // hiện danh sách thành viên
        $('#thongtinthaydoi_header2').show();
        $('#thongtinthaydoi_content2').show();

        // khai báo số thành viên hiện tại, thành viên tối đa
        var sotvht = parseInt($(this).attr('sosanh').split('~')[0]);
        var sotvtd = parseInt($(this).attr('sosanh').split('~')[1]);

        // kiểm tra xem số thành viên hiện tại vs số thành viên tối đa
        // nếu nhỏ hơn thì hiện 'thêm thành viên', ngược lại 'đã đạt tối đa thành viên'
        if (sotvht < sotvtd) {
            $('#tblinner2 .quanlybenhnhan').text('Thêm thành viên');
        } else {
            $('#tblinner2 .quanlybenhnhan').text('Đã đạt tối đa số thành viên');
        }

        // khai báo url và data
        var url = '/cyber/quantridonvi/act_lay_danh_sach_thanh_vien';
        var data = {moduleid: $(this).attr('key')};

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            // chuyển đổi datajson
            var datajson = JSON.parse(res);

            // khai báo chuỗi html
            var html = '';

            // duyệt từng dòng dữ liệu
            $.each(datajson, function (i, items) {
                html += '<tr>';
                html += '<td><b>' + items.stt + '</b></td>';
                html += '<td><a>' + items.username_ + '</a></td>';
                html += '<td>' + items.lh_email + '</td>';
                html += '<td>' + items.hoten + '</td>';
                var ghichu = '';
                if (items.ghichu == '0') {
                    ghichu = 'Thành viên';
                } else {
                    ghichu = 'Quản trị đơn vị';
                }
                html += '<td>' + ghichu + '</td>';
                var xoa = '';
                if (items.ghichu == '0') {
                    xoa = '<a key=\'' + items.loginid + '\' onclick=\'xoa_thanh_vien(this)\'>Xóa</a>';
                } else {
                    xoa = '';
                }
                html += '<td>' + xoa + '</td>';
                html += '</tr>';
            });

            // gán vào form danh sách thành viên
            $('#filldata_content2').html(html);
        });
    });

    // khai báo chứa chi phí
    var chiphi = 0;

    // sự kiện khi click vào tăng thêm
    $('#filldata_content1 .sothanhvientd').click(function () {
        // hiện đăng ký thêm thành viên
        $('#thongtinthaydoi_header3').show();
        $('#thongtinthaydoi_content3').show();
        $('#thongtinthaydoi_footer').show();

        // reset lại giá trị trong form
        $('#txtModule').val('');
        $('#txtSotvht').val('');
        $('#txtSotvtt').val('0');
        $('#txtTongtv').val('');
        $('#txtTongcp').val('');

        // lấy thông tin
        var moduleid = $(this).attr('str').split('~')[0];
        var tenmodule = $(this).attr('str').split('~')[1];
        var sotvht = $(this).attr('str').split('~')[2];
        var sotvtd = $(this).attr('str').split('~')[2];
        chiphi = $(this).attr('str').split('~')[3];

        // gán thông tin vào form
        $('#txtModule').attr('key', moduleid);
        $('#txtModule').val(tenmodule);
        $('#txtSotvht').val(sotvht);
        $('#txtTongtv').val(sotvtd);
        $('#txtTongcp').val(chiphi);
    });

    // sự kiện khi thay đỗi dữ liệu trong txtbox số thành viên tăng thêm
    $('#txtSotvtt').blur(function () {
        // lấy số thành viện hiện tại
        var sotvht = parseInt($('#txtSotvht').val());

        // gán tổng số thành viên lại
        var tongtv = parseInt($(this).val()) + parseInt(sotvht);
        $('#txtTongtv').val(tongtv);

        // sau đó cập nhật lại chi phí
        $('#txtTongcp').val(chiphi * tongtv);
    });

    // sự kiện khi click vào gửi yêu cầu
    $('#btnGuiyeucau').click(function () {
        // khai báo url, và data
        var url = '/cyber/quantridonvi/act_dang_ky_them_thanh_vien';
        var data = {
            moduleid: $('#txtModule').attr('key'),
            sntt: $('#txtSotvtt').val()
        };

        // gửi đến server
        gui_du_lieu(url, data, function (res) {
            alert(res);
        })
    });
});

// sự kiện khi nhấn xóa trong danh sách thành viên
function xoa_thanh_vien(self) {
    // lấy id
    var id = $(self).attr('key');
    alert(id);
}
