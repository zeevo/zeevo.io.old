/** @jsx jsx */
import { jsx } from 'theme-ui';

import moment from 'moment';

import './style/author.scss';

function Author({ author, date }) {
  return (
    <div className="author">
      <div className="avatar">
        <a href={author.twitter}>
          <img
            src="/photo.png"
            sx={{
              border: '1px solid',
              display: 'inline-block',
              marginBottom: 0,
              borderRadius: '50%',
              backgroundClip: 'padding-box',
              borderColor: 'text',
            }}
            width="70"
            height="70"
            alt={author.name}
          />
        </a>
      </div>
      <div className="author-information">
        <div>
          <a className="author-link" href={author.twitter} sx={{ color: 'primary' }}>
            <strong>{author.name}</strong>
          </a>
        </div>
        {date ? (
          <div>
            <strong>{moment(date).format('D MMM YYYY')}</strong>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Author;
