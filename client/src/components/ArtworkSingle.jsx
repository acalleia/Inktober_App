import React, { Component } from 'react';

class Artwork extends Component{
  constructor(){
    super();
  }

  render() {
  return (
      <div className="ind-artwork">
        <img src={this.props.artwork.url} alt={this.props.artwork.title} />
        <h3>{this.props.artwork.title}</h3>
        <p>{this.props.artwork.prompt}</p>
        <p>{this.props.artwork.desciption}</p>
        {(this.props.artwork.username) ? <p className="user">{this.props.artwork.username}</p> : '' }
      </div>
    );
  }
}

export default Artwork;