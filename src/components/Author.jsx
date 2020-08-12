import React from 'react';
import moment from 'moment';

import './style/author.scss';

function Author({ author, date }) {
  return (
    <div className="author">
      <div className="avatar">
        <a href={author.twitter}>
          <img src="/photo.png" className="avatar-img" width="70" height="70" alt={author.name} />
        </a>
      </div>
      <div className="author-information">
        <div>
          <a className="author-link" href={author.twitter}>
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
