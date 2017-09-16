import React from 'react';

const Artwork = (props) => {
  console.log(props.artwork);
  return (
    <div className={`artwork-${props.type}`}>
      <img src="{props.artwork.url} "/>
      <h3>{props.artwork.title}</h3>
      <p>{props.artwork.prompt}</p>
      <p>{props.artwork.desc}</p>
      {(props.artwork.username) ? <p className="user">{props.artwork.username}</p> : '' }
    </div>
  );
}

export default Artwork;