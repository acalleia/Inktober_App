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

  def destroy
    delArtwork = current_user.artworks.find(params[:id])
    delAwork.destroy!
  end

  private
  def artwork_params
    params.require(:artwork).permit(:url, :title, :description, :date, :prompt)
  end

end
