class Danhmuc::DmnhomtkController < ApplicationController

  layout "layout_main"

  include Danhmuc::Mdmnhomtk

  def index

    sl='manhom,tennhom,ten'
    ji='left join ketoan_vn.dmtinhchattk on dmnhomtk.tinhchat=dmtinhchattk.ma'
    wh=""
    @dmnhomtk=Danhmuc::Dmnhomtk.select(sl).joins(ji).where(wh).order("manhom")


  end

  def show
    sl='manhom as ma,tennhom,ten'
    ji='left join ketoan_vn.dmtinhchattk on dmnhomtk.tinhchat=dmtinhchattk.ma'

    @dmnhomtk=Danhmuc::Dmnhomtk.select(sl).joins(ji).where("manhom=?",params[:manhom])
    #@dmnhomtk=Danhmuc::Dmnhomtk.find(params[:manhom])
  end

  def new
    @tinhchat=Danhmuc::Dmtinhchattk.all
  end

  def create
    @dmnhomtk=Danhmuc::Dmnhomtk.create(params[:dmnhomtk].slice(:manhom,:tennhom,:tinhchat))
    if @dmnhomtk.save
      redirect_to(:action => 'index')
    else
      render('new')
    end
  end
  def edit
    @tinhchat=Danhmuc::Dmtinhchattk.all
    @dmnhomtk=Danhmuc::Dmnhomtk.find(params[:manhom])
  end

  def update
    @dmnhomtk=Danhmuc::Dmnhomtk.find(params[:manhom])

   if @dmnhomtk.update_attributes(params[:dmnhomtk].slice(:manhom,:tennhom,:tinhchat))
    redirect_to(:action => 'index')
   else
     @dmnhomtk_count=Danhmuc::Dmnhomtk.count
     render('edit')
   end
  end

  def delete
    @dmnhomtk=Danhmuc::Dmnhomtk.find(params[:manhom])
    if @dmnhomtk.destroy
      redirect_to(:action => 'index')
    end
  end
  def search
    @dmnhomtk=params[:manhom]
    if Danhmuc::Dmnhomtk.load_nhomtk( @dmnhomtk)
     redirect_to(:action => 'show',:manhom => @dmnhomtk)
    else
      flash[:notice]="Not found!."
      redirect_to(:action => 'index')
    end
  end
  def search2
    #@dmnhomtk=params[:manhom]
    #@ketqua= Danhmuc::Dmnhomtk.search(@dmnhomtk)
    @ketqua= load_nhomtk1(params[:manhom])

  end

end
