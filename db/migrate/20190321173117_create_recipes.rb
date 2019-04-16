class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.text :title
      t.text :description
      t.text :instructions
      t.string :ingredients, array: true
      t.string :cuisine
      t.integer :user_id

      t.timestamps
    end
  end
end
