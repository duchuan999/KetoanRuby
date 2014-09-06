class Danhmuc::Dmkho < ActiveRecord::Base
  attr_accessible :makho, :tenkho
  self.table_name='dmkho'
  self.primary_key='makho'
end
