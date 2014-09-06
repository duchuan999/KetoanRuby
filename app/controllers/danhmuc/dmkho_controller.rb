class Danhmuc::DmkhoController < ApplicationController
  layout 'layout_main'

  def index
    @dmkho= Danhmuc::Dmkho.where("makho <> '0' ").order("makho")
  end

  def show
    @dmkho=Danhmuc::Dmkho.find(params[:makho])
  end

  def new
    @dmkho=Danhmuc::Dmkho.new
  end

  def create
    @dmkho=Danhmuc::Dmkho.create(params[:dmkho].slice(:makho,:tenkho))

    if @dmkho.save
      redirect_to(:action => 'index')
    else
      render('new')
    end
  end

  def edit
    @dmkho=Danhmuc::Dmkho.find(params[:makho])

  end

  def update
    @dmkho=Danhmuc::Dmkho.find(params[:makho])
    @dmkho.update_attributes(params[:dmkho].slice(:makho,:tenkho))
    redirect_to(:action => 'index')
  end

  def delete
    @dmkho=Danhmuc::Dmkho.find(params[:makho])
    if @dmkho.destroy
        redirect_to(:action => 'index')
    end
  end
end
