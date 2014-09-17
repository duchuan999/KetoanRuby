function jsRoar(name) {
    alert('I am ' + name + '. Hear me roar!');
}
function check(event,v_this){
    if(event.keyCode =="9")
    {
        if(v_this.value=="")
        {
            alert("Nhap ma");
            return;
        }
    }
}
function thong_tin_nhomtk(id) {
    var url = "/dungchung/act_tim_kiem_nhom_tk";
    var keyvalue = "1~0";
    var cols = "tennhom~manhom";

    var tieude = "Tên nhóm tk~Mã nhóm";

    var content = $(id);
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, null, function(data) {
        dien_du_lieu_dang_table(content, keyvalue, cols, data, function(self) {

        });
    });

}
function thong_tin_tinhchat(id) {
    var url = "/dungchung/act_tim_kiem_tinhchat";
    var keyvalue = "1~0";
    var cols = "ten~ma";

    var tieude = "Tên ~Mã";

    var content = $(id);
    // hiển thị form gợi ý
    form_goi_y(tieude, content);
    gui_du_lieu(url, null, function(data) {
        dien_du_lieu_dang_table(content, keyvalue, cols, data, function(self) {

        });
    });

}

function Insert_them_moi_doi_tuong()
{
    var data={
        sotk: $("#sotk").val(),
        tentk: $("#tentk").val(),
        tentienganh: $("#tentienganh").val(),
        dmnhomtk: $("#dmnhomtk").attr("key"),
        tinhchat: $("#tinhchat").attr("key"),
        diengiai: $("#diengiai").val()
    };
   if(validate_object_tk()==false)
   {
       var  url="/danhmuc/dmhethongtk/act_insert_tk";
       gui_du_lieu(url,data,function(result)
       { msg(result);
           if (result != 'null') {

               // Hủy các input có class borderRed
               $("input").removeAttr('borderRed');
           }
       });

   }
    else
   { msg("Hãy điền đầy đủ các trường có màu đỏ.");
   }
}
    function validate_object_tk() {
        var object = [$("#sotk"), $("#tentk"), $("#tentienganh"), $("#dmnhomtk"), $("#tinhchat"),
            $("#diengiai")
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

function msg(message) {
    // Nội dung mesage
    var dialog = '<div class="dialog-content"></div><div class="dialog"><div class="dialog-caption"><b>';
    dialog +='</b></div><div class="dialog-message">' + message;
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