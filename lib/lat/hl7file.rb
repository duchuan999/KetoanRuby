module Lat::Hl7file
  # Tạo mới folder
  # Nếu đã tồn tại thì không tạo nữa
  def create_folder(folder_name)
    Dir.mkdir(folder_name) unless File.exists?(folder_name)
  end
  # Tạo folder theo cấu trúc chuẩn Hl7
  # - Root
  # -- 3 ký tự đầu mã bệnh nhân
  # --- Ký tự 4->6 mã bệnh nhân
  # ---- Mã bệnh nhân
  # ----- Ngày chũa bệnh (yyyymmdd)
  # ------ Loại dữ liệu
  # @Params:
  # - @mabn:
  # - data_type
  #  @Result: Tạo folder
  def hl7_folder(mabn,data_type)
    time = Time.now
    if data_type != "ADT-00"
      time = time.to_s(:number)[0..7]
    else
      time = '-'
    end
    create_folder('Hl7Data/'+mabn[0..9])
    create_folder('Hl7Data/'+mabn[0..9]+'/'+mabn[10..12])
    create_folder('Hl7Data/'+mabn[0..9]+'/'+mabn[10..12]+'/'+mabn[13..15])
    create_folder('Hl7Data/'+mabn[0..9]+'/'+mabn[10..12]+'/'+mabn[13..15]+'/'+mabn[10..20])
    create_folder('Hl7Data/'+mabn[0..9]+'/'+mabn[10..12]+'/'+mabn[13..15]+'/'+mabn[10..20]+'/'+time)
    create_folder('Hl7Data/'+mabn[0..9]+'/'+mabn[10..12]+'/'+mabn[13..15]+'/'+mabn[10..20]+'/'+time+'/'+ data_type)
  end
  # Tạo file theo chuẩn HL7
  def hl7_file_write(mabn,data_type,sochithi,khoakhamchuabenh,flag,message)
    time = Time.now
    if data_type != "ADT-00"
      time = time.to_s(:number)[0..7]
    else
      time = '-'
    end
    # Đường dẫn trỏ đến
    folder_name = 'Hl7Data/'+mabn[0..9]+'/'+mabn[10..12]+'/'+mabn[13..15]+'/'+mabn[10..20]+'/'+time+'/'+ data_type+'/'
    # Tên File lưu trữ
    file_name = mabn[10..20]+'_'+time+'_'+data_type+'_'+sochithi+'_'+'MSH-7'+'_'+khoakhamchuabenh+'_'+flag
    file_path = folder_name << file_name
    File.open(file_path, 'w') { |file| file.write(message)}
  end
  # Đọc 1 file
  def hl7_file_read(mabn,data_type,sochithi,khoakhamchuabenh,segment_type)
    begin
      time = Time.now
      if data_type != "ADT-00"
        time = time.to_s(:number)[0..7]
      else
        time = '-'
      end
      # Đường dẫn trỏ đến
      folder_name = 'Hl7Data/'+mabn[0..9]+'/'+mabn[10..12]+'/'+mabn[13..15]+'/'+mabn[10..20]+'/'+time+'/'+ data_type+'/'
      # Tên File lưu trữ còn hiệu lực
      file_name = mabn[10..20]+'_'+time+'_'+data_type+'_'+sochithi+'_'+'MSH-7'+'_'+khoakhamchuabenh+'_1'
      file_path = folder_name << file_name
      raw_input = open( file_path ).readlines
      msg = HL7::Message.new( raw_input )
      return  msg[segment_type]
    rescue => exception
      return "khong ton tai gia file"
    end
  end
  #
  def hl7_file_rw(type)
    if type == 'r'

    else

    end
  end

  module_function :hl7_folder, :hl7_file_write, :create_folder, :hl7_file_read
end