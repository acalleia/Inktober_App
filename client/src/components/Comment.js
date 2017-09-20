import React, { Component } from 'react';
import axios from 'axios';

import Auth from '../modules/Auth';

class Comments extends Component{
  constructor(){
    super();
    this.state = {
      comment: '',
      artworkImage: '',
      commentDataLoaded: false,
    }


    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentDidMount() {
    axios(`/artworks/${this.props.artworkData.id}/comments`, {
      method: 'GET'})
      .then(res => {
        console.log(res)
        this.setState({
          artworkImage: res.data.artp,
          comment: res.data.comments,
          commentDataLoaded: true 
    })
        console.log(this.state.comment)
   })
  }

   handleCommentSubmit(e) {
    e.preventDefault();
    axios(`/artworks/${this.props.artworkData.id}/comments`, {
       method: 'POST',
      data: {
        comment: {
          comment: this.props.comment,
        }
      },
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
      }
    }).then(
      axios(`/artworks/${this.props.artworkData.id}/comments`, {
      method: 'GET'})
      .then(res => {
        const spread = {...this.state.artworkComments}
        console.log(spread)
        console.log(res)
        this.setState({
          artworkImage: res.data.artp,
          artworkComments: res.data.artworkComments,
          commentDataLoaded: true,
        })
      })
    ).then(res => {
      this.setState({
        shouldFireRedirect: true,
      });
    }).catch(err => {
      console.log(err);
    });
  }


  render() {
  return (
       <div className="ind-artwork">
        <img src={this.state.artworkImage.url} alt={this.state.artworkImage.title} />
        <h3>{this.state.artworkImage.title}</h3>
        <p>Prompt: {this.state.artworkImage.prompt}</p>
        <p>Desciption: {this.state.artworkImage.description}</p>
        {(this.state.artworkImage.username) ? <p className="user">{this.state.artworkImage.username}</p> : '' }
        {(this.state.commentDataLoaded) ? 
        <div>
        {this.state.comment
          .map((comments) => {
            console.log(this.state.comments)
            return <p key={comments.id}>{comments.comment}</p>
            })}
        </div>
       : <p>Loading...</p>}
        <form onSubmit={this.handleCommentSubmit}>
          <input
          type="text"
          name="comment"
          placeholder="Comment"
          value={this.props.comment}
          onChange={this.props.handleInputChange}
        />
        <input type="submit" value="Post" />
        </form>
      </div>
  )
  }
}

export default Comments;


