Rails.application.routes.draw do
  root to: "root#index"
  post   "/login"       => "sessions#create"
  delete "/logout"      => "sessions#destroy"
  get "/profile"        => "users#profile"
  resources :users
  resources :artworks do
    resources :comments
  end
end
