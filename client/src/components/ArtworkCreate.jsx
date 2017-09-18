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
          type="hidden"
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
        <select
          type="text"
          name="artworkDate"
          value={props.artworkDate}
          onChange={props.handleInputChange}
        >
          <option defaultValue="" value="">Choose Date</option>
          <option value="October 1, 2017">October 1, 2017</option>
          <option value="October 2, 2017">October 2, 2017</option>
          <option value="October 3, 2017">October 3, 2017</option>
          <option value="October 4, 2017">October 4, 2017</option>
          <option value="October 5, 2017">October 5, 2017</option>
          <option value="October 6, 2017">October 6, 2017</option>
          <option value="October 7, 2017">October 7, 2017</option>
          <option value="October 8, 2017">October 8, 2017</option>
          <option value="October 9, 2017">October 9, 2017</option>
          <option value="October 10, 2017">October 10, 2017</option>
          <option value="October 11, 2017">October 11, 2017</option>
          <option value="October 12, 2017">October 12, 2017</option>
          <option value="October 13, 2017">October 13, 2017</option>
          <option value="October 14, 2017">October 14, 2017</option>
          <option value="October 15, 2017">October 15, 2017</option>
          <option value="October 16, 2017">October 16, 2017</option>
          <option value="October 17, 2017">October 17, 2017</option>
          <option value="October 18, 2017">October 18, 2017</option>
          <option value="October 19, 2017">October 19, 2017</option>
          <option value="October 20, 2017">October 20, 2017</option>
          <option value="October 21, 2017">October 21, 2017</option>
          <option value="October 22, 2017">October 22, 2017</option>
          <option value="October 23, 2017">October 23, 2017</option>
          <option value="October 24, 2017">October 24, 2017</option>
          <option value="October 25, 2017">October 25, 2017</option>
          <option value="October 26, 2017">October 26, 2017</option>
          <option value="October 27, 2017">October 27, 2017</option>
          <option value="October 28, 2017">October 28, 2017</option>
          <option value="October 29, 2017">October 29, 2017</option>
          <option value="October 30, 2017">October 30, 2017</option>
          <option value="October 31, 2017">October 31, 2017</option>
        </select>
        <select
          type="text"
          name="artworkPrompt"
          value={props.artworkPrompt}
          onChange={props.handleInputChange}
        >
          <option defaultValue="" value="">Choose Prompt</option>
          <option value="Swift">Swift</option>
          <option value="Divided">Divided</option>
          <option value="Poison">Poison</option>
          <option value="Underwater">Underwater</option>
          <option value="Long">Long</option>
          <option value="Sword">Sword</option>
          <option value="Shy">Shy</option>
          <option value="Crooked">Crooked</option>
          <option value="Screech">Screech</option>
          <option value="Gigantic">Gigantic</option>
          <option value="Run">Run</option>
          <option value="Shattered">Shattered</option>
          <option value="Teeming">Teeming</option>
          <option value="Fierce">Fierce</option>
          <option value="Mysterious">Mysterious</option>
          <option value="Fat">Fat</option>
          <option value="Graceful">Graceful</option>
          <option value="Filthy">Filthy</option>
          <option value="Cloud">Cloud</option>
          <option value="Deep">Deep</option>
          <option value="Furious">Furious</option>
          <option value="Trail">Trail</option>
          <option value="Juicy">Juicy</option>
          <option value="Blind">Blind</option>
          <option value="Ship">Ship</option>
          <option value="Squeak">Squeak</option>
          <option value="Climb">Climb</option>
          <option value="Fall">Fall</option>
          <option value="United">United</option>
          <option value="Found">Found</option>
          <option value="Mask">Mask</option>
        </select>
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