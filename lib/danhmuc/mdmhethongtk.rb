module Danhmuc::Mdmhethongtk
  require "rubygems"
  require 'json'

  def LoadAll()
    sl='sotk,tentk,ten,tentienganh,tennhom,diengiai,nhomtk'
    ji='left join ketoan_vn.dmtinhchattk on dmhethongtk.tinhchat=dmtinhchattk.ma
        left join ketoan_vn.dmnhomtk on dmhethongtk.nhomtk=dmnhomtk.manhom'
    @dmhethongtk=Danhmuc::Dmhethongtk.select(sl).joins(ji).order("sotk")

  end
  def Show(sotk)
    sl='sotk,tentk,ten,tentienganh,tennhom,diengiai,nhomtk'
    ji='left join ketoan_vn.dmtinhchattk on dmhethongtk.tinhchat=dmtinhchattk.ma
        left join ketoan_vn.dmnhomtk on dmhethongtk.nhomtk=dmnhomtk.manhom'

    @dmhethongtk=Danhmuc::Dmhethongtk.select(sl).joins(ji).where("sotk=?",sotk).order("sotk")
  end
  def Timkiem(ten)
  sl='sotk,tentk,ten,tentienganh,tennhom,diengiai,nhomtk'
  ji='left join ketoan_vn.dmtinhchattk on dmhethongtk.tinhchat=dmtinhchattk.ma
        left join ketoan_vn.dmnhomtk on dmhethongtk.nhomtk=dmnhomtk.manhom'
  wh=' sotk like ? or tentk like ?'
  @dmhethongtk=Danhmuc::Dmhethongtk.select(sl).joins(ji).where(wh,"%#{ten}%","%#{ten}%").order("sotk")

end
  module_function :LoadAll, :Show,:Timkiem
end
