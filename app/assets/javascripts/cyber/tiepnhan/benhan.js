/*
      1.1. Tiếp nhận đăng ký khám bệnh
      http://172.168.1.9:3000/cyber/tiepnhan/dangkykhambenh/index#
 */
function hien_thi_goi_y() {
    var view = '<div style="width: 36px; height: 18px;" id="view">' +
        '<div style="width: 16px; height: 16px; float: left;"></div>' +
        '<div style="width: 16px; height: 16px; float: left;"></div>' +
        '</div>';

    $("input").on("click blur", function(event) {
        var top = $(this).offset().top - 2 - $(this).height();
        var left = $(this).offset().left + $(this).width() - 16;
        $("#s").html(view);
        $("#view").css({
            position: 'absolute',
            top: top + "px",
            left: left + "px"
        });
    });
}

function event_kham_benh() {

}

function event_button() {
    // Khi Nhấp vào các nút chức năng
    $("#benhan_header .btn-bar button").click(function(event) {
        // Xóa bỏ trạng thái active cho nút
        $("#benhan_header .btn-bar  button").removeClass('active-button');
        // Gán trạng thái active cho nút
        $(this).addClass('active-button');
        // Lấy index của nút
        var maxIndex = $("#benhan_header .btn-bar button").last().index();
        var index = $(this).index();
        //  Khoong ap dung cho 2 nut cuoi
        if (index < maxIndex - 2) {
            //  Ẩn tất cả div con của #report_wrapper
            $("#report_wrapper > div").hide();
            // Hiển thị view cho từng nút active
            $("#report_wrapper > div").eq(index).show();
            $("#btn-chonbenhan").html("<<");
        }
        if (index == maxIndex) {
            //  Ẩn tất cả div con của #report_wrapper
            $("#report_wrapper > div").hide();
            // Hiển thị view cho từng nút active
            $("#report_wrapper > div").eq(index - 2).show();

            $(this).html(">>");
        }

    });

    //  Khi click vao nut goi y cuar form
    $("#report_wrapper .icon_goi_y_normal").click(function(event) {
        $(this).removeAttr('icon_goi_y_normal');
        $(this).addClass('icon_goi_y_active');
        $(this).next("input[type='text'], textarea").val('Bình Thường');
        $(this).parent("*").next("textarea").val("Bình thường");
    });

    // Khi click vòa nút thoát
    $("#close").click(function(event) {
        $("#contain-3 .view-hidden").hide();
    });
}
$(window).load(function() {
    event_button();
});