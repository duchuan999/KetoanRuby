class Danhmuc::Dmhethongtk < ActiveRecord::Base
   attr_accessible :sotk, :tentk,:tentienganh,:diengiai,:tinhchat,:nhomtk
  self.table_name='dmhethongtk'
  self.primary_key='sotk'
  belongs_to :danhmuc_dmnhomtk, :class_name => 'Danhmuc::Dmnhomtk', foreign_key: 'nhomtk'
  belongs_to :danhmuc_dmtinhchattk, :class_name => 'Danhmuc::Dmtinhchattk',foreign_key: 'tinhchat'

  def self.themmoi(sotk,ten,ta,nhom,tinhchat,diengiai)

    inserttk= Danhmuc::Dmhethongtk.new
    inserttk.sotk=sotk
    inserttk.tentk=ten
    inserttk.tentienganh=ta
    inserttk.nhomtk=nhom
    inserttk.tinhchat=tinhchat
    inserttk.diengiai=diengiai
    inserttk.save
  end

end
