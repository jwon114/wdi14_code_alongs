Rails.application.routes.draw do
  resources :dishes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  			  # controller file & method 
  get '/', to: 'pages#home'
  get '/about', to: 'pages#about'
  # get '/dishes/new', to: 'dishes#new'
  # get '/dishes/:id', to: 'dishes#show'
  # post '/dishes', to: 'dishes#create'
  # put '/dishes', to: 'dishes#update'
  # get '/dishes', to: 'dishes#index'
  # get '/dishes/:id', to: 'dishes#show' # don't have to put this here because we have "resources :dishes" which uses all the default routes created for us by rails
end
