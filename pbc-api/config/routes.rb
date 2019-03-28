Rails.application.routes.draw do

  namespace :api do
    resources :users, :recipes
    post 'signup', to: 'users#create'
    post 'auth/login', to: 'authentication#authenticate'
    post 'find_user' => 'users#find'
  end

end
