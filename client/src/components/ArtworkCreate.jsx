import React from 'react';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

const ArtworkCreate = props => {
  return (
    <div className="artwork-form">
      <form>
         <label>Artwork:</label>
          {props.isUploading &&
            <p>Progress: {props.progress}</p>
          }
          <FileUploader
            accept="image/*"
            name="artworkUrl"
            storageRef={firebase.storage().ref('images')}
            onUploadStart={props.handleUploadStart}
            onUploadError={props.handleUploadError}
            onUploadSuccess={props.handleUploadSuccess}
            onProgress={props.handleProgress}
          />
      </form>
      <form onSubmit={props.handleArtworkSubmit}>
          <input
          type="text"
          name="artworkUrl"
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
      {props.artworkUrl &&
            <img src={props.artworkUrl} alt={props.artworkTitle}/>
          }
    </div>
  );
};

export default ArtworkCreate;