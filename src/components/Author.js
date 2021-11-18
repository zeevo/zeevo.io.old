/** @jsx jsx */
import moment from 'moment';
import { jsx } from 'theme-ui';
import './style/author.scss';

function Author({ author, date }) {
  return (
    <div className="author">
      <div className="avatar">
        <a href={author.socials.twitter.url}>
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
          <a
            className="author-link"
            href={author.socials.twitter.url}
            sx={{ color: 'primary', fontWeight: 'heading' }}
          >
            {author.name}
          </a>
        </div>
        {date ? (
          <div sx={{ fontWeight: 'heading' }}>{moment(date).format('MMMM DD, YYYY')}</div>
        ) : null}
      </div>
    </div>
  );
}

export default Author;
