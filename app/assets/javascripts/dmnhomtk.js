/**
 * Created by DELL on 09/01/2014.
 */

/* sử dụng dùng chung cho tất cả các file js */

// tải 1 trang bắt kỳ bằng ajax vào 1 thẻ cần chứa nội dung, version 1
// - path: đường dẫn trang cần tải
// - content: id của thẻ cần chứa nội dung tải
function tai_trang(path, content) {
    jQuery.ajax({
        type: "POST",
        url: path,
        dataType: "html",
        beforeSend: function () {
            $("#loading").show();
        },
        success: function (ser_res) {
            $("#loading").hide();
            content.hide().html(ser_res).fadeIn('slow');

        },
        error: function (ex) {
            alert("Error Server!!!" + ex);
        }
    });
}

// tải 1 trang bắt kỳ bằng ajax vào 1 thẻ cần chứa nội dung, sử dụng trên dialog version 2
// - path: đường dẫn trang cần tải
// - content: id của thẻ cần chứa nội dung tải
function tai_trang_v2(path, content) {
    jQuery.ajax({
        type: "POST",
        url: path,
        dataType: "html",
        beforeSend: function () {
            $("#dialog_wrapper .footer .loading").show();
        },
        success: function (ser_res) {
            $("#dialog_wrapper .footer .loading").hide();
            content.hide().html(ser_res).fadeIn('slow');
        },
        error: function (ex) {
            alert("Error Server!!!" + ex);
        }
    });
}

// gửi dữ liệu đến server - và server trả dữ liệu json về
// - path: đường dẫn server cần gửi đến
// - parameter: tham số json cần truyền vào
// - nhan_du_lieu: hàm callback để định nghĩa lại, có tham số là giá trị server trả về
function gui_du_lieu(url, data, nhan_du_lieu) {
    jQuery.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "html",
        beforeSend: function () {
            $("#loading").show();
        },
        success: function (ser_res) {
            $("#loading").hide();
            nhan_du_lieu(ser_res);
        },
        error: function (ex) {
            alert("Error Server!!!" + ex);
        }
    });
}

// chuyển giá trị undefined, null thành chuỗi rỗng
// - str: giá trị cần chuyển
function chuyen_doi_gia_tri(str) {
    if (str == null || str == "undefined") {
        return "";
    } else {
        return str;
    }
}

// show form gợi ý
// - tieude: là tiêu đề của form
// - content: là id cần hiển thị form gợi ý
function form_goi_y(tieude, content) {
    // làm sach thẻ wrapper
    $("#wrapper").remove();
    // định nghĩa biến form gợi ý
    var form = "<div id=\"wrapper\" style=\"position:absolute\">";
    form += "<link rel=\"stylesheet\" href=\"/assets/cyber/lib/smartsearch.css\">";
    form += "<div id=\"smart-search\" style=\"height: auto; max-height: 200px; overflow-x:hidden;\">";
    form += "<table cellspacing=\"0\" cellpadding=\"1\" border=\"0\" width=\"auto\" height=\"auto\">";

    form += "<tr>";
    // duyệt từng phần tử thêm
    for (var i = 0; i < tieude.split("~").length; i++) {
        form += "<th style=\"padding: 0 5px; vertical-align: middle\" class=\"form_goi_y_column\"><span>" + tieude.split("~")[i] + "</span></th>";
    }
    form += "</tr>";
    form += "<tbody id=\"tbodyfilldata\">";
    form += "</tbody>";
    form += "</table>";
    form += "</div>";
    form += "<div style=\"text-align: right; cursor :pointer; background-color: #B0B0B0\"><span class=\"clear\">[&nbsp&nbsp]</span> | <span class=\"close\"><img src=\"/assets/cyber/icon/close.png\" alt=\"close\"/></span></div>";
    form += "</div>";

    // xác định vị trí top - left của element cần hiển thị trên form goi y
    var x = $(content).offset().left;
    var y = $(content).offset().top + $(content).height() +5;

    // thêm form suggest vào body trang gọi hàm showsuggest
    $("body").append(form);
    // thiet lập vị trí hiển thị form gợi ý
    $("#wrapper").css({display: "block", left: x, top: y});

    // sự kiện click close
    $('#wrapper .close').click(function () {
        // ẩn
        $("#wrapper").hide();
        // sau đó xóa thẻ wrapper
        $("#wrapper").remove();
    });

    // Thoát khỏi màng hình tìm kiếm
    // sự kiện click xóa trắng
    $('#wrapper .clear').click(function () {
        // xóa trắng dữ liệu trong thể input (key và value)
        $(content).val('');
        $(content).removeAttr('key');

        // ẩn
        $("#wrapper").hide();
        // sau đó xóa thẻ wrapper
        $("#wrapper").remove();
    });
}

// điền dữ liệu dạng table (bảng), nghĩa là các dòng điều giống nhau chỉ khác dữ liệu đổ vào
// - id: là id của thẻ input
// - keyvalue: nội dung hiển thị, và nội dung khóa
// - cols: tên các cột vd: id~ten~diachi
// - datajson: dữ liệu json
// - inneroptionfunc: hàm tùy chọn bên trong sự kiện dbclick dòng trên form gợi ý
function dien_du_lieu_dang_table(id, keyvalue, cols, datajson, inneroptionfunc) {
    // định nghĩa biến chứa nội dung tìm được
    var form = "";
    // định nghĩa biến chứa dữ liệu json
    var parsedatajson;
    try {
        parsedatajson = jQuery.parseJSON(datajson);
    } catch (ex) {
        parsedatajson = datajson;
    }
    try {
        // duyệt từng phần tử json
        jQuery.each(parsedatajson, function (i, item) {
            // khi hiển thị form gợi ý lên, mặc định sẽ "active" dòng đầu tiên
            if (i == 0) {
                form += "<tr class=\"active\">";
            } else {
                form += "<tr>";
            }
            // duyệt từng phần tử cols
            for (var j = 0; j < cols.split("~").length; j++) {
                // kiểm tra xem cột nào có ký hiệu [] thì ẩn đi, ngược lại thì hiển thị
                // vd: tentt~[vung]~ma
                if (cols.split("~")[j].match(/^\[/) != null) {
                    form += "<td style=\"display: none\">" + chuyen_doi_gia_tri(item[cols.split("~")[j].substr(1, cols.split("~")[j].lastIndexOf("]") - 1)]) + "</td>";
                } else {
                    form += "<td style=\"padding: 0 5px; vertical-align: middle\">" + chuyen_doi_gia_tri(item[cols.split("~")[j]]) + "</td>";
                }
            }
            form += "</tr>";
        });
    } catch (ex) {
        // trường hợp lỗi xảy ra thì ko hiển thị
        form += "<tr></tr>"
    }
    // thêm vào tbody của table trong form gợi ý
    $("#tbodyfilldata").html(form);
    // fixed kích cỡ table
    $("#wrapper #smart-search table").load(function() {
        /* Act on the event */
        $(this).css({
            'min-width': id.width()
        });
    });

    // sự kiện khi click 1 dòng
    $('#wrapper #smart-search table tr').click(function () {
        $("#wrapper #smart-search table .active").removeClass("active");
        $(this).addClass('active');
    });

    // sự kiện nhấn dbclick tr
    $('#wrapper #smart-search table tr').click(function () {
        // gán dữ liệu vào
        var key = $(this).children().last().html();
        var value = $(this).children().eq(parseInt(keyvalue.split("~")[1])).text();
        // gán thuộc tính key
        $(id).attr("key", key);
        // gán thuộc tính value
        $(id).val(value);
        id.focus();
        // hàm tùy biến
        try {
            inneroptionfunc(this);
        } catch (ex) {
            console.log(ex);
        }
        // gọi sự kiện close
        $("#wrapper .close").trigger('click');

    });
    $(id).keyup(function(event) {
        // Không Nhấp bàn lên, xuống, hoặc enter
        // Tổng số dòng dữ liệu
        var maxIndex = $("#wrapper #smart-search table tr:last-child").index();
        switch(e.keyCode){
            case 38:
                tempIndex--;
                $("#wrapper #smart-search table tr").removeClass('color-index');
                $("#wrapper #smart-search table tr").eq(tempIndex).addClass('color-index');
                if(tempIndex <= -1)
                    tempIndex =maxIndex-1;
                break;
            case 40:
                tempIndex++;
                $("#wrapper #smart-search table tr").removeClass('color-index');
                $("#wrapper #smart-search table tr").eq(tempIndex).addClass('color-index');
                if(tempIndex >= maxIndex-1){
                    tempIndex =-1;
                }
                break;
            case 13:
                $(id).val($("#wrapper #smart-search table tr").eq(tempIndex).find("span").first().text());
                $("#wrapper").slideUp(50);
                break;
            default:
                searchArrayColumn();
                tempIndex=0;
                break;
        }
    });

}

// cắt chuỗi theo dạng split, trả về chuỗi cần lấy
//  - str: chuỗi dữ liệu
//  - index: vị trí cần lấy
function cat_chuoi_split(str, split, index) {
    // lấy chuỗi cần phân cách
    var temp_split = str.split(split);
    // khai báo biến trả về
    var temp_str = '';
    // duyệt từng phần tửng mảng
    for (var i = 0; i < temp_split.length; i++) {
        // tìm số index cần tìm
        if (i == index) {
            // gán chuỗi cần tìm và thoát vòng lặp
            temp_str = temp_split[i].toString();
            break;
        }
    }
    // trả về giá trị
    return temp_str;
}

// hiện trang web, sử dụng cho flexigrid
//  - id: tên id (nội dung) cần hiển thị
function hien_thi_web(id) {
    // hiển thị từ từ
    id.fadeIn('slow');
    // thiết lập z-index cho class gBlock trong flexigrid
    $(".gBlock").css('z-index', '-1');
}

// dịch đa ngôn ngữ
//  - index: chỉ số của ngôn ngữ cần dịch
function translation(index) {
    return lang[index];
}
