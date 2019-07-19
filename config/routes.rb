Rails.application.routes.draw do

  namespace :api do
    resources :users, :recipes

    resources :recipes, only: [:edit]

    post 'signup', to: 'users#create'

    post 'auth/login', to: 'authentication#authenticate'
    get 'auth/check_token', to: 'authentication#check_token'

    post 'find_user' => 'users#find'

    get '/search_recipes', to: 'recipe_searches#search_recipes'
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
