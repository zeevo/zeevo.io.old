/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import './style/posttemplatedetails.scss';
import Author from './Author';

class PostTemplateDetails extends React.Component {
  render() {
    const { author } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const tags = post.fields.tagSlugs;

    return (
      <div>
        <Link
          className="post-single__home-button"
          to="/"
          sx={{ color: 'background', backgroundColor: 'primary', fontWeight: '700' }}
        >
          All Articles
        </Link>
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <Author author={author} date={post.frontmatter.date} />
            <div
              className="post-single__body"
              sx={{
                '& a': {
                  color: 'primary',
                },
              }}
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
          <div className="post-single__footer">
            <div className="post-single__tags">
              <ul className="post-single__tags-list">
                Read more:
                {tags &&
                  tags.map((tag, i) => (
                    <li className="post-single__tags-list-item" key={tag}>
                      <Link
                        to={tag}
                        className="post-single__tags-list-item-link"
                        sx={{
                          color: 'primary',
                        }}
                      >
                        {post.frontmatter.tags[i]}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <Author author={author} date={post.frontmatter.date} />
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
        </div>
      </div>
    );
  }
}

export default PostTemplateDetails;
