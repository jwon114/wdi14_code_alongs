class UsersController < ApplicationController
	def new
		new_user = User.new
		new_user.email = params[:email]
		new_user.password = params[:password]

		if new_user.save
			
		else

		end
	end

end
