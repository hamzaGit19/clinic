class UsersController < ApplicationController
	skip_before_filter :authenticate_user!
	# before_filter :authenticate_user!

	def show
		users = User.all
		render json: users
	end
end
