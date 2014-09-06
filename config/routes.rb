KetoanRuby::Application.routes.draw do



  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'

  match '/danhmuc/dmkho/' => 'danhmuc/dmkho#index', :via => :get
  match '/danhmuc/dmkho/show/:makho' => 'danhmuc/dmkho#show', :via => :get
  match '/danhmuc/dmkho/new' => 'danhmuc/dmkho#new', :via => [:get,:post]
  match '/danhmuc/dmkho/save' => 'danhmuc/dmkho#create', :via => [:get,:post]
  match '/danhmuc/dmkho/delete/:makho' => 'danhmuc/dmkho#delete', :via => [:get,:post]
  match '/danhmuc/dmkho/edit/:makho' => 'danhmuc/dmkho#edit', :via => [:get,:post]
  match '/danhmuc/dmkho/update/:makho' => 'danhmuc/dmkho#update', :via => [:get,:post]

  match '/danhmuc/dmnhomtk/' => 'danhmuc/dmnhomtk#index', :via => :get
  match '/danhmuc/dmnhomtk/show/:manhom' => 'danhmuc/dmnhomtk#show', :via => :get
  match '/danhmuc/dmnhomtk/new' => 'danhmuc/dmnhomtk#new', :via => [:get,:post]
  match '/danhmuc/dmnhomtk/search2' => 'danhmuc/dmnhomtk#search2', :via => [:get,:post]
  match '/danhmuc/dmnhomtk/search/' => 'danhmuc/dmnhomtk#search', :via => [:get,:post]
  match '/danhmuc/dmnhomtk/save' => 'danhmuc/dmnhomtk#create', :via => [:get,:post]
  match '/danhmuc/dmnhomtk/delete/:manhom' => 'danhmuc/dmnhomtk#delete', :via => [:get,:post]
  match '/danhmuc/dmnhomtk/edit/:manhom' => 'danhmuc/dmnhomtk#edit', :via => [:get,:post]
  match '/danhmuc/dmnhomtk/update/:manhom' => 'danhmuc/dmnhomtk#update', :via => [:get,:post]
end
