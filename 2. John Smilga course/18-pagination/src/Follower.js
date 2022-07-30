import React from 'react';

const Follower = ({ data }) => {
  return (
    <article className="card">
      <img src={data.avatar_url} alt={data.login} />
      <h4>{data.login}</h4>
      <a href={data.html_url} className="btn">view profile</a>
    </article>
  );
}

export default Follower;
