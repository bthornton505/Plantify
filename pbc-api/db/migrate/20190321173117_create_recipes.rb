class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.text :title
      t.text :description
      t.string :ingredients, array: true, default: []
      t.string :cuisine
      t.integer :user_id

      t.timestamps
    end
  end
end
