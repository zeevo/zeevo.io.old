/** @jsx jsx */
import moment from 'moment';
import { jsx } from 'theme-ui';
import Link from './Link';
import './style/post.scss';

const Post = function Post(props) {
  const { title, date, category, path } = props.data.node.frontmatter;
  const { timeToRead } = props.data.node;

  return (
    <div className="post">
      <h3 className="post__title" sx={{ lineHeight: 1 }}>
        <Link
          className="post__title-link"
          to={path}
          sx={{
            color: 'text',
            // fontWeight: 'heading',
            '&:hover': {
              color: 'primary',
            },
          }}
        >
          {title}
        </Link>
      </h3>
      <div className="post__meta">
        <time className="post__meta-time" dateTime={moment(date).format('MMMM D, YYYY')}>
          {moment(date).format('MMMM YYYY')} | {timeToRead} Minute read
        </time>
        <span className="post__meta-divider" />
        <span className="post__meta-category" key={category}>
          <Link
            to={`/categories/${category.toLowerCase()}`}
            className="post__meta-category-link"
            sx={{ color: 'primary' }}
          >
            {category}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Post;
