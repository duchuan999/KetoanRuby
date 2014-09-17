class DungchungController < ApplicationController
  layout "layout_main"
  include Danhmuc::Mdungchung
  def act_tim_kiem_nhom_tk
    ten = params[:dmnhomtk].blank? ? '' : params[:dmnhomtk]

    # trả về giá trị
    render :json => tim_kiem_nhomtk(ten)
  end
  def act_tim_kiem_tinhchat
    ten=params[:tinhchat].blank? ? '' : params[:tinhchat]

    render :json => timkiem_tinhchat(ten)
  end
end
