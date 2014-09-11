/* #######################
    8/4/2014 Lê Anh Thắng
    Dịch ngôn ngữ sang 4 loại trong javascript
    * Sử dụng đặt script này lên đầu các file script cần dịch
    chú ý cần gán thêm đoạn script xác định ngôn ngữ này
        <script type="text/javascript">
            var lang = "en";
        </script>
    @Params: languageData:  là json chứa tất cả các ký tự cần địch 
    quy ước mỗi key gồm chuổi các ký tự mô tả từ cần dịch khoản 6 từ nếu dày hơn thì cắt bớt
##########################*/

// Dữ liệu ngôn ngữ
var languageData ={
    // Dropbox translate 
    vung:           ["Vùng","Location ","ds","sadas"],
    ma:             ["Mã","ID ","",""],
    tuyen:          ["Tuyến","Level ","",""],
    nhomnhanvien:   ["Nhóm nhân viên","User group ","",""],    
    phanloai:       ["Phân Loại","Type","",""],
    tendangnhap:    ["Tên Đăng Nhập","Login name ","",""],
    tinhtp:         ["Tỉnh/TP","Province","都市",""],
    quanhuyen:      ["Quận/Huyện","District","地区",""],
    phuongxa:       ["Phường/Xã","Ward","ソーシャル",""],
    doituong:       ["Đối tượng","Patient class","オブジェクト",""],
    gioitinh:       ["Giới tính","Gender","ジェンダー",""],   
    tenbaocaobo:    ["Tên báo cáo bộ","Dept. name in report ","",""],
    khoaphong:      ["Khoa Phòng","Dept. name ","",""],
    thongbao:       ["Thông Báo","Notification","",""],
    // Table translate
    mabenhnhan:     ["Mã bệnh nhân","Patient ID","",""],
    hovaten:        ["Họ và tên"," Full name ","",""],
    ngaysinh:       ["Ngày sinh","D.O.B","",""],
    tuoi:           ["Tuổi","Age","",""],
    gioitinh:       ["Giới tính","Gender","",""],
    doituong:       ["Đối tượng","","",""],
    ngaydangky:     ["Ngày đăng ký","","",""],
    khoaphong:      ["Khoa Phòng","","",""],
    bacsi:          ["Bác sĩ","Doctor","",""],
    chuandoanbenh:  ["Chuẩn đoán bệnh","","",""],
    lan:            ["Lần","","",""],
    sovaovien:      ["Số lần vào viện","","",""],
    traituyen:      ["Trái Tuyến","SSN","",""],
    mathebhyt:      ["Mã thẻ BHYT","","",""],
    cholam:         ["Chổ làm","","",""],
    sonhaduong:     ["Số nhà, đường","","",""],
    dtnha:          ["ĐT Nhà","Home Phone","",""],
    dtdidong:       ["ĐT Di động","Cell phone","",""],
    dtcoquan:       ["ĐT Cơ quan","Work phone","",""],
    ngaycapnhap:    ["Ngày cập nhập","Update on","",""],
    nhaplieuvien:   ["Nhập liệu viên","User","",""],
    leanhthang:   ["Nhập liệu viên","User","",""],
};
/*###################
    Hàm dịch
    @Params: 
    - @keyData: là từ khóa để select trong dữ liệu dịch
    - @typeLang: Loại ngôn ngữ vn/jp/en/...
    @Return: Trả về string kết quả dịch   
#####################*/
function translate(keyData, typeLang){
    try{
        if(languageData[keyData][typeLang].lenght="")
                return languageData[keyData][0];
            return languageData[keyData][typeLang];
    }catch (er){
        alert( "Error: Language translate t("+keyData+") not exist!");
    }
}
/*####################
  Hàm dịch
  @Params: keyData: là từ khóa để select trong dữ liệu dịch
  @Return: Trả về string kết quả dịch   
######################*/
function t(keyData){
    // Dịch
    switch(lang){
        case "vn":
            return translate(keyData,0);
        break;
        case "en":
            return translate(keyData,1);
        break;
        case "jp":
            return translate(keyData,2);
        break;
        default:
            return translate(keyData,3);
    }
}