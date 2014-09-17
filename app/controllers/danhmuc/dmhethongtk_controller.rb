class Danhmuc::DmhethongtkController < ApplicationController

  layout 'layout_main'
  include Danhmuc::Mdmhethongtk
  def index
    @dmhethongtk=LoadAll()
  end
  def show
    @dmhethongtk=Show(params[:sotk])
  end
  def new
  @dmnhomtk=Danhmuc::Dmnhomtk.all
    @dmtinhchattk=Danhmuc::Dmtinhchattk.all

  end
  def act_insert_tk
    sotk =params[:sotk].blank? ? '' : params[:sotk]
    tentk =params[:tentk].blank? ? '' : params[:tentk]
    tentienganh =params[:tentienganh].blank? ? '' : params[:tentienganh]
    dmnhomtk =params[:dmnhomtk].blank? ? '' : params[:dmnhomtk]
    tinhchat =params[:tinhchat].blank? ? '' : params[:tinhchat]
    diengiai =params[:diengiai].blank? ? '' : params[:diengiai]
    @result=Danhmuc::Dmhethongtk.themmoi(sotk,tentk,tentienganh,dmnhomtk,tinhchat,diengiai)
    if @result.save
      redirect_to(:action =>'index')
    else
      render ('new')
    end

  end
  def edit
    @dmnhomtk=Danhmuc::Dmnhomtk.all
    @dmtinhchattk=Danhmuc::Dmtinhchattk.all
    @dmhethongtk=Danhmuc::Dmhethongtk.find(params[:sotk])
  end
  def update

  end
  def delete
    @dmtk=Danhmuc::Dmhethongtk.find(params[:sotk])
    if @dmtk.destroy
      redirect_to(:action => 'index')
    end
  end
  def search
    @ketqua= Timkiem(params[:sotk])
  end
end
