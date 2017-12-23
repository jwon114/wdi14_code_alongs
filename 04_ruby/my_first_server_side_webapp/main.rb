require "sinatra"
require "sinatra/reloader"

# what url should the user type
# what request can the user make on the server

# if a user makes a "get" request to /home
# these are called routes
get "/home" do # request
	erb(:home) # for the response look for a file named home
end

get "/donate" do
	"<h1>Thank you</h1>"
end

# user can send 2 numbers and server responds with the sum
get "/add" do
	(params[:num1].to_i + params[:num2].to_i).to_s
end

get "/greetings" do
	"hello #{ params[:name] }"
end




