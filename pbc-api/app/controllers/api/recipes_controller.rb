class Api::RecipesController < ApplicationController

  def index
    @recipes = Recipe.all
    json_response(@recipes)
  end

  def create
    @recipe = current_user.recipes.create!(recipe_params)
    json_response(@recipe)
  end

  def show
    @recipe = current_user.recipes.find_by(id: params[:id])
    json_response(@recipe)
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy

    render json: @recipe
  end

  private

  def recipe_params
    params.permit(:title, :description, :ingredients, :cuisine, :user_id)
  end

end
