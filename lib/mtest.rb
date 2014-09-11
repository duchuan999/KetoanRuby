class Mtest
  # Tìm kiếm thông tin bệnh nhân
  def select(limit, mabacsi, makhoaphong, manhanviennhap, tungay, denngay, dakham)
    # Điều kiện tìm kiếm
    w = " 1 = 1 "
    mabacsi.nil? ? w : w+=" and a.mabs =#{mabacsi}  "
    makhoaphong.nil? ? w : w+=" and  benhandt.makp =#{makhoaphong}  "
    manhanviennhap.nil? ? w  : w+=" and  btdbn.userid =#{manhanviennhap}  "
    tungay.nil? ? w : w+=" and to_date(to_char(a.ngay,'dd/mm/yyyy'),'dd/mm/yyyy')>=to_date('" + tungay + "','dd/mm/yyyy')"
    denngay.nil? ? w : w+=" and  to_date(to_char(a.ngay,'dd/mm/yyyy'),'dd/mm/yyyy')<=to_date('" + denngay + "','dd/mm/yyyy')"
    #dakham.nil? ? w : w+=" mabs =#{dakham}"
    # Lấy đối tuognwj bệnh nhân
    bn = Cyber::Btdbn.limit(limit).select("btdbn.*, a.makp, a.mabs, a.madoituong, a.lanthu, a.chandoan ")
      .joins('left join cm_data.benhandt as a on a.mabn = btdbn.mabn')
      .where(w)

    # Chuyễn đối tượng bn sang Json
    bn =  bn.to_a
    bn.each do |x|
      # Lấy tên giới tính theo ngôn ngữ
      #Lấy Tên Giới Tính
      x[:gioitinh]  = Cyber::Dmphai.select("ten").where(id: x[:maphai].to_i).pluck("ten")[0]
      x[:tenxa]     = Cyber::Btdxa.select("ten").where(id: x[:maxa]).pluck("ten")[0]
      x[:tenhuyen]  = Cyber::Btdquan.select("ten").where(id: x[:maquan]).pluck("ten")[0]
      x[:tentinh]   = Cyber::Btdtt.select("ten").where(id: x[:matt]).pluck("ten")[0]
      x[:doituong]  = Cyber::Doituong.select("ma").where(id: x[:madoituong]).pluck("ma")[0]
      # Set bác sĩ
      x[:tenbacsi]  = Cyber::Dmbs.exists?(id: x[:mabs].to_s) ?  Cyber::Dmbs.select("hoten").where(id: x[:mabs]).pluck("hoten")[0] : ""
      x[:tenkhoaphong]  = Cyber::Btdkpbv.select("ten").where(id: x[:makp]).pluck("ten")[0]
      x[:doituong]  = Cyber::Btddt.select("ten").where(id: x[:madt]).pluck("ten")[0]
    end
    return bn
  end

end