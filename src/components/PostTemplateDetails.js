/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';

import moment from 'moment';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import './style/posttemplatedetails.scss';

export default function PostTemplateDetails(props) {
  const post = props.data.mdx;
  const category = post.frontmatter.category;

  return (
    <div>
      <div>
        <h1 sx={{ mt: 0, mb: 0 }}>{post.frontmatter.title}</h1>
        <p sx={{ mt: 0, opacity: '60%' }}>
          Zeevo - Published on {moment(post.frontmatter.date).format('MMMM DD, YYYY')}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
      <div className="post-single__tags-list">
        Read more:
        <div className="post-single__tags-list-item">
          <Link
            to={`/categories/${category.toLowerCase()}`}
            className="post-single__tags-list-item-link"
            sx={{
              color: 'primary',
            }}
          >
            {category}
          </Link>
        </div>
      </div>
      <Link
        to="/"
        sx={{
          color: 'background',
          backgroundColor: 'primary',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '7.5rem',
          fontSize: '1rem',
          padding: '0 1rem',
          height: '35px',
          lineHeight: '2.1875rem',
          textAlign: 'center',
          fontWeight: 'heading',
          borderRadius: '0.1875rem',
          marginTop: '1.625rem',
        }}
      >
        Home
      </Link>
    </div>
  );
}
