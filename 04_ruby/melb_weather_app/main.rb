require "sinatra"
require "sinatra/reloader"
require "weather-api"
require	"pry"

get "/" do
	# do not call a variable @response
	city = params[:city]
	response = Weather.lookup_by_location("#{city}", Weather::Units::CELSIUS)
	@title = response.title
	@temperature = response.condition.temp
	# binding.pry
	erb(:index)
end