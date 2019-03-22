Rails.application.routes.draw do

  namespace :api do
    recources :users
    post 'user_token' => 'user_token#create'
    post 'find_user' => 'users#find'
  end

end
