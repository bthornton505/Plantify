class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update]

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create(user_params)
    if @user.valid? && @user.save
      render json: @user
    else
      render json: @user.errors, status: 400
    end
  end

  def show
    render json: @user
  end

  def find
    @user = User.find_by(email: params[:user][:email])
    if @user
      render json: @user
    else
      @errors = @user.errors.full_messages
      render json: @errors
    end
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
