// sự kiện khi tải xong trang web
$(document).ready(function () {
    // phân chia tab
    $("#tabs").tabs();

    // ghi đè các thuộc tính css trong jquery ui
    $('body').css('font-size', '65%');
    $('.ui-tabs .ui-tabs-panel').css('padding', '0px 5px 5px 5px');
    //$('table').attr({'cellPadding': '0', 'cellSpacing': '0'});
    //$('table tr td').css('padding', '1px');
    ////////////////////////////////////////////
});
