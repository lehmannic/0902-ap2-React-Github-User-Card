import React from 'react';

const User = (props) => {
  return (
    <div className='user-card container'>
      <img src={props.user.avatar_url} />
      <h1>{props.user.name}</h1>
      <p>Location: {props.user.location}</p>
      <p>Followers: {props.user.followers}</p>
      <p>Following: {props.user.following}</p>
    </div>
  );
};

export default User;
