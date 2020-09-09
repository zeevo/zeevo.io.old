/** @jsx jsx */
import { jsx } from 'theme-ui';

import './style/avatar.scss';

function Avatar({ author, subtitle }) {
  return (
    <div className="avatar-badge">
      <div className="avatar-badge-avatar">
        <a href={author.twitter}>
          <img
            src="/photo.png"
            className="avatar-badge-img"
            width="70"
            height="70"
            alt={author.name}
            sx={{
              border: '1px solid',
              marginBottom: 0,
              borderRadius: '50%',
              backgroundClip: 'padding-box',
              color: 'text',
            }}
          />
        </a>
      </div>
      <div className="avatar-badge-information">
        <span sx={{ fontWeight: 'bold' }}>{author.name}</span>
        <div sx={{ fontStyle: 'italic' }}>{subtitle}</div>
      </div>
    </div>
  );
}

export default Avatar;
