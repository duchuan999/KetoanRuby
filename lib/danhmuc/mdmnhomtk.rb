module Danhmuc::Mdmnhomtk

  def load_nhomtk1(ma)

     sl='manhom,tennhom,ten'
   ji='left join ketoan_vn.dmtinhchattk on dmnhomtk.tinhchat=dmtinhchattk.ma'
     wh=" manhom like ? or tennhom like ?"
   return dmnhom=Danhmuc::Dmnhomtk.select(sl).joins(:danhmuc_dmtinhchattk).where(wh,"%#{ma}%","%#{ma}%").order("manhom")

end
  module_function :load_nhomtk1
end