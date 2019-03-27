class User < ApplicationRecord
  has_secure_password
  has_many :recipes
  has_many :comments

  validates :username, uniqueness: true
  validates :email, uniqueness: true

end
