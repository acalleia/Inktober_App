import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Artwork extends Component{
  constructor(){
    super();

  }

  componentDidMount(){
    console.log(this.props.artwork.id)
  }

  render() {
  return (
      <div className="ind-artwork">
        <Link to={`/artworks/${this.props.artwork.id}/comments`}>
          <img 
           onClick={() => 
           this.props.handleComments(this.props.artwork.id)}
          src={this.props.artwork.url} alt={this.props.artwork.title}
          alt={this.props.title} value={this.props.artwork.id}
          />
          </Link>
          <h3>{this.props.artwork.title}</h3>
          <p>Prompt: {this.props.artwork.prompt}</p>
          <p>Desciption: {this.props.artwork.description}</p>
          {(this.props.artwork.username) ? <p className="user">{this.props.artwork.username}</p> : '' } 
      </div>
    );
  }
}

export default Artwork;