class UsersController < ApiController
  before_action :require_login, except: [:create]

  def create
    user = User.create!(user_params)
    render json: { token: user.auth_token }
  end

  def profile
    user = User.find_by_auth_token!(request.headers[:token])
    user_artworks = Artwork.where(user_id: user.id)
    render json: { 
      user: { username: user.username, email: user.email, first_name: user.first_name, last_name: user.last_name },
      artworks: user_artworks,
    }
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :first_name, :last_name)
  end
  
end
