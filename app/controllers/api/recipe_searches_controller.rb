class Api::RecipeSearchesController < ApplicationController

  def search_recipes
    recipes = Faraday.new(:url => "https://api.edamam.com/search")

    recipe_list = recipes.get do |req|
      req.headers['Content-Type'] = 'application/json'
      req.params['app_id'] = 0b23002f
      req.params['app_key'] = 9c9063c20f199397dff81682d9cc4e26
      req.params['']
    end
    recipe_hash = JSON.parse(recipe_list.body)

    render json: { recipes: recipe_hash }
  end

end
