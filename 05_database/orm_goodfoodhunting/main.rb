require 'sinatra'
require 'sinatra/reloader'
require_relative 'db_config'
require_relative 'models/dish'

get '/' do
	@dishes = Dish.all
	erb :index
end

get '/dishes/new' do
	erb :new
end

get '/dishes/:id' do
	@dish = Dish.find(params[:id])
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

