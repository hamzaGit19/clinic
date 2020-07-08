# Client endpoints
class UsersController < ApplicationController
	skip_before_filter :authenticate_user!
	# before_filter :authenticate_user!

	def show
		users = User.all
		render json: users
	end

	def create
		user = User.new(user_params)
	end

	def user_params
    params.require(:user).permit(:name, :email, :phone_number)
	end
end
