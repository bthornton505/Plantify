class Api::RecipesController < ApplicationController
  before_action :set_user

  def index
    @recipes = @user.recipes
    json_response(@recipes)
  end

  def create
    @recipe = current_user.recipes.create!(recipe_params)
    json_response(@recipe)
  end

  def show
    @recipe = @user.recipes.find_by(id: params[:id])
    json_response(@recipe)
  end

  def update
    @recipe = Recipe.find(id: params[:id])
    @recipe.update(recipe_params)
    json_response(@recipe)
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy

    json_response(@recipe)
  end

  private

  def set_user
    @user = current_user
  end

  def recipe_params
    params.permit(:title, :description, :instructions, :ingredients, :cuisine, :user_id)
  end

end
