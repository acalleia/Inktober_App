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
          className="dropdown-select"
        > 
          <option className="dropdown-options" defaultValue="" value="">Choose Date</option>
          <option className="dropdown-options" value="October 1, 2017">October 1, 2017</option>
          <option className="dropdown-options" value="October 2, 2017">October 2, 2017</option>
          <option className="dropdown-options" value="October 3, 2017">October 3, 2017</option>
          <option className="dropdown-options" value="October 4, 2017">October 4, 2017</option>
          <option className="dropdown-options" value="October 5, 2017">October 5, 2017</option>
          <option className="dropdown-options" value="October 6, 2017">October 6, 2017</option>
          <option className="dropdown-options" value="October 7, 2017">October 7, 2017</option>
          <option className="dropdown-options" value="October 8, 2017">October 8, 2017</option>
          <option className="dropdown-options" value="October 9, 2017">October 9, 2017</option>
          <option className="dropdown-options" value="October 10, 2017">October 10, 2017</option>
          <option className="dropdown-options" value="October 11, 2017">October 11, 2017</option>
          <option className="dropdown-options" value="October 12, 2017">October 12, 2017</option>
          <option className="dropdown-options" value="October 13, 2017">October 13, 2017</option>
          <option className="dropdown-options" value="October 14, 2017">October 14, 2017</option>
          <option className="dropdown-options" value="October 15, 2017">October 15, 2017</option>
          <option className="dropdown-options" value="October 16, 2017">October 16, 2017</option>
          <option className="dropdown-options" value="October 17, 2017">October 17, 2017</option>
          <option className="dropdown-options" value="October 18, 2017">October 18, 2017</option>
          <option className="dropdown-options" value="October 19, 2017">October 19, 2017</option>
          <option className="dropdown-options" value="October 20, 2017">October 20, 2017</option>
          <option className="dropdown-options" value="October 21, 2017">October 21, 2017</option>
          <option className="dropdown-options" value="October 22, 2017">October 22, 2017</option>
          <option className="dropdown-options" value="October 23, 2017">October 23, 2017</option>
          <option className="dropdown-options" value="October 24, 2017">October 24, 2017</option>
          <option className="dropdown-options" value="October 25, 2017">October 25, 2017</option>
          <option className="dropdown-options" value="October 26, 2017">October 26, 2017</option>
          <option className="dropdown-options" value="October 27, 2017">October 27, 2017</option>
          <option className="dropdown-options" value="October 28, 2017">October 28, 2017</option>
          <option className="dropdown-options" value="October 29, 2017">October 29, 2017</option>
          <option className="dropdown-options" value="October 30, 2017">October 30, 2017</option>
          <option className="dropdown-options" value="October 31, 2017">October 31, 2017</option>
        </select>
        <select
          type="text"
          name="artworkPrompt"
          value={props.artworkPrompt}
          onChange={props.handleInputChange}
          className="dropdown-select"
        >
          <option className="dropdown-options" defaultValue="" value="">Choose Prompt</option>
          <option className="dropdown-options" value="Swift">Swift</option>
          <option className="dropdown-options" value="Divided">Divided</option>
          <option className="dropdown-options" value="Poison">Poison</option>
          <option className="dropdown-options" value="Underwater">Underwater</option>
          <option className="dropdown-options" value="Long">Long</option>
          <option className="dropdown-options" value="Sword">Sword</option>
          <option className="dropdown-options" value="Shy">Shy</option>
          <option className="dropdown-options" value="Crooked">Crooked</option>
          <option className="dropdown-options" value="Screech">Screech</option>
          <option className="dropdown-options" value="Gigantic">Gigantic</option>
          <option className="dropdown-options" value="Run">Run</option>
          <option className="dropdown-options" value="Shattered">Shattered</option>
          <option className="dropdown-options" value="Teeming">Teeming</option>
          <option className="dropdown-options" value="Fierce">Fierce</option>
          <option className="dropdown-options" value="Mysterious">Mysterious</option>
          <option className="dropdown-options" value="Fat">Fat</option>
          <option className="dropdown-options" value="Graceful">Graceful</option>
          <option className="dropdown-options" value="Filthy">Filthy</option>
          <option className="dropdown-options" value="Cloud">Cloud</option>
          <option className="dropdown-options" value="Deep">Deep</option>
          <option className="dropdown-options" value="Furious">Furious</option>
          <option className="dropdown-options" value="Trail">Trail</option>
          <option className="dropdown-options" value="Juicy">Juicy</option>
          <option className="dropdown-options" value="Blind">Blind</option>
          <option className="dropdown-options" value="Ship">Ship</option>
          <option className="dropdown-options" value="Squeak">Squeak</option>
          <option className="dropdown-options" value="Climb">Climb</option>
          <option className="dropdown-options" value="Fall">Fall</option>
          <option className="dropdown-options" value="United">United</option>
          <option className="dropdown-options" value="Found">Found</option>
          <option className="dropdown-options" value="Mask">Mask</option>
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