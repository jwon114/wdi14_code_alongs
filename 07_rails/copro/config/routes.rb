Rails.application.routes.draw do
  resources :likes
	get '/', to: 'pages#home'
	get '/login', to: 'sessions#new'
	post '/session', to: 'sessions#create'
	delete '/session', to: 'sessions#destroy'
  	
  	resources :projects, only: [:new, :create, :show]
  	resources :comments
  	resources :users
  	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
