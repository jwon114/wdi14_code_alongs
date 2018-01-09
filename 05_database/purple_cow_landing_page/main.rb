require 'sinatra'
require 'sinatra/reloader'

get '/' do
  	erb :index
end

get '/about' do
	erb :about
end

get '/donate' do
	erb :donate
end

get '/email_input' do
	# params is a hash of the query string
	# params = { "email": "dt@ga.co" }
	# email = params["email"]
	# store it in a file
	file = File.open("suckers.txt", "a")
	file.puts(params[:email])
	file.close
	return "thank you for your money"
	# emails_array.push(params[:email]) #sinatra allows symbols or strings as keys for the params hash
	# return emails_array.inspect
end

get '/suckers' do
	# @list = emails_array
	file = File.readlines("suckers.txt")
	@list = file
	erb :suckers
end



