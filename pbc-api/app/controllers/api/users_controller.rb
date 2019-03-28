class Api::UsersController < ApplicationController
  skip_before_action :authorize_request, only: :create
  before_action :set_user, only: [:show, :update]

  def index
    @users = User.all
    render json: @users
  end

  # POST /signup
  # return authenticated token upon signup
  def create
    @user = User.create!(user_params)
    auth_token = AuthenticateUser.new(@user.email, @user.password).call
    response = { message: Message.account_created, auth_token: auth_token }
    json_response(response, :created)
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
    params.permit(:username, :email, :password, :password_confirmation)
  end

end
