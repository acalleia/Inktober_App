import React from 'react';

import { Redirect } from 'react-router-dom';

const ArtworkCreate = props => {
  return (
    <div className="artwork-form">
      <form onSubmit={props.handleArtworkSubmit}>
        <input
          type="text"
          name="artworkUrl"
          placeholder="image"
          value={props.artworkUrl}
          onChange={props.handleInputChange}
        />
        <input
          type="text"
          name="artworkTitle"
          placeholder="Title"
          value={props.artworkTitle}
          onChange={props.handleInputChange}
        />
        <input
          type="text"
          name="artworkDescription"
          placeholder="Description"
          value={props.artworkDescription}
          onChange={props.handleInputChange}
        />
        <input
          type="text"
          name="artworkDate"
          placeholder="Date"
          value={props.artworkDate}
          onChange={props.handleInputChange}
        />
        <input
          type="text"
          name="artworkPrompt"
          placeholder="Prompt"
          value={props.artworkPrompt}
          onChange={props.handleInputChange}
        />
        <input type="submit" value="Post artwork" />
      </form>
      {(props.shouldFireRedirect) ? <Redirect to="/dashboard" />: ''}
    </div>
  );
};

export default ArtworkCreate;