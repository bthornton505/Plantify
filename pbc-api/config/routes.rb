Rails.application.routes.draw do

  namespace :api do
    resources :users, :recipes
    # get 'auth' => 'auth#auth'
    post 'authenticate', to: 'authentication#authenticate'
    post 'find_user' => 'users#find'
  end

end
