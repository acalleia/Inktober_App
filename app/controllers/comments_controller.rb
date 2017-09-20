class CommentsController < ApiController

  def index
    artp = Artwork.find_by(id: params[:artwork_id])
    comments = Comment.where(artwork_id: params[:artwork_id])
   puts artp
   puts comments

    render json: {artp: artp, comments: comments}
  end

  def create
    comment = Comment.new(comment_params)
    comment.user = current_user
    comment.artwork = Artwork.find_by(id: params[:artwork_id])

    if comment.save
      render json: {
        message: 'ok',
        comment: comment,
      }
    else
      render json: { message: 'Could not post comment' }
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:comment)
  end
end
