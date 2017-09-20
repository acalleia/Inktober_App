class Artwork < ApplicationRecord
  
  belongs_to :user
  has_many :favorites
  has_many :users, through: :favorites
  has_many :comments
  has_many :users, through: :comments
end
