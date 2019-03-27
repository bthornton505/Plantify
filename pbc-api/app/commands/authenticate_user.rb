class AuthenticateUser
  prepend SimpleCommand

  def initialize(username, email, password)
    @username = username
    @email = email
    @password = password
  end

  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :username, :email, :password

  def user
    user = User.find_by_email(email)
    return user if user && user.authenticate(password)

    errors.add :user_authentication, 'invalide credentials'
    nil
  end

end
