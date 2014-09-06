class Danhmuc::Dmtinhchattk < ActiveRecord::Base
  # attr_accessible :title, :body
  self.table_name='dmtinhchattk'
  self.primary_key='ma'

  has_many :danhmuc_dmnhomtks, :class_name => 'Danhmuc::Dmnhomtk', foreign_key: 'ma'
end
