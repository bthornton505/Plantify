class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :instructions, :ingredients, :cuisine, :user_id
  belongs_to :user

end
