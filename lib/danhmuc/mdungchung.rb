module Danhmuc::Mdungchung

  def  tim_kiem_nhomtk(ten)
    timkiem = Danhmuc::Dmnhomtk.select("manhom,tennhom").where(" manhom like '%#{ten}%' or tennhom like '%#{ten}%'")
    # trả về
    return timkiem
  end

  module_function :tim_kiem_nhomtk
end