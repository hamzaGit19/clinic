# Client endpoints
class ClientsController < ApplicationController
  skip_before_filter :authenticate_user!
  # before_filter :authenticate_user!

  def show
    users = User.all
    render json: users
  end

  def create
    user = User.find_by(email: user_params[:email])

    if !user
      user = User.new(user_params, role: 'client')
      user.role = 'client'
      user.skip_password_validation = true
      user.save!
    end

    if user
      render json: user
    end
  end

  def user_params
    params.require(:user).permit(:name, :email, :phone_number)
  end
end
