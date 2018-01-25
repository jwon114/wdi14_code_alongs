class CommentsController < ApplicationController
	def create
		comment = Comment.new
		comment.body = params[:comment_text]
		comment.user_id = session[:user_id]
		comment.project_id = params[:project_id]

		if comment.save
			redirect_to '/projects/' + params[:project_id]
		end
	end
end
