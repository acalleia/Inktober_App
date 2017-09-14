import React, { Component } from 'react';

import axios from 'axios';

import Auth from '../modules/Auth';

import ArtworkSingle from './ArtworkSingle';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      userData: null,
      userDataLoaded: false,
      userArtworks: null,
      userArtworksLoaded: false,
    }
  }

  componentDidMount() {
    this.props.resetFireRedirect()
    axios('/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: `${Auth.getToken()}`,
      }
    }).then(res => {
      this.setState({
        userData: res.data.user,
        userDataLoaded: true,
        userArtworks: res.data.artworks,
        userArtworksLoaded: true,
      })
    })
  }

  render() {
    return (
      <div className="dash">
        {(this.state.userArtworksLoaded) ? this.state.userArtworks.map(artwork => {
          return <ArtworkSingle key={artwork.id} type="dash" artwork={artwork} />
        }) : <p>Loading...</p>}
      </div>
    );
  }
}

export default Dashboard;
