Rails.application.routes.draw do

  namespace :api do
    resources :users, :recipes
    post 'user_token' => 'user_token#create'
    post 'find_user' => 'users#find'
  end

end
