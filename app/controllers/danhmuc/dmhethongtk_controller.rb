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
  def create

  end
  def edit
    @dmnhomtk=Danhmuc::Dmnhomtk.all
    @dmtinhchattk=Danhmuc::Dmtinhchattk.all
    @dmhethongtk=Danhmuc::Dmhethongtk.find(params[:sotk])
  end
  def update

  end
  def delete

  end
  def search

  end
end
