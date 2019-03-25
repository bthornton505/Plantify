class RecipeController < ApplicationController
  before_action :authenticate_user, only: [:create, :update, :edit, :destroy]

  def index
    @recipes = Recipe.all
    render json: @recipes
  end

  def create
    @recipe = Recipe.create(recipe_params)
    if @recipe.save
      render json: @recipe
    else
      render json: @recipe.errors, status: 400
    end
  end

  def show
    @recipe = Recipe.find_by(id: params[:id])
    render json: @recipe
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :description, :ingredients, :cuisine, :user_id)
  end

end
