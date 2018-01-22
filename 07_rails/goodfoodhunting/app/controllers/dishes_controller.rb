class DishesController < ApplicationController
	def index
		@dishes = Dish.all
	end

	def new

	end

	def create
		new_dish = Dish.new
		new_dish.name = params[:dish_name]
		new_dish.image_url = params[:image_url]
		new_dish.save

		redirect_to '/dishes'
	end

	def show
		@dish = Dish.find_by(id: params[:id])
		if @dish == nil	
			@error = "Couldn't find dish"
		end
		# render :show # dont have to to have this as it has the same name in the views file
	end

end
