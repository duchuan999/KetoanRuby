// sự kiện khi trang web tải xong
$(document).ready(function () {
    // biến trạng thái sử dụng ẩn hiện content và footer khi dbl click
    var status = true;

    // cho phép di chuyển dialog
    $("#dialog_wrapper").draggable().resizable();

    // gọi hàm resize div content, và iframe khi sự kiện dialog thực thi
    $("#dialog_wrapper").resize(function () {
        // gọi hàm resize div content và iframe
        resize_divcontent_iframe();
    });

    // sự kiện dbl click và thẻ header
    $("#dialog_wrapper .header").dblclick(function () {
        if (status) {
            // ẩn content, footer
            $("#dialog_wrapper .content, #dialog_wrapper .footer").hide();

            // thiết lập lại chiều cao của dialog
            $("#dialog_wrapper").height($(this).height());

            // gán lại status
            status = false;
        } else {
            // hiện div content, footer
            $("#dialog_wrapper .content, #dialog_wrapper .footer").show();

            // resize lại dialog
            resize_dialog();

            // gán lại status
            status = true;
        }
    });

    // sự kiện khi click vào reset position
    $("#reset_position").click(function () {
        // thiết lập position cho dialog
        $("#dialog_wrapper").css({top: '0px', left: '0px'});

        // hiện div content, footer
        $("#dialog_wrapper .content, #dialog_wrapper .footer").show();

        // resize mặc định
        resize_dialog();
    });

    // sự kiện khi click vào đóng dialog
    $("#close_dialog").click(function () {
        // reset lại menu
        reset_color_font_weight_menuitem();

        // thiết lập lại src cho iframe
        $("#content_iframe").attr("src", "");

        // ẩn dialog
        $("#dialog_wrapper").hide();
    });

    //xóa bỏ ui-resizable-e và ui-resizable-s của jquery ui
    $(".ui-resizable-e").remove();
    $(".ui-resizable-s").remove();
});
//////////////////////////////////////////////////////////////////////////////////////

// định nghĩa hàm resize splitter
function resize_splitter() {
    // khai báo width, height của window
    var w = '99.9%';
    var h = $(window).height() - $("header").height() - $("footer").height() - 25;

    // gọi sự kiện phân chia splitter
    $('#content').jqxSplitter({ width: w, height: h, panels: [
        { min: 200, size: 250},
        { min: 600, size: w - 250 }
    ]});
}

// gọi hàm chỉnh resize splitter khi tải trang xong
resize_splitter();

// định nghĩa hàm load treeview
function load_treeview() {
    var path = '/assets/cyber/menu/_treeview.html';

    // gọi hàm tải treeview
    tai_trang(path, $('#browser'));
}

// gọi hàm load treeview
load_treeview();

// định nghĩa hàm resize cho dialog
function resize_dialog() {
    // gán giá trị w, h cho dialog
    $("#dialog_wrapper").css({width: '99.99%', height: '99.99%'});

    resize_divcontent_iframe();
}

// gọi resize dialog khi tải trang
resize_dialog();

// định nghĩa hàm resize div content và iframe
function resize_divcontent_iframe() {
    // chứa h của dialog
    var h = $("#dialog_wrapper").height();

    // thiết lập h, w cho div content
    $("#dialog_wrapper .content").height(h - 50);

    // thiết lập w, h cho iframe
    $("#content_iframe").height($("#dialog_wrapper .content").height());
}

// định nghĩa hàm hiển thị dialog và tham số là url và tiêu đề hiển thị
function hien_thi_dialog(url, tieude) {
    // gọi hàm resize dialog
    resize_dialog();

    // thiết lập tiêu đề cho dialog
    $("#dialog_wrapper .header .title").text(tieude);

    // gán thuộc tính url cho frameset
    $("#content_iframe").attr('src', url);

    // hiển thị dialog
    $("#dialog_wrapper").show();
}
