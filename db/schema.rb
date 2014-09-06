# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140827035134) do

  create_table "btdpxa", :id => false, :force => true do |t|
    t.string  "maphuongxa", :limit => 7,                                                                                                                                                                                                                                                                                                                                                            :null => false
    t.string  "maqu",       :limit => 5
    t.text    "tenpxa"
    t.string  "viettat",    :limit => 10
    t.decimal "thanhthi",                 :precision => 1, :scale => 0, :default => 1
    t.text    "chuyendi",                                               :default => "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  end

  create_table "btdquan", :id => false, :force => true do |t|
    t.string "maqu",     :limit => 5,                                                                                                                                                                                                                                                                                                                             :null => false
    t.string "matt",     :limit => 3
    t.text   "tenquan"
    t.text   "chuyendi",              :default => "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  end

  create_table "btdtt", :id => false, :force => true do |t|
    t.string "matt",     :limit => 3,                                                                                                                                                                                                                                                                                                                             :null => false
    t.text   "tentt"
    t.string "mavung",   :limit => 1
    t.text   "chuyendi",              :default => "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  end

  create_table "chungtu", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 20,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu"
    t.datetime "ngayhachtoan"
    t.string   "diachi",          :limit => nil
    t.string   "nguoinop",        :limit => nil
    t.string   "lydonop",         :limit => nil
    t.string   "kemtheo",         :limit => nil
    t.string   "loaichungtu",     :limit => 10
    t.string   "loaidoituong",    :limit => 10
    t.decimal  "stt",                            :precision => 5,  :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "nhanvien",        :limit => 20
    t.string   "tknganhang",      :limit => 15
    t.decimal  "mavaovien",                      :precision => 22, :scale => 0, :default => 0
    t.decimal  "maql",                           :precision => 22, :scale => 0, :default => 0
    t.decimal  "idvienphi",                      :precision => 25, :scale => 0, :default => 0
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
    t.string   "makp",            :limit => 3
  end

  create_table "chungtu_0114", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 20,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu"
    t.datetime "ngayhachtoan"
    t.string   "diachi",          :limit => nil
    t.string   "nguoinop",        :limit => nil
    t.string   "lydonop",         :limit => nil
    t.string   "kemtheo",         :limit => nil
    t.string   "loaichungtu",     :limit => 10
    t.string   "loaidoituong",    :limit => 10
    t.decimal  "stt",                            :precision => 5,  :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "nhanvien",        :limit => 20
    t.string   "tknganhang",      :limit => 15
    t.decimal  "mavaovien",                      :precision => 22, :scale => 0, :default => 0
    t.decimal  "maql",                           :precision => 22, :scale => 0, :default => 0
    t.decimal  "idvienphi",                      :precision => 25, :scale => 0, :default => 0
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
    t.string   "makp",            :limit => 3
  end

  add_index "chungtu_0114", ["ngaychungtu"], :name => "ind_chungtu_ngaychungtu_0114"

  create_table "chungtu_0214", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 20,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu"
    t.datetime "ngayhachtoan"
    t.string   "diachi",          :limit => nil
    t.string   "nguoinop",        :limit => nil
    t.string   "lydonop",         :limit => nil
    t.string   "kemtheo",         :limit => nil
    t.string   "loaichungtu",     :limit => 10
    t.string   "loaidoituong",    :limit => 10
    t.decimal  "stt",                            :precision => 5,  :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "nhanvien",        :limit => 20
    t.string   "tknganhang",      :limit => 15
    t.decimal  "mavaovien",                      :precision => 22, :scale => 0, :default => 0
    t.decimal  "maql",                           :precision => 22, :scale => 0, :default => 0
    t.decimal  "idvienphi",                      :precision => 25, :scale => 0, :default => 0
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
    t.string   "makp",            :limit => 3
  end

  add_index "chungtu_0214", ["ngaychungtu"], :name => "ind_chungtu_ngaychungtu_0214"

  create_table "chungtu_0314", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 20,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu"
    t.datetime "ngayhachtoan"
    t.string   "diachi",          :limit => nil
    t.string   "nguoinop",        :limit => nil
    t.string   "lydonop",         :limit => nil
    t.string   "kemtheo",         :limit => nil
    t.string   "loaichungtu",     :limit => 10
    t.string   "loaidoituong",    :limit => 10
    t.decimal  "stt",                            :precision => 5,  :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "nhanvien",        :limit => 20
    t.string   "tknganhang",      :limit => 15
    t.decimal  "mavaovien",                      :precision => 22, :scale => 0, :default => 0
    t.decimal  "maql",                           :precision => 22, :scale => 0, :default => 0
    t.decimal  "idvienphi",                      :precision => 25, :scale => 0, :default => 0
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
    t.string   "makp",            :limit => 3
  end

  add_index "chungtu_0314", ["ngaychungtu"], :name => "ind_chungtu_ngaychungtu_0314"

  create_table "chungtu_0414", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 20,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu"
    t.datetime "ngayhachtoan"
    t.string   "diachi",          :limit => nil
    t.string   "nguoinop",        :limit => nil
    t.string   "lydonop",         :limit => nil
    t.string   "kemtheo",         :limit => nil
    t.string   "loaichungtu",     :limit => 10
    t.string   "loaidoituong",    :limit => 10
    t.decimal  "stt",                            :precision => 5,  :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "nhanvien",        :limit => 20
    t.string   "tknganhang",      :limit => 15
    t.decimal  "mavaovien",                      :precision => 22, :scale => 0, :default => 0
    t.decimal  "maql",                           :precision => 22, :scale => 0, :default => 0
    t.decimal  "idvienphi",                      :precision => 25, :scale => 0, :default => 0
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
    t.string   "makp",            :limit => 3
  end

  add_index "chungtu_0414", ["ngaychungtu"], :name => "ind_chungtu_ngaychungtu_0414"

  create_table "chungtu_0514", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 20,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu"
    t.datetime "ngayhachtoan"
    t.string   "diachi",          :limit => nil
    t.string   "nguoinop",        :limit => nil
    t.string   "lydonop",         :limit => nil
    t.string   "kemtheo",         :limit => nil
    t.string   "loaichungtu",     :limit => 10
    t.string   "loaidoituong",    :limit => 10
    t.decimal  "stt",                            :precision => 5,  :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "nhanvien",        :limit => 20
    t.string   "tknganhang",      :limit => 15
    t.decimal  "mavaovien",                      :precision => 22, :scale => 0, :default => 0
    t.decimal  "maql",                           :precision => 22, :scale => 0, :default => 0
    t.decimal  "idvienphi",                      :precision => 25, :scale => 0, :default => 0
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
    t.string   "makp",            :limit => 3
  end

  add_index "chungtu_0514", ["ngaychungtu"], :name => "ind_chungtu_ngaychungtu_0514"

  create_table "chungtu_0614", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 20,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu"
    t.datetime "ngayhachtoan"
    t.string   "diachi",          :limit => nil
    t.string   "nguoinop",        :limit => nil
    t.string   "lydonop",         :limit => nil
    t.string   "kemtheo",         :limit => nil
    t.string   "loaichungtu",     :limit => 10
    t.string   "loaidoituong",    :limit => 10
    t.decimal  "stt",                            :precision => 5,  :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "nhanvien",        :limit => 20
    t.string   "tknganhang",      :limit => 15
    t.decimal  "mavaovien",                      :precision => 22, :scale => 0, :default => 0
    t.decimal  "maql",                           :precision => 22, :scale => 0, :default => 0
    t.decimal  "idvienphi",                      :precision => 25, :scale => 0, :default => 0
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
    t.string   "makp",            :limit => 3
  end

  add_index "chungtu_0614", ["ngaychungtu"], :name => "ind_chungtu_ngaychungtu_0614"

  create_table "chungtu_0714", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 20,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu"
    t.datetime "ngayhachtoan"
    t.string   "diachi",          :limit => nil
    t.string   "nguoinop",        :limit => nil
    t.string   "lydonop",         :limit => nil
    t.string   "kemtheo",         :limit => nil
    t.string   "loaichungtu",     :limit => 10
    t.string   "loaidoituong",    :limit => 10
    t.decimal  "stt",                            :precision => 5,  :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "nhanvien",        :limit => 20
    t.string   "tknganhang",      :limit => 15
    t.decimal  "mavaovien",                      :precision => 22, :scale => 0, :default => 0
    t.decimal  "maql",                           :precision => 22, :scale => 0, :default => 0
    t.decimal  "idvienphi",                      :precision => 25, :scale => 0, :default => 0
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
    t.string   "makp",            :limit => 3
  end

  add_index "chungtu_0714", ["ngaychungtu"], :name => "ind_chungtu_ngaychungtu_0714"

  create_table "chungtuchitiet", :id => false, :force => true do |t|
    t.string  "tkno",          :limit => 10,                                                :null => false
    t.string  "tkco",          :limit => 10,                                                :null => false
    t.string  "tknganhang",    :limit => 15
    t.decimal "sotien"
    t.string  "diengiai",      :limit => nil
    t.string  "doituong",      :limit => 20
    t.string  "sochungtu",     :limit => 20,                                                :null => false
    t.decimal "stt",                                                                        :null => false
    t.decimal "daketchuyen",                  :precision => 1,  :scale => 0, :default => 0
    t.string  "sochungtu_kc",  :limit => 20
    t.date    "ngayketchuyen"
    t.decimal "manhomvp",                     :precision => 3,  :scale => 0
    t.decimal "mavp",                         :precision => 10, :scale => 0
  end

  create_table "chungtuchitiet_29", :id => false, :force => true do |t|
    t.string  "tkno",          :limit => 10,                                                :null => false
    t.string  "tkco",          :limit => 10,                                                :null => false
    t.string  "tknganhang",    :limit => 15
    t.decimal "sotien"
    t.string  "diengiai",      :limit => nil
    t.string  "doituong",      :limit => 20
    t.string  "sochungtu",     :limit => 20,                                                :null => false
    t.decimal "stt",                                                                        :null => false
    t.decimal "daketchuyen",                  :precision => 1,  :scale => 0, :default => 0
    t.string  "sochungtu_kc",  :limit => 20
    t.date    "ngayketchuyen"
    t.decimal "manhomvp",                     :precision => 3,  :scale => 0
    t.decimal "mavp",                         :precision => 10, :scale => 0
  end

  add_index "chungtuchitiet_29", ["sochungtu"], :name => "ind_chungtuchitiet_29"

  create_table "chungtukemtheo", :id => false, :force => true do |t|
    t.string "sochungtu", :limit => 7,  :null => false
    t.string "sophieu",   :limit => 10, :null => false
  end

  create_table "danhmuc_dmkhos", :force => true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "dmbenketchuyen", :id => false, :force => true do |t|
    t.string "ma",  :limit => 2,   :null => false
    t.string "ten", :limit => nil
  end

  create_table "dmchiphi", :id => false, :force => true do |t|
    t.string  "ma",           :limit => 10,  :null => false
    t.string  "ten",          :limit => 254
    t.string  "diengiai",     :limit => nil
    t.boolean "ngungtheodoi"
    t.string  "tkchiphi",     :limit => 10
  end

  create_table "dmcomputer", :id => false, :force => true do |t|
    t.decimal  "id",        :precision => 5, :scale => 0, :default => 0, :null => false
    t.string   "computer"
    t.datetime "ngayud"
    t.decimal  "medisoft",  :precision => 1, :scale => 0, :default => 0
    t.decimal  "duoc",      :precision => 1, :scale => 0, :default => 0
    t.decimal  "vienphi",   :precision => 1, :scale => 0, :default => 0
    t.decimal  "xn",        :precision => 1, :scale => 0, :default => 0
    t.decimal  "cls",       :precision => 1, :scale => 0, :default => 0
    t.text     "fmedisoft"
    t.text     "fduoc"
    t.text     "fvienphi"
    t.text     "fxn"
    t.text     "fcls"
    t.text     "key"
    t.text     "value"
  end

  add_index "dmcomputer", ["computer"], :name => "uni_dmcomputer_name", :unique => true

  create_table "dmdinhkhoantudong", :id => false, :force => true do |t|
    t.string  "loaichungtu",  :limit => 10,                                               :null => false
    t.string  "tendinhkhoan", :limit => nil
    t.string  "tkno",         :limit => 10
    t.string  "tkco",         :limit => 10
    t.decimal "id",                          :precision => 3, :scale => 0, :default => 0, :null => false
  end

  create_table "dmhethongtk", :id => false, :force => true do |t|
    t.string  "tentienganh",  :limit => 254
    t.string  "tentk",        :limit => 254
    t.decimal "tinhchat",                    :precision => 1, :scale => 0
    t.string  "sotk",         :limit => 10,                                               :null => false
    t.string  "diengiai",     :limit => nil
    t.string  "nhomtk",       :limit => 10
    t.decimal "loaisodu",                    :precision => 1, :scale => 0, :default => 0, :null => false
    t.decimal "loaidoituong",                :precision => 1, :scale => 0, :default => 0
    t.integer "tkchiphi",                                                  :default => 0, :null => false
  end

  create_table "dmkhachhang", :id => false, :force => true do |t|
    t.string   "makh",              :limit => 20,                         :null => false
    t.string   "tenkh",             :limit => nil
    t.string   "nhomkh",            :limit => 10,  :default => "0"
    t.string   "loaikh",            :limit => 10,  :default => "0"
    t.string   "diachi",            :limit => nil
    t.string   "masothue",          :limit => 20
    t.string   "dienthoai",         :limit => 20
    t.string   "fax",               :limit => 20
    t.string   "email",             :limit => nil
    t.string   "website",           :limit => nil
    t.string   "tknganhang",        :limit => nil
    t.string   "diengiai",          :limit => nil
    t.decimal  "sonotoida"
    t.string   "hoten",             :limit => nil
    t.string   "chucdanh",          :limit => nil
    t.string   "socmnd",            :limit => 10
    t.datetime "ngaycap"
    t.string   "dienthoaicoquan",   :limit => nil
    t.string   "dienthoainharieng", :limit => nil
    t.string   "dtdd",              :limit => nil
    t.string   "emailnguoilienhe",  :limit => nil
    t.string   "dcnguoilienhe",     :limit => nil
    t.string   "tinh_diachi",       :limit => 3,   :default => "000"
    t.string   "huyen_diachi",      :limit => 5,   :default => "00000"
    t.string   "xa_diachi",         :limit => 7,   :default => "0000000"
    t.string   "noicap",            :limit => nil
    t.string   "tinh_nguoilh",      :limit => 3,   :default => "000"
    t.string   "huyen_nguoilh",     :limit => 5,   :default => "00000"
    t.string   "xa_nguoilh",        :limit => 7,   :default => "0000000"
    t.decimal  "hanno"
    t.string   "loai",              :limit => nil
    t.string   "nganhang",          :limit => 10,  :default => "0"
    t.string   "boths",             :limit => 5
  end

  create_table "dmkho", :id => false, :force => true do |t|
    t.string  "makho",        :limit => 10,  :null => false
    t.string  "tenkho",       :limit => nil
    t.boolean "ngungtheodoi"
    t.string  "diengiai",     :limit => nil
    t.string  "tkkho",        :limit => 10
  end

  create_table "dmloaichungtu", :id => false, :force => true do |t|
    t.string "tenloai",  :limit => nil
    t.string "maloai",   :limit => 10,  :null => false
    t.string "tkno",     :limit => 10
    t.string "tkco",     :limit => 10
    t.string "diengiai", :limit => 254
  end

  create_table "dmloaihoadon", :id => false, :force => true do |t|
    t.string "loai", :limit => 2,  :null => false
    t.string "ten",  :limit => 50
  end

  create_table "dmloaiketchuyen", :id => false, :force => true do |t|
    t.string "ma",  :limit => 2,   :null => false
    t.string "ten", :limit => nil
  end

  create_table "dmloaikhncc", :id => false, :force => true do |t|
    t.string  "maloai",       :limit => 5,   :null => false
    t.string  "tenloai",      :limit => nil
    t.boolean "ngungtheodoi"
  end

  create_table "dmloaitien", :id => false, :force => true do |t|
    t.string "loai", :limit => 2,   :null => false
    t.string "ten",  :limit => nil
  end

  create_table "dmloaivthhccdc", :id => false, :force => true do |t|
    t.string "ma",  :limit => 10,  :null => false
    t.string "ten", :limit => nil
  end

  create_table "dmmucchi", :id => false, :force => true do |t|
    t.string "ma",       :limit => 5,   :null => false
    t.string "ten",      :limit => 254
    t.string "diengiai", :limit => nil
  end

  create_table "dmnganhang", :id => false, :force => true do |t|
    t.string  "ma",                :limit => 10,  :null => false
    t.string  "tenvt",             :limit => nil
    t.string  "tendaydu",          :limit => nil
    t.string  "diachi",            :limit => nil
    t.string  "diengiai",          :limit => nil
    t.integer "giaodichtructuyen", :limit => 2
  end

  create_table "dmnhanvien", :id => false, :force => true do |t|
    t.string   "manv",           :limit => 20,                                                 :null => false
    t.string   "tennv",          :limit => nil
    t.decimal  "gioitinh",                      :precision => 1, :scale => 0, :default => 0,   :null => false
    t.datetime "ngaysinh"
    t.string   "masothue",       :limit => 15
    t.string   "phongban",       :limit => 10
    t.string   "chucvu",         :limit => nil
    t.string   "socmnd",         :limit => 10
    t.datetime "ngaycapcmnd"
    t.string   "noicapcmnd",     :limit => nil
    t.decimal  "hesoluong"
    t.decimal  "giamtrugiacanh"
    t.string   "diachi",         :limit => nil
    t.string   "email",          :limit => nil
    t.string   "tknganhang",     :limit => 15,                                :default => "0"
    t.string   "motainganhang",  :limit => 10
    t.string   "dtcoquan",       :limit => 12
    t.string   "dtnharieng",     :limit => 12
    t.string   "dtdd",           :limit => 12
  end

  create_table "dmnhomhhdvmuavao", :id => false, :force => true do |t|
    t.string "ma",       :limit => 5,   :null => false
    t.string "ten",      :limit => nil
    t.string "diengiai", :limit => nil
  end

  create_table "dmnhomhhdvttdb", :id => false, :force => true do |t|
    t.string  "ma",       :limit => 10,  :null => false
    t.string  "ten",      :limit => nil
    t.decimal "thuesuat"
  end

  create_table "dmnhomkhachhangncc", :id => false, :force => true do |t|
    t.string "manhom",   :limit => 5,   :null => false
    t.string "tennhom",  :limit => nil
    t.string "diengiai", :limit => nil
  end

  create_table "dmnhomtk", :id => false, :force => true do |t|
    t.string  "manhom",   :limit => 10,                                               :null => false
    t.string  "tennhom",  :limit => nil
    t.decimal "tinhchat",                :precision => 1, :scale => 0, :default => 0
    t.string  "loai",     :limit => 1
    t.decimal "congno",                  :precision => 1, :scale => 0
  end

  create_table "dmnhomvp", :id => false, :force => true do |t|
    t.string "ma",       :limit => 10,  :null => false
    t.string "ten",      :limit => nil
    t.string "diengiai", :limit => nil
  end

  create_table "dmnuoc", :id => false, :force => true do |t|
    t.string "manuoc",  :limit => 5, :null => false
    t.text   "tennuoc"
  end

  create_table "dmphongban", :id => false, :force => true do |t|
    t.string "maphongban",  :limit => 10,  :null => false
    t.string "tenphongban", :limit => nil
    t.string "diengiai",    :limit => nil
  end

  create_table "dmquocgia", :id => false, :force => true do |t|
    t.string "ma",         :limit => 2, :null => false
    t.text   "ten"
    t.string "valuea",     :limit => 3
    t.text   "vietnamese"
  end

  create_table "dmthetindung", :id => false, :force => true do |t|
    t.string   "mathe",      :limit => 25,  :null => false
    t.string   "tenchuthe",  :limit => nil
    t.string   "nganhang",   :limit => 10
    t.string   "loaithe",    :limit => nil
    t.datetime "hieuluctu"
    t.datetime "hieulucden"
    t.string   "diengiai",   :limit => nil
  end

  create_table "dmthue", :id => false, :force => true do |t|
    t.decimal "phantram", :precision => 3, :scale => 0, :default => 0, :null => false
  end

  create_table "dmtinhchattk", :id => false, :force => true do |t|
    t.decimal "ma",                 :precision => 1, :scale => 0, :default => 0, :null => false
    t.string  "ten", :limit => nil
  end

  create_table "dmtinhtrang", :id => false, :force => true do |t|
    t.string "matt",  :limit => 1,   :null => false
    t.string "tentt", :limit => nil
  end

  create_table "dmtkketchuyen", :id => false, :force => true do |t|
    t.string  "maketchuyen",   :limit => 10,  :null => false
    t.decimal "sttketchuyen"
    t.string  "loaiketchuyen", :limit => nil
    t.string  "benketchuyen",  :limit => nil
    t.string  "diengiai",      :limit => nil
    t.string  "ketchuyentu",   :limit => 10
    t.string  "ketchuyenden",  :limit => 10
  end

  create_table "dmtkngamdinh", :id => false, :force => true do |t|
    t.string "tknongamdinh", :limit => nil
    t.string "tkcongamdinh", :limit => nil
    t.string "loaichungtu",  :limit => 10,  :null => false
  end

  create_table "dmtknganhang", :id => false, :force => true do |t|
    t.string "sotk",        :limit => 15,  :null => false
    t.text   "tentaikhoan"
    t.string "manganhang",  :limit => 10
    t.string "diachi",      :limit => nil
    t.string "ghichu",      :limit => nil
  end

  create_table "dmvthhccdc", :id => false, :force => true do |t|
    t.string  "ma",            :limit => 10,                                               :null => false
    t.string  "ten",           :limit => nil
    t.string  "donvitinh",     :limit => nil
    t.decimal "tgbaohanh"
    t.decimal "dongiamua"
    t.decimal "dongiaban"
    t.string  "nhacungcap",    :limit => 10
    t.decimal "thuesuat"
    t.string  "kho",           :limit => 10
    t.string  "tkkho",         :limit => 10
    t.string  "tkchiphi",      :limit => 10
    t.string  "tkdoanhthu",    :limit => 10
    t.string  "loai",          :limit => 10
    t.float   "sltontoithieu"
    t.decimal "loaihanghoa",                  :precision => 1, :scale => 0, :default => 0, :null => false
    t.string  "date",          :limit => 10
    t.string  "losanxuat",     :limit => 10
    t.decimal "mahangsanxuat",                :precision => 5, :scale => 0
    t.string  "manuocsanxuat", :limit => 2
  end

  create_table "hoadonthue", :id => false, :force => true do |t|
    t.string   "diengiai",       :limit => nil
    t.string   "tkthue",         :limit => 10,                   :null => false
    t.decimal  "tienthue"
    t.decimal  "thuesuat"
    t.decimal  "giatritinhthue"
    t.string   "loaihoadon",     :limit => 3
    t.datetime "ngayhoadon"
    t.string   "kyhieuhd",       :limit => 30
    t.string   "sohoadon",       :limit => 30
    t.string   "masothue",       :limit => 15
    t.string   "doituong",       :limit => 10
    t.string   "diachi",         :limit => nil
    t.string   "sochungtu",      :limit => 10,                   :null => false
    t.integer  "stt",                           :default => 0,   :null => false
    t.string   "tkgiavon",       :limit => 10,  :default => "0"
  end

  create_table "kt_capid", :id => false, :force => true do |t|
    t.decimal "ma",                 :precision => 5,  :scale => 0, :null => false
    t.string  "loai", :limit => 50
    t.decimal "id",                 :precision => 20, :scale => 0
  end

  create_table "kt_ccdcct", :id => false, :force => true do |t|
    t.string  "sochungtu",     :limit => 10,                                                  :null => false
    t.decimal "idchungtu",                    :precision => 25, :scale => 0,                  :null => false
    t.string  "maccdc",        :limit => 10,                                                  :null => false
    t.integer "sokyphanbo",                                                  :default => 0
    t.string  "diengiai",      :limit => 254
    t.string  "tkchiphi",      :limit => 10,                                                  :null => false
    t.string  "tkphanbo",      :limit => 10,                                                  :null => false
    t.decimal "soluong",                      :precision => 20, :scale => 4
    t.string  "makp",          :limit => 10,                                 :default => "0", :null => false
    t.decimal "dongia",                       :precision => 24, :scale => 7, :default => 0.0
    t.decimal "daketchuyen",                  :precision => 1,  :scale => 0, :default => 0
    t.string  "sochungtu_kc",  :limit => 20
    t.date    "ngayketchuyen"
    t.string  "makpchuyen",    :limit => 10,                                 :default => "0", :null => false
    t.string  "madieuchuyen",  :limit => 20
    t.date    "ngayud"
    t.integer "stt",                                                         :default => 0
  end

  add_index "kt_ccdcct", ["idchungtu"], :name => "un_kt_ccdcct_idchungtu", :unique => true

  create_table "kt_ccdcct_29", :id => false, :force => true do |t|
    t.string  "sochungtu",     :limit => 10,                                                  :null => false
    t.decimal "idchungtu",                    :precision => 25, :scale => 0,                  :null => false
    t.string  "maccdc",        :limit => 10,                                                  :null => false
    t.integer "sokyphanbo",                                                  :default => 0
    t.string  "diengiai",      :limit => 254
    t.string  "tkchiphi",      :limit => 10,                                                  :null => false
    t.string  "tkphanbo",      :limit => 10,                                                  :null => false
    t.decimal "soluong",                      :precision => 20, :scale => 4
    t.string  "makp",          :limit => 10,                                 :default => "0", :null => false
    t.decimal "dongia",                       :precision => 24, :scale => 7, :default => 0.0
    t.decimal "daketchuyen",                  :precision => 1,  :scale => 0, :default => 0
    t.string  "sochungtu_kc",  :limit => 20
    t.date    "ngayketchuyen"
    t.string  "makpchuyen",    :limit => 10,                                 :default => "0", :null => false
    t.string  "madieuchuyen",  :limit => 20
    t.date    "ngayud"
    t.integer "stt",                                                         :default => 0
  end

  add_index "kt_ccdcct_29", ["sochungtu"], :name => "ind_kt_ccdcct_29"

  create_table "kt_ccdcll", :id => false, :force => true do |t|
    t.string    "sochungtu",       :limit => 10,                                                 :null => false
    t.string    "madoituong",      :limit => 10
    t.date      "ngaychungtu"
    t.date      "ngayhachtoan"
    t.string    "diachi",          :limit => 254
    t.string    "nguoigiao",       :limit => 50
    t.string    "lydo",            :limit => 50
    t.string    "kemtheo",         :limit => 100
    t.decimal   "loaichungtu",                    :precision => 2, :scale => 0
    t.string    "loaitien",        :limit => 1,                                 :default => "0"
    t.string    "manv",            :limit => 20
    t.timestamp "ngayud",          :limit => 3
    t.string    "computer",        :limit => 50
    t.string    "userid",          :limit => 20
    t.string    "mmyy",            :limit => 4
    t.string    "sohoadon",        :limit => 10
    t.decimal   "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0,   :null => false
  end

  create_table "kt_ccdcll_0114", :id => false, :force => true do |t|
    t.string    "sochungtu",       :limit => 10,                                                 :null => false
    t.string    "madoituong",      :limit => 10
    t.date      "ngaychungtu"
    t.date      "ngayhachtoan"
    t.string    "diachi",          :limit => 254
    t.string    "nguoigiao",       :limit => 50
    t.string    "lydo",            :limit => 50
    t.string    "kemtheo",         :limit => 100
    t.decimal   "loaichungtu",                    :precision => 2, :scale => 0
    t.string    "loaitien",        :limit => 1,                                 :default => "0"
    t.string    "manv",            :limit => 20
    t.timestamp "ngayud",          :limit => 3
    t.string    "computer",        :limit => 50
    t.string    "userid",          :limit => 20
    t.string    "mmyy",            :limit => 4
    t.string    "sohoadon",        :limit => 10
    t.decimal   "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0,   :null => false
  end

  add_index "kt_ccdcll_0114", ["ngaychungtu"], :name => "ind_kt_ccdcll_ngaychungtu_0114"

  create_table "kt_ccdcll_0214", :id => false, :force => true do |t|
    t.string    "sochungtu",       :limit => 10,                                                 :null => false
    t.string    "madoituong",      :limit => 10
    t.date      "ngaychungtu"
    t.date      "ngayhachtoan"
    t.string    "diachi",          :limit => 254
    t.string    "nguoigiao",       :limit => 50
    t.string    "lydo",            :limit => 50
    t.string    "kemtheo",         :limit => 100
    t.decimal   "loaichungtu",                    :precision => 2, :scale => 0
    t.string    "loaitien",        :limit => 1,                                 :default => "0"
    t.string    "manv",            :limit => 20
    t.timestamp "ngayud",          :limit => 3
    t.string    "computer",        :limit => 50
    t.string    "userid",          :limit => 20
    t.string    "mmyy",            :limit => 4
    t.string    "sohoadon",        :limit => 10
    t.decimal   "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0,   :null => false
  end

  add_index "kt_ccdcll_0214", ["ngaychungtu"], :name => "ind_kt_ccdcll_ngaychungtu_0214"

  create_table "kt_ccdcll_0314", :id => false, :force => true do |t|
    t.string    "sochungtu",       :limit => 10,                                                 :null => false
    t.string    "madoituong",      :limit => 10
    t.date      "ngaychungtu"
    t.date      "ngayhachtoan"
    t.string    "diachi",          :limit => 254
    t.string    "nguoigiao",       :limit => 50
    t.string    "lydo",            :limit => 50
    t.string    "kemtheo",         :limit => 100
    t.decimal   "loaichungtu",                    :precision => 2, :scale => 0
    t.string    "loaitien",        :limit => 1,                                 :default => "0"
    t.string    "manv",            :limit => 20
    t.timestamp "ngayud",          :limit => 3
    t.string    "computer",        :limit => 50
    t.string    "userid",          :limit => 20
    t.string    "mmyy",            :limit => 4
    t.string    "sohoadon",        :limit => 10
    t.decimal   "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0,   :null => false
  end

  add_index "kt_ccdcll_0314", ["ngaychungtu"], :name => "ind_kt_ccdcll_ngaychungtu_0314"

  create_table "kt_ccdcll_0414", :id => false, :force => true do |t|
    t.string    "sochungtu",       :limit => 10,                                                 :null => false
    t.string    "madoituong",      :limit => 10
    t.date      "ngaychungtu"
    t.date      "ngayhachtoan"
    t.string    "diachi",          :limit => 254
    t.string    "nguoigiao",       :limit => 50
    t.string    "lydo",            :limit => 50
    t.string    "kemtheo",         :limit => 100
    t.decimal   "loaichungtu",                    :precision => 2, :scale => 0
    t.string    "loaitien",        :limit => 1,                                 :default => "0"
    t.string    "manv",            :limit => 20
    t.timestamp "ngayud",          :limit => 3
    t.string    "computer",        :limit => 50
    t.string    "userid",          :limit => 20
    t.string    "mmyy",            :limit => 4
    t.string    "sohoadon",        :limit => 10
    t.decimal   "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0,   :null => false
  end

  add_index "kt_ccdcll_0414", ["ngaychungtu"], :name => "ind_kt_ccdcll_ngaychungtu_0414"

  create_table "kt_ccdcll_0514", :id => false, :force => true do |t|
    t.string    "sochungtu",       :limit => 10,                                                 :null => false
    t.string    "madoituong",      :limit => 10
    t.date      "ngaychungtu"
    t.date      "ngayhachtoan"
    t.string    "diachi",          :limit => 254
    t.string    "nguoigiao",       :limit => 50
    t.string    "lydo",            :limit => 50
    t.string    "kemtheo",         :limit => 100
    t.decimal   "loaichungtu",                    :precision => 2, :scale => 0
    t.string    "loaitien",        :limit => 1,                                 :default => "0"
    t.string    "manv",            :limit => 20
    t.timestamp "ngayud",          :limit => 3
    t.string    "computer",        :limit => 50
    t.string    "userid",          :limit => 20
    t.string    "mmyy",            :limit => 4
    t.string    "sohoadon",        :limit => 10
    t.decimal   "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0,   :null => false
  end

  add_index "kt_ccdcll_0514", ["ngaychungtu"], :name => "ind_kt_ccdcll_ngaychungtu_0514"

  create_table "kt_ccdcll_0614", :id => false, :force => true do |t|
    t.string    "sochungtu",       :limit => 10,                                                 :null => false
    t.string    "madoituong",      :limit => 10
    t.date      "ngaychungtu"
    t.date      "ngayhachtoan"
    t.string    "diachi",          :limit => 254
    t.string    "nguoigiao",       :limit => 50
    t.string    "lydo",            :limit => 50
    t.string    "kemtheo",         :limit => 100
    t.decimal   "loaichungtu",                    :precision => 2, :scale => 0
    t.string    "loaitien",        :limit => 1,                                 :default => "0"
    t.string    "manv",            :limit => 20
    t.timestamp "ngayud",          :limit => 3
    t.string    "computer",        :limit => 50
    t.string    "userid",          :limit => 20
    t.string    "mmyy",            :limit => 4
    t.string    "sohoadon",        :limit => 10
    t.decimal   "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0,   :null => false
  end

  add_index "kt_ccdcll_0614", ["ngaychungtu"], :name => "ind_kt_ccdcll_ngaychungtu_0614"

  create_table "kt_ccdcll_0714", :id => false, :force => true do |t|
    t.string    "sochungtu",       :limit => 10,                                                 :null => false
    t.string    "madoituong",      :limit => 10
    t.date      "ngaychungtu"
    t.date      "ngayhachtoan"
    t.string    "diachi",          :limit => 254
    t.string    "nguoigiao",       :limit => 50
    t.string    "lydo",            :limit => 50
    t.string    "kemtheo",         :limit => 100
    t.decimal   "loaichungtu",                    :precision => 2, :scale => 0
    t.string    "loaitien",        :limit => 1,                                 :default => "0"
    t.string    "manv",            :limit => 20
    t.timestamp "ngayud",          :limit => 3
    t.string    "computer",        :limit => 50
    t.string    "userid",          :limit => 20
    t.string    "mmyy",            :limit => 4
    t.string    "sohoadon",        :limit => 10
    t.decimal   "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0,   :null => false
  end

  add_index "kt_ccdcll_0714", ["ngaychungtu"], :name => "ind_kt_ccdcll_ngaychungtu_0714"

  create_table "kt_ccdcphanbo", :id => false, :force => true do |t|
    t.string  "sochungtu", :limit => 10,                                 :null => false
    t.decimal "idchungtu",                :precision => 25, :scale => 0, :null => false
    t.string  "diengiai",  :limit => 254
    t.string  "tkchiphi",  :limit => 10,                                 :null => false
    t.string  "tkphanbo",  :limit => 10,                                 :null => false
    t.decimal "sotien",                   :precision => 20, :scale => 4
    t.date    "ngayud"
  end

  create_table "kt_ccdctheodoi", :id => false, :force => true do |t|
    t.decimal "idchungtu",                :precision => 22, :scale => 0,                  :null => false
    t.decimal "nguyengia",                :precision => 24, :scale => 7, :default => 0.0
    t.integer "sokyphanbo",                                              :default => 0
    t.string  "maccdc",     :limit => 10,                                                 :null => false
  end

  create_table "kt_ccdctheodoi_0114", :id => false, :force => true do |t|
    t.decimal "idchungtu",                :precision => 22, :scale => 0,                  :null => false
    t.decimal "nguyengia",                :precision => 24, :scale => 7, :default => 0.0
    t.integer "sokyphanbo",                                              :default => 0
    t.string  "maccdc",     :limit => 10,                                                 :null => false
  end

  add_index "kt_ccdctheodoi_0114", ["idchungtu"], :name => "ind_kt_ccdctheodoi_0114"

  create_table "kt_ccdctheodoi_0214", :id => false, :force => true do |t|
    t.decimal "idchungtu",                :precision => 22, :scale => 0,                  :null => false
    t.decimal "nguyengia",                :precision => 24, :scale => 7, :default => 0.0
    t.integer "sokyphanbo",                                              :default => 0
    t.string  "maccdc",     :limit => 10,                                                 :null => false
  end

  add_index "kt_ccdctheodoi_0214", ["idchungtu"], :name => "ind_kt_ccdctheodoi_0214"

  create_table "kt_ccdctheodoi_0314", :id => false, :force => true do |t|
    t.decimal "idchungtu",                :precision => 22, :scale => 0,                  :null => false
    t.decimal "nguyengia",                :precision => 24, :scale => 7, :default => 0.0
    t.integer "sokyphanbo",                                              :default => 0
    t.string  "maccdc",     :limit => 10,                                                 :null => false
  end

  add_index "kt_ccdctheodoi_0314", ["idchungtu"], :name => "ind_kt_ccdctheodoi_0314"

  create_table "kt_ccdctheodoi_0414", :id => false, :force => true do |t|
    t.decimal "idchungtu",                :precision => 22, :scale => 0,                  :null => false
    t.decimal "nguyengia",                :precision => 24, :scale => 7, :default => 0.0
    t.integer "sokyphanbo",                                              :default => 0
    t.string  "maccdc",     :limit => 10,                                                 :null => false
  end

  add_index "kt_ccdctheodoi_0414", ["idchungtu"], :name => "ind_kt_ccdctheodoi_0414"

  create_table "kt_ccdctheodoi_0514", :id => false, :force => true do |t|
    t.decimal "idchungtu",                :precision => 22, :scale => 0,                  :null => false
    t.decimal "nguyengia",                :precision => 24, :scale => 7, :default => 0.0
    t.integer "sokyphanbo",                                              :default => 0
    t.string  "maccdc",     :limit => 10,                                                 :null => false
  end

  add_index "kt_ccdctheodoi_0514", ["idchungtu"], :name => "ind_kt_ccdctheodoi_0514"

  create_table "kt_ccdctheodoi_0614", :id => false, :force => true do |t|
    t.decimal "idchungtu",                :precision => 22, :scale => 0,                  :null => false
    t.decimal "nguyengia",                :precision => 24, :scale => 7, :default => 0.0
    t.integer "sokyphanbo",                                              :default => 0
    t.string  "maccdc",     :limit => 10,                                                 :null => false
  end

  add_index "kt_ccdctheodoi_0614", ["idchungtu"], :name => "ind_kt_ccdctheodoi_0614"

  create_table "kt_ccdctheodoi_0714", :id => false, :force => true do |t|
    t.decimal "idchungtu",                :precision => 22, :scale => 0,                  :null => false
    t.decimal "nguyengia",                :precision => 24, :scale => 7, :default => 0.0
    t.integer "sokyphanbo",                                              :default => 0
    t.string  "maccdc",     :limit => 10,                                                 :null => false
  end

  add_index "kt_ccdctheodoi_0714", ["idchungtu"], :name => "ind_kt_ccdctheodoi_0714"

  create_table "kt_ccdctonkho", :id => false, :force => true do |t|
    t.string  "mmyy",         :limit => 20,                                                 :null => false
    t.string  "makp",         :limit => 10,                                                 :null => false
    t.decimal "idchungtu",                  :precision => 25, :scale => 0,                  :null => false
    t.decimal "sltondau",                   :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slnhap",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "giatriconlai",               :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.integer "sokiconlai",                                                :default => 0,   :null => false
  end

  create_table "kt_ccdctonkho_0114", :id => false, :force => true do |t|
    t.string  "mmyy",         :limit => 20,                                                 :null => false
    t.string  "makp",         :limit => 10,                                                 :null => false
    t.decimal "idchungtu",                  :precision => 25, :scale => 0,                  :null => false
    t.decimal "sltondau",                   :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slnhap",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "giatriconlai",               :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.integer "sokiconlai",                                                :default => 0,   :null => false
  end

  add_index "kt_ccdctonkho_0114", ["mmyy"], :name => "ind_kt_ccdctonkho_0114"

  create_table "kt_ccdctonkho_0214", :id => false, :force => true do |t|
    t.string  "mmyy",         :limit => 20,                                                 :null => false
    t.string  "makp",         :limit => 10,                                                 :null => false
    t.decimal "idchungtu",                  :precision => 25, :scale => 0,                  :null => false
    t.decimal "sltondau",                   :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slnhap",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "giatriconlai",               :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.integer "sokiconlai",                                                :default => 0,   :null => false
  end

  add_index "kt_ccdctonkho_0214", ["mmyy"], :name => "ind_kt_ccdctonkho_0214"

  create_table "kt_ccdctonkho_0314", :id => false, :force => true do |t|
    t.string  "mmyy",         :limit => 20,                                                 :null => false
    t.string  "makp",         :limit => 10,                                                 :null => false
    t.decimal "idchungtu",                  :precision => 25, :scale => 0,                  :null => false
    t.decimal "sltondau",                   :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slnhap",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "giatriconlai",               :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.integer "sokiconlai",                                                :default => 0,   :null => false
  end

  add_index "kt_ccdctonkho_0314", ["mmyy"], :name => "ind_kt_ccdctonkho_0314"

  create_table "kt_ccdctonkho_0414", :id => false, :force => true do |t|
    t.string  "mmyy",         :limit => 20,                                                 :null => false
    t.string  "makp",         :limit => 10,                                                 :null => false
    t.decimal "idchungtu",                  :precision => 25, :scale => 0,                  :null => false
    t.decimal "sltondau",                   :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slnhap",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "giatriconlai",               :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.integer "sokiconlai",                                                :default => 0,   :null => false
  end

  add_index "kt_ccdctonkho_0414", ["mmyy"], :name => "ind_kt_ccdctonkho_0414"

  create_table "kt_ccdctonkho_0514", :id => false, :force => true do |t|
    t.string  "mmyy",         :limit => 20,                                                 :null => false
    t.string  "makp",         :limit => 10,                                                 :null => false
    t.decimal "idchungtu",                  :precision => 25, :scale => 0,                  :null => false
    t.decimal "sltondau",                   :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slnhap",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "giatriconlai",               :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.integer "sokiconlai",                                                :default => 0,   :null => false
  end

  add_index "kt_ccdctonkho_0514", ["mmyy"], :name => "ind_kt_ccdctonkho_0514"

  create_table "kt_ccdctonkho_0614", :id => false, :force => true do |t|
    t.string  "mmyy",         :limit => 20,                                                 :null => false
    t.string  "makp",         :limit => 10,                                                 :null => false
    t.decimal "idchungtu",                  :precision => 25, :scale => 0,                  :null => false
    t.decimal "sltondau",                   :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slnhap",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "giatriconlai",               :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.integer "sokiconlai",                                                :default => 0,   :null => false
  end

  add_index "kt_ccdctonkho_0614", ["mmyy"], :name => "ind_kt_ccdctonkho_0614"

  create_table "kt_ccdctonkho_0714", :id => false, :force => true do |t|
    t.string  "mmyy",         :limit => 20,                                                 :null => false
    t.string  "makp",         :limit => 10,                                                 :null => false
    t.decimal "idchungtu",                  :precision => 25, :scale => 0,                  :null => false
    t.decimal "sltondau",                   :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slnhap",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "giatriconlai",               :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.integer "sokiconlai",                                                :default => 0,   :null => false
  end

  add_index "kt_ccdctonkho_0714", ["mmyy"], :name => "ind_kt_ccdctonkho_0714"

  create_table "kt_ccdctonkho_0814", :id => false, :force => true do |t|
    t.string  "mmyy",         :limit => 20,                                                 :null => false
    t.string  "makp",         :limit => 10,                                                 :null => false
    t.decimal "idchungtu",                  :precision => 25, :scale => 0,                  :null => false
    t.decimal "sltondau",                   :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slnhap",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                     :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "giatriconlai",               :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.integer "sokiconlai",                                                :default => 0,   :null => false
  end

  add_index "kt_ccdctonkho_0814", ["mmyy"], :name => "ind_kt_ccdctonkho_0814"

  create_table "kt_chungtughiso", :id => false, :force => true do |t|
    t.string  "sochungtu", :limit => 7,                                               :null => false
    t.date    "ngay",                                                                 :null => false
    t.string  "userid",    :limit => 50
    t.decimal "loai",                    :precision => 1, :scale => 0, :default => 0
  end

  create_table "kt_dmchuongthuyetminh", :id => false, :force => true do |t|
    t.decimal "id",                 :precision => 1, :scale => 0, :null => false
    t.string  "ten", :limit => 200
  end

  create_table "kt_dmhang", :id => false, :force => true do |t|
    t.decimal  "id",     :precision => 5, :scale => 0, :default => 0, :null => false
    t.text     "ten"
    t.decimal  "loai",   :precision => 2, :scale => 0, :default => 0
    t.decimal  "stt",    :precision => 3, :scale => 0, :default => 0
    t.datetime "ngayud"
  end

  create_table "kt_dmloaitscd", :id => false, :force => true do |t|
    t.string  "maloai",      :limit => 15,                                               :null => false
    t.string  "tenloai",     :limit => 254
    t.decimal "tgsudung"
    t.decimal "tilekhauhao"
    t.string  "tknguyengia", :limit => 10
    t.string  "tkkhauhao",   :limit => 10
    t.string  "tkchiphi",    :limit => 10
    t.decimal "id_nhomtscd",                :precision => 1, :scale => 0, :default => 1
  end

  create_table "kt_dmloaitscdreport", :id => false, :force => true do |t|
    t.string  "maloai",      :limit => 15,                                               :null => false
    t.string  "tenloai",     :limit => 200,                                              :null => false
    t.string  "nhom",        :limit => 100
    t.decimal "id_nhomtscd",                :precision => 1, :scale => 0, :default => 1, :null => false
  end

  create_table "kt_dmnguon", :id => false, :force => true do |t|
    t.decimal "id",  :precision => 22, :scale => 0, :null => false
    t.text    "ten",                                :null => false
  end

  create_table "kt_dmnhomtscd", :id => false, :force => true do |t|
    t.decimal "id",                      :precision => 1, :scale => 0, :null => false
    t.string  "ten",      :limit => 254,                               :null => false
    t.date    "ngayud"
    t.string  "computer", :limit => 50
    t.string  "userid",   :limit => 20
  end

  create_table "kt_dmtanggiamtscd", :id => false, :force => true do |t|
    t.decimal "id",                        :precision => 3, :scale => 0,                :null => false
    t.string  "tk",         :limit => 50
    t.string  "ten",        :limit => 200
    t.decimal "idcha",                     :precision => 3, :scale => 0, :default => 0
    t.decimal "nhomtscd",                  :precision => 1, :scale => 0, :default => 1, :null => false
    t.decimal "muctscd",                   :precision => 1, :scale => 0, :default => 1, :null => false
    t.string  "tenmuctscd", :limit => 200
    t.decimal "kieutinh",                  :precision => 1, :scale => 0, :default => 1, :null => false
    t.decimal "bold",                      :precision => 1, :scale => 0, :default => 0, :null => false
    t.decimal "italic",                    :precision => 1, :scale => 0, :default => 0
  end

  create_table "kt_dmthuyetminh", :id => false, :force => true do |t|
    t.decimal "id",                       :precision => 3, :scale => 0,                    :null => false
    t.string  "tk",        :limit => 50
    t.string  "ten",       :limit => 200
    t.boolean "bold",                                                   :default => false, :null => false
    t.boolean "italic",                                                 :default => false
    t.string  "noidung",   :limit => 200
    t.decimal "kytruoc"
    t.decimal "kynay"
    t.decimal "idnhomtk",                 :precision => 1, :scale => 0,                    :null => false
    t.decimal "idcha",                    :precision => 3, :scale => 0, :default => 0
    t.decimal "notrongky",                                              :default => 0.0
    t.decimal "cotrongky",                                              :default => 0.0
    t.decimal "loaitk",                   :precision => 1, :scale => 0, :default => 0,     :null => false
  end

  create_table "kt_dmtinhtrangtscd", :id => false, :force => true do |t|
    t.decimal "id",                     :precision => 2, :scale => 0, :null => false
    t.text    "ten"
    t.date    "ngayud"
    t.string  "computer", :limit => 50
  end

  create_table "kt_dmtscd", :id => false, :force => true do |t|
    t.string  "ma",                  :limit => 10,                                                  :null => false
    t.string  "ten",                 :limit => nil
    t.string  "loai",                :limit => 15
    t.string  "tknguyengia",         :limit => 10
    t.decimal "haomonluyke",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.string  "manuoc",              :limit => 2
    t.string  "mota",                :limit => nil
    t.decimal "giatritinhkh",                       :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.string  "pptinhkh",            :limit => nil
    t.decimal "tilekhauhaonam",                     :precision => 5,  :scale => 2, :default => 0.0, :null => false
    t.decimal "gtrikhauhaonam",                     :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.integer "tgsudung",            :limit => 2
    t.decimal "tilekhauhaothang",                   :precision => 5,  :scale => 2, :default => 0.0, :null => false
    t.string  "tkkhauhao",           :limit => 10
    t.decimal "gtrikhauhaothang",                   :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.string  "tkchiphi",            :limit => 10,                                 :default => "0"
    t.decimal "phanbochiphikhauhao",                :precision => 1,  :scale => 0, :default => 0,   :null => false
    t.text    "dvt"
    t.decimal "giatrihaomon",                       :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "giatriconlai",                       :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.string  "makp",                :limit => 10,                                 :default => "0", :null => false
    t.decimal "soluong",                            :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.date    "ngaysudung"
    t.decimal "nguyengia",                          :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.string  "sohieu",              :limit => 20
    t.decimal "mahang",                             :precision => 5,  :scale => 0
    t.date    "ngaykhauhao"
  end

  create_table "kt_khoct", :id => false, :force => true do |t|
    t.string   "sophieu",       :limit => 10,                                                  :null => false
    t.decimal  "stt",                                                                          :null => false
    t.string   "mahh",          :limit => 10,                                                  :null => false
    t.string   "diengiai",      :limit => nil
    t.string   "tkno",          :limit => 10,                                                  :null => false
    t.string   "tkco",          :limit => 10,                                                  :null => false
    t.string   "makho",         :limit => 10
    t.string   "makhoden",      :limit => 10
    t.decimal  "soluong",                      :precision => 20, :scale => 4
    t.decimal  "idtheodoi",                    :precision => 22, :scale => 0
    t.datetime "ngayud"
    t.decimal  "hide",                         :precision => 1,  :scale => 0, :default => 0
    t.decimal  "daketchuyen",                  :precision => 1,  :scale => 0, :default => 0
    t.string   "sochungtu_kc",  :limit => 20
    t.date     "ngayketchuyen"
    t.decimal  "sotien",                       :precision => 24, :scale => 7, :default => 0.0, :null => false
  end

  create_table "kt_khoct_29", :id => false, :force => true do |t|
    t.string   "sophieu",       :limit => 10,                                                  :null => false
    t.decimal  "stt",                                                                          :null => false
    t.string   "mahh",          :limit => 10,                                                  :null => false
    t.string   "diengiai",      :limit => nil
    t.string   "tkno",          :limit => 10,                                                  :null => false
    t.string   "tkco",          :limit => 10,                                                  :null => false
    t.string   "makho",         :limit => 10
    t.string   "makhoden",      :limit => 10
    t.decimal  "soluong",                      :precision => 20, :scale => 4
    t.decimal  "idtheodoi",                    :precision => 22, :scale => 0
    t.datetime "ngayud"
    t.decimal  "hide",                         :precision => 1,  :scale => 0, :default => 0
    t.decimal  "daketchuyen",                  :precision => 1,  :scale => 0, :default => 0
    t.string   "sochungtu_kc",  :limit => 20
    t.date     "ngayketchuyen"
    t.decimal  "sotien",                       :precision => 24, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_khoct_29", ["sophieu"], :name => "ind_kt_khoct_29"

  create_table "kt_kholl", :id => false, :force => true do |t|
    t.string   "sophieu",         :limit => 10,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu",                                                                  :null => false
    t.datetime "ngayhachtoan",                                                                 :null => false
    t.text     "diachi"
    t.text     "nguoinop"
    t.text     "lydonop"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2,  :scale => 0
    t.string   "mmyy",            :limit => 4
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.decimal  "idnhapll",                       :precision => 25, :scale => 0, :default => 0
    t.string   "mmyynhapll",      :limit => 4
    t.string   "sohoadon",        :limit => 50
    t.decimal  "idquyenso",                      :precision => 7,  :scale => 0, :default => 0
    t.string   "thukhotu",        :limit => 20
    t.string   "thukhoden",       :limit => 20
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
  end

  create_table "kt_kholl_0114", :id => false, :force => true do |t|
    t.string   "sophieu",         :limit => 10,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu",                                                                  :null => false
    t.datetime "ngayhachtoan",                                                                 :null => false
    t.text     "diachi"
    t.text     "nguoinop"
    t.text     "lydonop"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2,  :scale => 0
    t.string   "mmyy",            :limit => 4
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.decimal  "idnhapll",                       :precision => 25, :scale => 0, :default => 0
    t.string   "mmyynhapll",      :limit => 4
    t.string   "sohoadon",        :limit => 50
    t.decimal  "idquyenso",                      :precision => 7,  :scale => 0, :default => 0
    t.string   "thukhotu",        :limit => 20
    t.string   "thukhoden",       :limit => 20
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
  end

  add_index "kt_kholl_0114", ["ngaychungtu"], :name => "ind_kt_kholl_ngaychungtu_0114"

  create_table "kt_kholl_0214", :id => false, :force => true do |t|
    t.string   "sophieu",         :limit => 10,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu",                                                                  :null => false
    t.datetime "ngayhachtoan",                                                                 :null => false
    t.text     "diachi"
    t.text     "nguoinop"
    t.text     "lydonop"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2,  :scale => 0
    t.string   "mmyy",            :limit => 4
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.decimal  "idnhapll",                       :precision => 25, :scale => 0, :default => 0
    t.string   "mmyynhapll",      :limit => 4
    t.string   "sohoadon",        :limit => 50
    t.decimal  "idquyenso",                      :precision => 7,  :scale => 0, :default => 0
    t.string   "thukhotu",        :limit => 20
    t.string   "thukhoden",       :limit => 20
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
  end

  add_index "kt_kholl_0214", ["ngaychungtu"], :name => "ind_kt_kholl_ngaychungtu_0214"

  create_table "kt_kholl_0314", :id => false, :force => true do |t|
    t.string   "sophieu",         :limit => 10,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu",                                                                  :null => false
    t.datetime "ngayhachtoan",                                                                 :null => false
    t.text     "diachi"
    t.text     "nguoinop"
    t.text     "lydonop"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2,  :scale => 0
    t.string   "mmyy",            :limit => 4
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.decimal  "idnhapll",                       :precision => 25, :scale => 0, :default => 0
    t.string   "mmyynhapll",      :limit => 4
    t.string   "sohoadon",        :limit => 50
    t.decimal  "idquyenso",                      :precision => 7,  :scale => 0, :default => 0
    t.string   "thukhotu",        :limit => 20
    t.string   "thukhoden",       :limit => 20
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
  end

  add_index "kt_kholl_0314", ["ngaychungtu"], :name => "ind_kt_kholl_ngaychungtu_0314"

  create_table "kt_kholl_0414", :id => false, :force => true do |t|
    t.string   "sophieu",         :limit => 10,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu",                                                                  :null => false
    t.datetime "ngayhachtoan",                                                                 :null => false
    t.text     "diachi"
    t.text     "nguoinop"
    t.text     "lydonop"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2,  :scale => 0
    t.string   "mmyy",            :limit => 4
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.decimal  "idnhapll",                       :precision => 25, :scale => 0, :default => 0
    t.string   "mmyynhapll",      :limit => 4
    t.string   "sohoadon",        :limit => 50
    t.decimal  "idquyenso",                      :precision => 7,  :scale => 0, :default => 0
    t.string   "thukhotu",        :limit => 20
    t.string   "thukhoden",       :limit => 20
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
  end

  add_index "kt_kholl_0414", ["ngaychungtu"], :name => "ind_kt_kholl_ngaychungtu_0414"

  create_table "kt_kholl_0514", :id => false, :force => true do |t|
    t.string   "sophieu",         :limit => 10,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu",                                                                  :null => false
    t.datetime "ngayhachtoan",                                                                 :null => false
    t.text     "diachi"
    t.text     "nguoinop"
    t.text     "lydonop"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2,  :scale => 0
    t.string   "mmyy",            :limit => 4
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.decimal  "idnhapll",                       :precision => 25, :scale => 0, :default => 0
    t.string   "mmyynhapll",      :limit => 4
    t.string   "sohoadon",        :limit => 50
    t.decimal  "idquyenso",                      :precision => 7,  :scale => 0, :default => 0
    t.string   "thukhotu",        :limit => 20
    t.string   "thukhoden",       :limit => 20
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
  end

  add_index "kt_kholl_0514", ["ngaychungtu"], :name => "ind_kt_kholl_ngaychungtu_0514"

  create_table "kt_kholl_0614", :id => false, :force => true do |t|
    t.string   "sophieu",         :limit => 10,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu",                                                                  :null => false
    t.datetime "ngayhachtoan",                                                                 :null => false
    t.text     "diachi"
    t.text     "nguoinop"
    t.text     "lydonop"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2,  :scale => 0
    t.string   "mmyy",            :limit => 4
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.decimal  "idnhapll",                       :precision => 25, :scale => 0, :default => 0
    t.string   "mmyynhapll",      :limit => 4
    t.string   "sohoadon",        :limit => 50
    t.decimal  "idquyenso",                      :precision => 7,  :scale => 0, :default => 0
    t.string   "thukhotu",        :limit => 20
    t.string   "thukhoden",       :limit => 20
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
  end

  add_index "kt_kholl_0614", ["ngaychungtu"], :name => "ind_kt_kholl_ngaychungtu_0614"

  create_table "kt_kholl_0714", :id => false, :force => true do |t|
    t.string   "sophieu",         :limit => 10,                                                :null => false
    t.string   "madoituong",      :limit => 20
    t.datetime "ngaychungtu",                                                                  :null => false
    t.datetime "ngayhachtoan",                                                                 :null => false
    t.text     "diachi"
    t.text     "nguoinop"
    t.text     "lydonop"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2,  :scale => 0
    t.string   "mmyy",            :limit => 4
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.decimal  "idnhapll",                       :precision => 25, :scale => 0, :default => 0
    t.string   "mmyynhapll",      :limit => 4
    t.string   "sohoadon",        :limit => 50
    t.decimal  "idquyenso",                      :precision => 7,  :scale => 0, :default => 0
    t.string   "thukhotu",        :limit => 20
    t.string   "thukhoden",       :limit => 20
    t.decimal  "tonghopmedisoft",                :precision => 1,  :scale => 0, :default => 0, :null => false
  end

  add_index "kt_kholl_0714", ["ngaychungtu"], :name => "ind_kt_kholl_ngaychungtu_0714"

  create_table "kt_quyen_bv", :id => false, :force => true do |t|
    t.string  "menu_name",  :limit => 50,                                               :null => false
    t.string  "ghichu",     :limit => 254
    t.string  "ten",        :limit => 254
    t.string  "parentroot", :limit => 50
    t.decimal "lock",                      :precision => 1, :scale => 0, :default => 0
    t.decimal "khoa",                      :precision => 1, :scale => 0, :default => 0, :null => false
  end

  create_table "kt_quyen_user", :id => false, :force => true do |t|
    t.decimal "id_kt_user",               :precision => 5, :scale => 0, :null => false
    t.string  "menu_name",  :limit => 50,                               :null => false
  end

  create_table "kt_quyenso", :id => false, :force => true do |t|
    t.decimal "id",                   :precision => 7, :scale => 0, :default => 0, :null => false
    t.string  "kyhieu",  :limit => 7
    t.decimal "tuso",                 :precision => 7, :scale => 0, :default => 0
    t.decimal "denso",                :precision => 7, :scale => 0, :default => 0
    t.decimal "dangghi",              :precision => 7, :scale => 0
  end

  create_table "kt_socai", :id => false, :force => true do |t|
    t.string  "sochungtu", :limit => 7,                                               :null => false
    t.date    "ngay",                                                                 :null => false
    t.string  "userid",    :limit => 50
    t.decimal "loai",                    :precision => 1, :scale => 0, :default => 0
  end

  create_table "kt_sodubandau", :id => false, :force => true do |t|
    t.string  "sotk",        :limit => 10,                                              :null => false
    t.decimal "duno"
    t.decimal "duco"
    t.string  "loaitien",    :limit => 2,                                               :null => false
    t.string  "tknganhang",  :limit => 15
    t.date    "ngay",                                                                   :null => false
    t.decimal "daketchuyen",               :precision => 1, :scale => 0, :default => 0
  end

  create_table "kt_soducongno", :id => false, :force => true do |t|
    t.string  "madoituong",  :limit => 10,                                              :null => false
    t.decimal "duno"
    t.decimal "duco"
    t.string  "tknganhang",  :limit => 15
    t.string  "sotk",        :limit => 10,                                              :null => false
    t.string  "loaitien",    :limit => 2,                                               :null => false
    t.date    "ngay",                                                                   :null => false
    t.decimal "daketchuyen",               :precision => 1, :scale => 0, :default => 0
  end

  create_table "kt_theodoi", :id => false, :force => true do |t|
    t.decimal  "id",                    :precision => 22, :scale => 0,                  :null => false
    t.string   "mahh",    :limit => 20,                                                 :null => false
    t.decimal  "manguon",               :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.string   "handung", :limit => 10
    t.string   "losx",    :limit => 20
    t.decimal  "giamua",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "giaban",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.datetime "ngay",                                                                  :null => false
    t.datetime "ngayud"
    t.decimal  "giagoc",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "vat",                   :precision => 4,  :scale => 0, :default => 0
  end

  create_table "kt_theodoi_0114", :id => false, :force => true do |t|
    t.decimal  "id",                    :precision => 22, :scale => 0,                  :null => false
    t.string   "mahh",    :limit => 20,                                                 :null => false
    t.decimal  "manguon",               :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.string   "handung", :limit => 10
    t.string   "losx",    :limit => 20
    t.decimal  "giamua",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "giaban",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.datetime "ngay",                                                                  :null => false
    t.datetime "ngayud"
    t.decimal  "giagoc",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "vat",                   :precision => 4,  :scale => 0, :default => 0
  end

  add_index "kt_theodoi_0114", ["id"], :name => "ind_kt_theodoi_0114"

  create_table "kt_theodoi_0214", :id => false, :force => true do |t|
    t.decimal  "id",                    :precision => 22, :scale => 0,                  :null => false
    t.string   "mahh",    :limit => 20,                                                 :null => false
    t.decimal  "manguon",               :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.string   "handung", :limit => 10
    t.string   "losx",    :limit => 20
    t.decimal  "giamua",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "giaban",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.datetime "ngay",                                                                  :null => false
    t.datetime "ngayud"
    t.decimal  "giagoc",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "vat",                   :precision => 4,  :scale => 0, :default => 0
  end

  add_index "kt_theodoi_0214", ["id"], :name => "ind_kt_theodoi_0214"

  create_table "kt_theodoi_0314", :id => false, :force => true do |t|
    t.decimal  "id",                    :precision => 22, :scale => 0,                  :null => false
    t.string   "mahh",    :limit => 20,                                                 :null => false
    t.decimal  "manguon",               :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.string   "handung", :limit => 10
    t.string   "losx",    :limit => 20
    t.decimal  "giamua",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "giaban",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.datetime "ngay",                                                                  :null => false
    t.datetime "ngayud"
    t.decimal  "giagoc",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "vat",                   :precision => 4,  :scale => 0, :default => 0
  end

  add_index "kt_theodoi_0314", ["id"], :name => "ind_kt_theodoi_0314"

  create_table "kt_theodoi_0414", :id => false, :force => true do |t|
    t.decimal  "id",                    :precision => 22, :scale => 0,                  :null => false
    t.string   "mahh",    :limit => 20,                                                 :null => false
    t.decimal  "manguon",               :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.string   "handung", :limit => 10
    t.string   "losx",    :limit => 20
    t.decimal  "giamua",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "giaban",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.datetime "ngay",                                                                  :null => false
    t.datetime "ngayud"
    t.decimal  "giagoc",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "vat",                   :precision => 4,  :scale => 0, :default => 0
  end

  add_index "kt_theodoi_0414", ["id"], :name => "ind_kt_theodoi_0414"

  create_table "kt_theodoi_0514", :id => false, :force => true do |t|
    t.decimal  "id",                    :precision => 22, :scale => 0,                  :null => false
    t.string   "mahh",    :limit => 20,                                                 :null => false
    t.decimal  "manguon",               :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.string   "handung", :limit => 10
    t.string   "losx",    :limit => 20
    t.decimal  "giamua",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "giaban",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.datetime "ngay",                                                                  :null => false
    t.datetime "ngayud"
    t.decimal  "giagoc",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "vat",                   :precision => 4,  :scale => 0, :default => 0
  end

  add_index "kt_theodoi_0514", ["id"], :name => "ind_kt_theodoi_0514"

  create_table "kt_theodoi_0614", :id => false, :force => true do |t|
    t.decimal  "id",                    :precision => 22, :scale => 0,                  :null => false
    t.string   "mahh",    :limit => 20,                                                 :null => false
    t.decimal  "manguon",               :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.string   "handung", :limit => 10
    t.string   "losx",    :limit => 20
    t.decimal  "giamua",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "giaban",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.datetime "ngay",                                                                  :null => false
    t.datetime "ngayud"
    t.decimal  "giagoc",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "vat",                   :precision => 4,  :scale => 0, :default => 0
  end

  add_index "kt_theodoi_0614", ["id"], :name => "ind_kt_theodoi_0614"

  create_table "kt_theodoi_0714", :id => false, :force => true do |t|
    t.decimal  "id",                    :precision => 22, :scale => 0,                  :null => false
    t.string   "mahh",    :limit => 20,                                                 :null => false
    t.decimal  "manguon",               :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.string   "handung", :limit => 10
    t.string   "losx",    :limit => 20
    t.decimal  "giamua",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "giaban",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.datetime "ngay",                                                                  :null => false
    t.datetime "ngayud"
    t.decimal  "giagoc",                :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal  "vat",                   :precision => 4,  :scale => 0, :default => 0
  end

  add_index "kt_theodoi_0714", ["id"], :name => "ind_kt_theodoi_0714"

  create_table "kt_thongso", :id => false, :force => true do |t|
    t.decimal "id",                   :precision => 7, :scale => 0, :null => false
    t.text    "val"
    t.string  "userid", :limit => 50
    t.date    "ngayud"
  end

  create_table "kt_tonkhoct", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makho",     :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  create_table "kt_tonkhoct_0114", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makho",     :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tonkhoct_0114", ["mmyy"], :name => "ind_kt_tonkhoct_0114"

  create_table "kt_tonkhoct_0214", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makho",     :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tonkhoct_0214", ["mmyy"], :name => "ind_kt_tonkhoct_0214"

  create_table "kt_tonkhoct_0314", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makho",     :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tonkhoct_0314", ["mmyy"], :name => "ind_kt_tonkhoct_0314"

  create_table "kt_tonkhoct_0414", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makho",     :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tonkhoct_0414", ["mmyy"], :name => "ind_kt_tonkhoct_0414"

  create_table "kt_tonkhoct_0514", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makho",     :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tonkhoct_0514", ["mmyy"], :name => "ind_kt_tonkhoct_0514"

  create_table "kt_tonkhoct_0614", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makho",     :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tonkhoct_0614", ["mmyy"], :name => "ind_kt_tonkhoct_0614"

  create_table "kt_tonkhoct_0714", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makho",     :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tonkhoct_0714", ["mmyy"], :name => "ind_kt_tonkhoct_0714"

  create_table "kt_tonkhoct_0814", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makho",     :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tonkhoct_0814", ["mmyy"], :name => "ind_kt_tonkhoct_0814"

  create_table "kt_tscdct", :id => false, :force => true do |t|
    t.string  "sochungtu",     :limit => 10,                                                  :null => false
    t.decimal "stt",                                                                          :null => false
    t.string  "matscd",        :limit => 10,                                                  :null => false
    t.string  "diengiai",      :limit => nil
    t.string  "tkno",          :limit => 10,                                                  :null => false
    t.string  "tkco",          :limit => 10,                                                  :null => false
    t.decimal "soluong",                      :precision => 20, :scale => 4
    t.decimal "idtheodoi",                    :precision => 22, :scale => 0
    t.date    "ngayud"
    t.decimal "hide",                         :precision => 1,  :scale => 0, :default => 0
    t.string  "makp",          :limit => 10,                                 :default => "0", :null => false
    t.decimal "sotien",                       :precision => 24, :scale => 7, :default => 0.0
    t.decimal "daketchuyen",                  :precision => 1,  :scale => 0, :default => 0
    t.string  "sochungtu_kc",  :limit => 20
    t.date    "ngayketchuyen"
    t.string  "makpchuyen",    :limit => 10,                                 :default => "0", :null => false
    t.string  "madieuchuyen",  :limit => 20
    t.decimal "giatrihaomon",                 :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "giatriconlai",                 :precision => 24, :scale => 7, :default => 0.0, :null => false
  end

  create_table "kt_tscdct_29", :id => false, :force => true do |t|
    t.string  "sochungtu",     :limit => 10,                                                  :null => false
    t.decimal "stt",                                                                          :null => false
    t.string  "matscd",        :limit => 10,                                                  :null => false
    t.string  "diengiai",      :limit => nil
    t.string  "tkno",          :limit => 10,                                                  :null => false
    t.string  "tkco",          :limit => 10,                                                  :null => false
    t.decimal "soluong",                      :precision => 20, :scale => 4
    t.decimal "idtheodoi",                    :precision => 22, :scale => 0
    t.date    "ngayud"
    t.decimal "hide",                         :precision => 1,  :scale => 0, :default => 0
    t.string  "makp",          :limit => 10,                                 :default => "0", :null => false
    t.decimal "sotien",                       :precision => 24, :scale => 7, :default => 0.0
    t.decimal "daketchuyen",                  :precision => 1,  :scale => 0, :default => 0
    t.string  "sochungtu_kc",  :limit => 20
    t.date    "ngayketchuyen"
    t.string  "makpchuyen",    :limit => 10,                                 :default => "0", :null => false
    t.string  "madieuchuyen",  :limit => 20
    t.decimal "giatrihaomon",                 :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "giatriconlai",                 :precision => 24, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tscdct_29", ["sochungtu"], :name => "ind_kt_tscdct_29"

  create_table "kt_tscdll", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 10,                                               :null => false
    t.string   "madoituong",      :limit => 10
    t.datetime "ngaychungtu",                                                                 :null => false
    t.datetime "ngayhachtoan",                                                                :null => false
    t.text     "diachi"
    t.text     "nguoighi"
    t.text     "lydo"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2, :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.string   "mmyy",            :limit => 4
    t.decimal  "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0, :null => false
  end

  create_table "kt_tscdll_0114", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 10,                                               :null => false
    t.string   "madoituong",      :limit => 10
    t.datetime "ngaychungtu",                                                                 :null => false
    t.datetime "ngayhachtoan",                                                                :null => false
    t.text     "diachi"
    t.text     "nguoighi"
    t.text     "lydo"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2, :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.string   "mmyy",            :limit => 4
    t.decimal  "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0, :null => false
  end

  add_index "kt_tscdll_0114", ["ngaychungtu"], :name => "ind_kt_tscdll_ngaychungtu_0114"

  create_table "kt_tscdll_0214", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 10,                                               :null => false
    t.string   "madoituong",      :limit => 10
    t.datetime "ngaychungtu",                                                                 :null => false
    t.datetime "ngayhachtoan",                                                                :null => false
    t.text     "diachi"
    t.text     "nguoighi"
    t.text     "lydo"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2, :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.string   "mmyy",            :limit => 4
    t.decimal  "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0, :null => false
  end

  add_index "kt_tscdll_0214", ["ngaychungtu"], :name => "ind_kt_tscdll_ngaychungtu_0214"

  create_table "kt_tscdll_0314", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 10,                                               :null => false
    t.string   "madoituong",      :limit => 10
    t.datetime "ngaychungtu",                                                                 :null => false
    t.datetime "ngayhachtoan",                                                                :null => false
    t.text     "diachi"
    t.text     "nguoighi"
    t.text     "lydo"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2, :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.string   "mmyy",            :limit => 4
    t.decimal  "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0, :null => false
  end

  add_index "kt_tscdll_0314", ["ngaychungtu"], :name => "ind_kt_tscdll_ngaychungtu_0314"

  create_table "kt_tscdll_0414", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 10,                                               :null => false
    t.string   "madoituong",      :limit => 10
    t.datetime "ngaychungtu",                                                                 :null => false
    t.datetime "ngayhachtoan",                                                                :null => false
    t.text     "diachi"
    t.text     "nguoighi"
    t.text     "lydo"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2, :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.string   "mmyy",            :limit => 4
    t.decimal  "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0, :null => false
  end

  add_index "kt_tscdll_0414", ["ngaychungtu"], :name => "ind_kt_tscdll_ngaychungtu_0414"

  create_table "kt_tscdll_0514", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 10,                                               :null => false
    t.string   "madoituong",      :limit => 10
    t.datetime "ngaychungtu",                                                                 :null => false
    t.datetime "ngayhachtoan",                                                                :null => false
    t.text     "diachi"
    t.text     "nguoighi"
    t.text     "lydo"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2, :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.string   "mmyy",            :limit => 4
    t.decimal  "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0, :null => false
  end

  add_index "kt_tscdll_0514", ["ngaychungtu"], :name => "ind_kt_tscdll_ngaychungtu_0514"

  create_table "kt_tscdll_0614", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 10,                                               :null => false
    t.string   "madoituong",      :limit => 10
    t.datetime "ngaychungtu",                                                                 :null => false
    t.datetime "ngayhachtoan",                                                                :null => false
    t.text     "diachi"
    t.text     "nguoighi"
    t.text     "lydo"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2, :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.string   "mmyy",            :limit => 4
    t.decimal  "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0, :null => false
  end

  add_index "kt_tscdll_0614", ["ngaychungtu"], :name => "ind_kt_tscdll_ngaychungtu_0614"

  create_table "kt_tscdll_0714", :id => false, :force => true do |t|
    t.string   "sochungtu",       :limit => 10,                                               :null => false
    t.string   "madoituong",      :limit => 10
    t.datetime "ngaychungtu",                                                                 :null => false
    t.datetime "ngayhachtoan",                                                                :null => false
    t.text     "diachi"
    t.text     "nguoighi"
    t.text     "lydo"
    t.string   "kemtheo",         :limit => nil
    t.decimal  "loaichungtu",                    :precision => 2, :scale => 0
    t.string   "loaitien",        :limit => 1
    t.string   "manv",            :limit => 20
    t.datetime "ngayud"
    t.string   "computer",        :limit => 50
    t.string   "userid",          :limit => 20
    t.string   "mmyy",            :limit => 4
    t.decimal  "tonghopmedisoft",                :precision => 1, :scale => 0, :default => 0, :null => false
  end

  add_index "kt_tscdll_0714", ["ngaychungtu"], :name => "ind_kt_tscdll_ngaychungtu_0714"

  create_table "kt_tscdtheodoi", :id => false, :force => true do |t|
    t.decimal "id",                               :precision => 22, :scale => 0,                  :null => false
    t.string  "matscd",             :limit => 10,                                                 :null => false
    t.string  "sohieu",             :limit => 20
    t.date    "ngaymua"
    t.date    "ngaysudung"
    t.date    "ngaybdkh"
    t.decimal "tgsudung",                         :precision => 4,  :scale => 0, :default => 0
    t.text    "mota"
    t.decimal "id_tinhtrang",                     :precision => 1,  :scale => 0
    t.decimal "manguon",                          :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.decimal "giamua",                           :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "chiphimua",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "nguyengia",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "vat",                              :precision => 4,  :scale => 0, :default => 0
    t.decimal "giasauvat",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "namsx",                            :precision => 4,  :scale => 0, :default => 0
    t.date    "ngaysx"
    t.decimal "tgbaohanh",                        :precision => 4,  :scale => 0, :default => 0
    t.text    "dkbaohanh"
    t.string  "bbgiaonhan",         :limit => 20
    t.date    "ngaybbgiaonhan"
    t.date    "ngay"
    t.date    "ngayud"
    t.decimal "tilekhauhaothang",                 :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "tilekhauhaonam",                   :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "giatrikhauhaothang",               :precision => 22, :scale => 4, :default => 0.0
    t.decimal "giatrikhauhaonam",                 :precision => 22, :scale => 4, :default => 0.0
  end

  create_table "kt_tscdtheodoi_0114", :id => false, :force => true do |t|
    t.decimal "id",                               :precision => 22, :scale => 0,                  :null => false
    t.string  "matscd",             :limit => 10,                                                 :null => false
    t.string  "sohieu",             :limit => 20
    t.date    "ngaymua"
    t.date    "ngaysudung"
    t.date    "ngaybdkh"
    t.decimal "tgsudung",                         :precision => 4,  :scale => 0, :default => 0
    t.text    "mota"
    t.decimal "id_tinhtrang",                     :precision => 1,  :scale => 0
    t.decimal "manguon",                          :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.decimal "giamua",                           :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "chiphimua",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "nguyengia",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "vat",                              :precision => 4,  :scale => 0, :default => 0
    t.decimal "giasauvat",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "namsx",                            :precision => 4,  :scale => 0, :default => 0
    t.date    "ngaysx"
    t.decimal "tgbaohanh",                        :precision => 4,  :scale => 0, :default => 0
    t.text    "dkbaohanh"
    t.string  "bbgiaonhan",         :limit => 20
    t.date    "ngaybbgiaonhan"
    t.date    "ngay"
    t.date    "ngayud"
    t.decimal "tilekhauhaothang",                 :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "tilekhauhaonam",                   :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "giatrikhauhaothang",               :precision => 22, :scale => 4, :default => 0.0
    t.decimal "giatrikhauhaonam",                 :precision => 22, :scale => 4, :default => 0.0
  end

  add_index "kt_tscdtheodoi_0114", ["id"], :name => "ind_kt_tscdtheodoi_0114"

  create_table "kt_tscdtheodoi_0214", :id => false, :force => true do |t|
    t.decimal "id",                               :precision => 22, :scale => 0,                  :null => false
    t.string  "matscd",             :limit => 10,                                                 :null => false
    t.string  "sohieu",             :limit => 20
    t.date    "ngaymua"
    t.date    "ngaysudung"
    t.date    "ngaybdkh"
    t.decimal "tgsudung",                         :precision => 4,  :scale => 0, :default => 0
    t.text    "mota"
    t.decimal "id_tinhtrang",                     :precision => 1,  :scale => 0
    t.decimal "manguon",                          :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.decimal "giamua",                           :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "chiphimua",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "nguyengia",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "vat",                              :precision => 4,  :scale => 0, :default => 0
    t.decimal "giasauvat",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "namsx",                            :precision => 4,  :scale => 0, :default => 0
    t.date    "ngaysx"
    t.decimal "tgbaohanh",                        :precision => 4,  :scale => 0, :default => 0
    t.text    "dkbaohanh"
    t.string  "bbgiaonhan",         :limit => 20
    t.date    "ngaybbgiaonhan"
    t.date    "ngay"
    t.date    "ngayud"
    t.decimal "tilekhauhaothang",                 :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "tilekhauhaonam",                   :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "giatrikhauhaothang",               :precision => 22, :scale => 4, :default => 0.0
    t.decimal "giatrikhauhaonam",                 :precision => 22, :scale => 4, :default => 0.0
  end

  add_index "kt_tscdtheodoi_0214", ["id"], :name => "ind_kt_tscdtheodoi_0214"

  create_table "kt_tscdtheodoi_0314", :id => false, :force => true do |t|
    t.decimal "id",                               :precision => 22, :scale => 0,                  :null => false
    t.string  "matscd",             :limit => 10,                                                 :null => false
    t.string  "sohieu",             :limit => 20
    t.date    "ngaymua"
    t.date    "ngaysudung"
    t.date    "ngaybdkh"
    t.decimal "tgsudung",                         :precision => 4,  :scale => 0, :default => 0
    t.text    "mota"
    t.decimal "id_tinhtrang",                     :precision => 1,  :scale => 0
    t.decimal "manguon",                          :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.decimal "giamua",                           :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "chiphimua",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "nguyengia",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "vat",                              :precision => 4,  :scale => 0, :default => 0
    t.decimal "giasauvat",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "namsx",                            :precision => 4,  :scale => 0, :default => 0
    t.date    "ngaysx"
    t.decimal "tgbaohanh",                        :precision => 4,  :scale => 0, :default => 0
    t.text    "dkbaohanh"
    t.string  "bbgiaonhan",         :limit => 20
    t.date    "ngaybbgiaonhan"
    t.date    "ngay"
    t.date    "ngayud"
    t.decimal "tilekhauhaothang",                 :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "tilekhauhaonam",                   :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "giatrikhauhaothang",               :precision => 22, :scale => 4, :default => 0.0
    t.decimal "giatrikhauhaonam",                 :precision => 22, :scale => 4, :default => 0.0
  end

  add_index "kt_tscdtheodoi_0314", ["id"], :name => "ind_kt_tscdtheodoi_0314"

  create_table "kt_tscdtheodoi_0414", :id => false, :force => true do |t|
    t.decimal "id",                               :precision => 22, :scale => 0,                  :null => false
    t.string  "matscd",             :limit => 10,                                                 :null => false
    t.string  "sohieu",             :limit => 20
    t.date    "ngaymua"
    t.date    "ngaysudung"
    t.date    "ngaybdkh"
    t.decimal "tgsudung",                         :precision => 4,  :scale => 0, :default => 0
    t.text    "mota"
    t.decimal "id_tinhtrang",                     :precision => 1,  :scale => 0
    t.decimal "manguon",                          :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.decimal "giamua",                           :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "chiphimua",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "nguyengia",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "vat",                              :precision => 4,  :scale => 0, :default => 0
    t.decimal "giasauvat",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "namsx",                            :precision => 4,  :scale => 0, :default => 0
    t.date    "ngaysx"
    t.decimal "tgbaohanh",                        :precision => 4,  :scale => 0, :default => 0
    t.text    "dkbaohanh"
    t.string  "bbgiaonhan",         :limit => 20
    t.date    "ngaybbgiaonhan"
    t.date    "ngay"
    t.date    "ngayud"
    t.decimal "tilekhauhaothang",                 :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "tilekhauhaonam",                   :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "giatrikhauhaothang",               :precision => 22, :scale => 4, :default => 0.0
    t.decimal "giatrikhauhaonam",                 :precision => 22, :scale => 4, :default => 0.0
  end

  add_index "kt_tscdtheodoi_0414", ["id"], :name => "ind_kt_tscdtheodoi_0414"

  create_table "kt_tscdtheodoi_0514", :id => false, :force => true do |t|
    t.decimal "id",                               :precision => 22, :scale => 0,                  :null => false
    t.string  "matscd",             :limit => 10,                                                 :null => false
    t.string  "sohieu",             :limit => 20
    t.date    "ngaymua"
    t.date    "ngaysudung"
    t.date    "ngaybdkh"
    t.decimal "tgsudung",                         :precision => 4,  :scale => 0, :default => 0
    t.text    "mota"
    t.decimal "id_tinhtrang",                     :precision => 1,  :scale => 0
    t.decimal "manguon",                          :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.decimal "giamua",                           :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "chiphimua",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "nguyengia",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "vat",                              :precision => 4,  :scale => 0, :default => 0
    t.decimal "giasauvat",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "namsx",                            :precision => 4,  :scale => 0, :default => 0
    t.date    "ngaysx"
    t.decimal "tgbaohanh",                        :precision => 4,  :scale => 0, :default => 0
    t.text    "dkbaohanh"
    t.string  "bbgiaonhan",         :limit => 20
    t.date    "ngaybbgiaonhan"
    t.date    "ngay"
    t.date    "ngayud"
    t.decimal "tilekhauhaothang",                 :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "tilekhauhaonam",                   :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "giatrikhauhaothang",               :precision => 22, :scale => 4, :default => 0.0
    t.decimal "giatrikhauhaonam",                 :precision => 22, :scale => 4, :default => 0.0
  end

  add_index "kt_tscdtheodoi_0514", ["id"], :name => "ind_kt_tscdtheodoi_0514"

  create_table "kt_tscdtheodoi_0614", :id => false, :force => true do |t|
    t.decimal "id",                               :precision => 22, :scale => 0,                  :null => false
    t.string  "matscd",             :limit => 10,                                                 :null => false
    t.string  "sohieu",             :limit => 20
    t.date    "ngaymua"
    t.date    "ngaysudung"
    t.date    "ngaybdkh"
    t.decimal "tgsudung",                         :precision => 4,  :scale => 0, :default => 0
    t.text    "mota"
    t.decimal "id_tinhtrang",                     :precision => 1,  :scale => 0
    t.decimal "manguon",                          :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.decimal "giamua",                           :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "chiphimua",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "nguyengia",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "vat",                              :precision => 4,  :scale => 0, :default => 0
    t.decimal "giasauvat",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "namsx",                            :precision => 4,  :scale => 0, :default => 0
    t.date    "ngaysx"
    t.decimal "tgbaohanh",                        :precision => 4,  :scale => 0, :default => 0
    t.text    "dkbaohanh"
    t.string  "bbgiaonhan",         :limit => 20
    t.date    "ngaybbgiaonhan"
    t.date    "ngay"
    t.date    "ngayud"
    t.decimal "tilekhauhaothang",                 :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "tilekhauhaonam",                   :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "giatrikhauhaothang",               :precision => 22, :scale => 4, :default => 0.0
    t.decimal "giatrikhauhaonam",                 :precision => 22, :scale => 4, :default => 0.0
  end

  add_index "kt_tscdtheodoi_0614", ["id"], :name => "ind_kt_tscdtheodoi_0614"

  create_table "kt_tscdtheodoi_0714", :id => false, :force => true do |t|
    t.decimal "id",                               :precision => 22, :scale => 0,                  :null => false
    t.string  "matscd",             :limit => 10,                                                 :null => false
    t.string  "sohieu",             :limit => 20
    t.date    "ngaymua"
    t.date    "ngaysudung"
    t.date    "ngaybdkh"
    t.decimal "tgsudung",                         :precision => 4,  :scale => 0, :default => 0
    t.text    "mota"
    t.decimal "id_tinhtrang",                     :precision => 1,  :scale => 0
    t.decimal "manguon",                          :precision => 3,  :scale => 0, :default => 0,   :null => false
    t.decimal "giamua",                           :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "chiphimua",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "nguyengia",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "vat",                              :precision => 4,  :scale => 0, :default => 0
    t.decimal "giasauvat",                        :precision => 24, :scale => 7, :default => 0.0, :null => false
    t.decimal "namsx",                            :precision => 4,  :scale => 0, :default => 0
    t.date    "ngaysx"
    t.decimal "tgbaohanh",                        :precision => 4,  :scale => 0, :default => 0
    t.text    "dkbaohanh"
    t.string  "bbgiaonhan",         :limit => 20
    t.date    "ngaybbgiaonhan"
    t.date    "ngay"
    t.date    "ngayud"
    t.decimal "tilekhauhaothang",                 :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "tilekhauhaonam",                   :precision => 6,  :scale => 2, :default => 0.0
    t.decimal "giatrikhauhaothang",               :precision => 22, :scale => 4, :default => 0.0
    t.decimal "giatrikhauhaonam",                 :precision => 22, :scale => 4, :default => 0.0
  end

  add_index "kt_tscdtheodoi_0714", ["id"], :name => "ind_kt_tscdtheodoi_0714"

  create_table "kt_tscdtonkhoct", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makp",      :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  create_table "kt_tscdtonkhoct_0114", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makp",      :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tscdtonkhoct_0114", ["mmyy"], :name => "ind_kt_tscdtonkhoct_0114"

  create_table "kt_tscdtonkhoct_0214", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makp",      :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tscdtonkhoct_0214", ["mmyy"], :name => "ind_kt_tscdtonkhoct_0214"

  create_table "kt_tscdtonkhoct_0314", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makp",      :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tscdtonkhoct_0314", ["mmyy"], :name => "ind_kt_tscdtonkhoct_0314"

  create_table "kt_tscdtonkhoct_0414", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makp",      :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tscdtonkhoct_0414", ["mmyy"], :name => "ind_kt_tscdtonkhoct_0414"

  create_table "kt_tscdtonkhoct_0514", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makp",      :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tscdtonkhoct_0514", ["mmyy"], :name => "ind_kt_tscdtonkhoct_0514"

  create_table "kt_tscdtonkhoct_0614", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makp",      :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tscdtonkhoct_0614", ["mmyy"], :name => "ind_kt_tscdtonkhoct_0614"

  create_table "kt_tscdtonkhoct_0714", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makp",      :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tscdtonkhoct_0714", ["mmyy"], :name => "ind_kt_tscdtonkhoct_0714"

  create_table "kt_tscdtonkhoct_0814", :id => false, :force => true do |t|
    t.string  "mmyy",      :limit => 20,                                                 :null => false
    t.string  "makp",      :limit => 10,                                                 :null => false
    t.decimal "idtheodoi",               :precision => 25, :scale => 0,                  :null => false
    t.decimal "tondau",                  :precision => 22, :scale => 7, :default => 0.0
    t.decimal "slnhap",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
    t.decimal "slxuat",                  :precision => 22, :scale => 7, :default => 0.0, :null => false
  end

  add_index "kt_tscdtonkhoct_0814", ["mmyy"], :name => "ind_kt_tscdtonkhoct_0814"

  create_table "kt_user", :id => false, :force => true do |t|
    t.string  "userid",     :limit => 50,                                               :null => false
    t.string  "hoten",      :limit => 100
    t.string  "passuserid", :limit => 50
    t.decimal "id_kt_user",                :precision => 5, :scale => 0
    t.decimal "khoa",                      :precision => 1, :scale => 0, :default => 0
    t.decimal "admin",                     :precision => 1, :scale => 0, :default => 0
  end

  add_index "kt_user", ["id_kt_user"], :name => "uni_kt_user_id", :unique => true

end
