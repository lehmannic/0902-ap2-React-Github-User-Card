import React from 'react';

const Followers = (props) => {
  console.log(props);
  if (props.followers.length === 0) {
    return <p>No Followers :( </p>;
  }
  return (
    <div className='followers-list container'>
      {props.followers.map((follower) => {
        return (
          <div className='follower-card'>
            <h4>{follower.login}</h4>
            <img src={follower.avatar_url} />
          </div>
        );
      })}
    </div>
  );
};

export default Followers;
