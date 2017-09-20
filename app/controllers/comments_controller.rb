class CommentsController < ApiController

  def index
    artp = Artwork.find_by(id: params[:artwork_id])
    useris = User.find_by(id: params[:user_id])
    comments = Comment.where(artwork_id: params[:artwork_id])
   puts artp
   puts comments

    render json: {artp: artp, comments: comments, useris: useris}
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

  def destroy
    deleteCom = current_user.comments.find_by(user_id: params[:user_id])
    deleteCom.destroy!
  end
  

  private
  def comment_params
    params.require(:comment).permit(:comment)
  end
end
