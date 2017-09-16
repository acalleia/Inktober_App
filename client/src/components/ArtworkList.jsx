import React, { Component } from 'react';

import ArtworkSingle from './ArtworkSingle';

import axios from 'axios';

class ArtworkList extends Component {
  constructor() {
    super();
    this.state = {
      artworkData: null,
      artworkDataLoaded: false,
    }
  }

  componentDidMount() {
    axios('/artworks', {method: 'GET'})
      .then(res => {
        console.log(res.data.artworks);
        this.setState({
          artworkData: res.data.artworks,
          artworkDataLoaded: true,
        })
      });
  }

  showArtworks() {
    return this.state.artworkData.map(artwork => {
      return (
        <ArtworkSingle type="list" artwork={artwork} key={artwork.id} />
      )
    })
  }

  render() {
    return (
      <div className="artworklist">
        {(this.state.artworkDataLoaded) ? this.showArtworks() : <p>Loading...</p>}
      </div>
    )
  }
}

export default ArtworkList;
