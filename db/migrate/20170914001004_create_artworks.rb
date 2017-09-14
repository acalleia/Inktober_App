class CreateArtworks < ActiveRecord::Migration[5.1]
  def change
    create_table :artworks do |t|
      t.string :url
      t.string :title
      t.string :description
      t.string :date
      t.string :prompt
      t.belongs_to :user

      t.timestamps
    end
  end
end
