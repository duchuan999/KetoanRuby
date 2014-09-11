class Danhmuc::Dmhethongtk < ActiveRecord::Base
   attr_accessible :sotk, :tentk,:tentienganh,:diengiai,:tinhchat,:nhomtk
  self.table_name='dmhethongtk'
  self.primary_key='sotk'
  belongs_to :danhmuc_dmnhomtk, :class_name => 'Danhmuc::Dmnhomtk', foreign_key: 'nhomtk'
  belongs_to :danhmuc_dmtinhchattk, :class_name => 'Danhmuc::Dmtinhchattk',foreign_key: 'tinhchat'
end
