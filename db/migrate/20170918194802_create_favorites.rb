class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.integer :user_id
      t.integer :artwork_id

      t.timestamps
    end

    add_index :favorites, :user_id
    add_index :favorites, :artwork_id
  end
end
