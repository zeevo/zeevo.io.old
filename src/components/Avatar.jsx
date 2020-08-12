import React from 'react';
import './style/avatar.scss';

function Avatar({ author, subtitle }) {
  return (
    <div className="avatar-badge">
      <div className="avatar-badge-avatar">
        <a href={author.twitter}>
          <img src="/photo.png" className="avatar-badge-img" width="70" height="70" alt={author.name} />
        </a>
      </div>
      <div className="avatar-badge-information">
        <span style={{ fontWeight: 'bold' }}>{author.name}</span>
        <div style={{ fontStyle: 'italic' }}>{subtitle}</div>
      </div>
    </div>
  );
}

export default Avatar;
