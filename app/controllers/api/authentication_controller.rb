class Api::AuthenticationController < ApplicationController
  skip_before_action :authorize_request, only: :authenticate

  def authenticate
    auth_token =
      AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
    json_response(auth_token: auth_token)
  end

  def check_token
    @user = AuthorizeApiRequest.new(request.headers).call[:user]
    json_response(email: @user.email)
  end

  private

  def auth_params
    params.permit(:email, :password)
  end

end
