class ArtworksController < ApiController
  before_action :require_login, except: [:index, :show]

  def index
    artworks = Artwork.all
    render json: { artworks: artworks }
  end

  def show
    artwork = Artwork.find(params[:id])
    artwork_user = artwork.user
    render json: { artwork: artwork, username: artwork_user.username }
  end

  def create
    artwork = Artwork.new(artwork_params)
    artwork.user = current_user

    if artwork.save
      render json: {
        message: 'ok',
        artwork: artwork,
      }
    else
      render json: { message: 'Could not post artwork' }
    end
  end

  private
  def artwork_params
    params.require(:monster).permit(:name, :description)
  end

end
