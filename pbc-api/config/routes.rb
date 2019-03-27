Rails.application.routes.draw do

  namespace :api do
    resources :users, :recipes
    get 'auth' => 'auth#auth'
    post 'user_token' => 'user_token#create'
    post 'find_user' => 'users#find'
  end

end
