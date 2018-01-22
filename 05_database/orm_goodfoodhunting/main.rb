require 'sinatra'
require 'sinatra/reloader'
require_relative 'db_config'
require_relative 'models/dish'
require_relative 'models/comment'
require_relative 'models/dish_type'
require_relative 'models/user'

enable :sessions # sinatra provides this feature
				# gives you a global hash "session" to write in

helpers do
	def current_user
		User.find_by(id: session[:user_id])
	end

	def logged_in?
		!!current_user # double negation, negate nil returns true, negate again returns false. 
					# This converts to true or false from object or nil. 
	end
end

get '/' do
	@dishes = Dish.all.order(:id)
	erb :index
end

get '/dishes/new' do
	erb :new
end

get '/dishes/:id' do
	redirect '/login' unless session[:user_id]
	
	@dish = Dish.find(params[:id])
	@comments = Comment.where(dish_id: params[:id])
	erb :show
end

post '/dishes' do
	# add a new record to my dishes table
	dish = Dish.new
	dish.name = params[:name]
	dish.image_url = params[:image_url]	
	dish.save

	redirect '/'
end

delete '/dishes/:id' do
	'deleting stuff'
	dish = Dish.find(params[:id]).destroy
	redirect '/'
end

get '/dishes/:id/edit' do
	@dish = Dish.find(params[:id])
	erb :edit
end

put '/dishes/:id' do
	dish = Dish.find(params[:id])
	dish.name = params[:name]
	dish.image_url = params[:image_url]
	dish.save
	redirect '/dishes/' + params[:id]
end

post '/comments' do
	new_comment = Comment.new
	new_comment.dish_id = params[:dish_id]
	new_comment.body = params[:comment]
	new_comment.save
	redirect '/dishes/' + params[:dish_id]
end

get '/login' do
	erb :login

end

post '/session' do
	# check email
	user = User.find_by(email: params[:email])

	# check password
	if user && user.authenticate(params[:password])
		# have a user and authenticate return truthy
		session[:user_id] = user.id # just a hash

		redirect '/'
	else
		erb :login
	end
end

delete '/session' do
	session[:user_id] = nil
	redirect '/login'
end

#  also acceptable but be wary of the length of the url path
# post '/dishes/:id/comments' do
# 	new_comment = Comment.new
# 	new_comment.dish_id = params[:dish_id]
# 	new_comment.body = params[:comment]
# 	new_comment.save
# 	redirect '/dishes/' + params[:dish_id]
# end








