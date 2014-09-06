class Danhmuc::Dmnhomtk < ActiveRecord::Base
   attr_accessible :manhom, :tennhom,:tinhchat
  self.table_name='dmnhomtk'
  self.primary_key='manhom'
  belongs_to :danhmuc_dmtinhchattk, :class_name => 'Danhmuc::Dmtinhchattk', foreign_key: 'tinhchat'
   has_many :page
   #validates_presence_of :tennhom

   def load_nhomtk(ma)
     dmnhom=Danhmuc::Dmnhomtk
     ivalid=dmnhom.where('manhom=?',ma)
     if ivalid.blank?
       return false
     else
       return true
     end
   end
  def self.search(ma)
    sl='manhom,tennhom,ten'
    ji='left join ketoan_vn.dmtinhchattk on dmnhomtk.tinhchat=dmtinhchattk.ma'
    wh=" manhom like ? or tennhom like ?"
    dmnhom=Danhmuc::Dmnhomtk.select(sl).joins(ji).where(wh,"%#{ma}%","%#{ma}%").order("manhom")

    return dmnhom
  end
end
