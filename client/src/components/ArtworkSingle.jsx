import React from 'react';

const Artwork = (props) => {
  return (
    <div className={`artwork-${props.type}`}>
      <img src={props.artwork.url} alt={props.artwork.title} />
      <h3>{props.artwork.title}</h3>
      <p>{props.artwork.prompt}</p>
      <p>{props.artwork.desciption}</p>
      {(props.artwork.username) ? <p className="user">{props.artwork.username}</p> : '' }
    </div>
  );
}

export default Artwork;