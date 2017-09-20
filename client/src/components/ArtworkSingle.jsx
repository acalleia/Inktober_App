import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../modules/Auth';
import axios from 'axios';

class Artwork extends Component{
  constructor(){
    super();

    this.deleteArtwork = this.deleteArtwork.bind(this);
  }


  deleteArtwork(id) {
    console.log(id);
    axios(`/artworks/${this.props.artwork.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
      }
    })
  }

  render() {
  return (
      <div className="ind-artwork">
        <Link to={`/artworks/${this.props.artwork.id}/comments`}>
          <img 
           className="image"
           onClick={() => 
           this.props.handleComments(this.props.artwork.id)}
          src={this.props.artwork.url} alt={this.props.artwork.title}
          alt="{this.props.title}" value={this.props.artwork.id}
          />
          </Link>
          <h3>{this.props.artwork.title}</h3>
          <p>Prompt: {this.props.artwork.prompt}</p>
          <p>Desciption: {this.props.artwork.description}</p>
          {(this.props.artwork.username) ? <p className="user">{this.props.artwork.username}</p> : '' } 
          
          {/* <a
            onClick={() => 
              this.deleteArtwork(this.props.artwork.id)}
            >Delete
          </a> */}
      </div>
    );
  }
}

export default Artwork;