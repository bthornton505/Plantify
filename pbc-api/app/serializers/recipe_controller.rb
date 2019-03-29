class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :ingredients, :cuisine, :user_id
  belongs_to :user

end
