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
          sx={{ color: 'background', backgroundColor: 'primary' }}
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
            <div className="post-single__date">
              <em>Published {moment(post.frontmatter.date).format('D MMM YYYY')}</em>
            </div>
          </div>
          <div className="post-single__footer">
            <div className="post-single__tags">
              <ul className="post-single__tags-list">
                {tags &&
                  tags.map((tag, i) => (
                    <li className="post-single__tags-list-item" key={tag}>
                      <Link to={tag} className="post-single__tags-list-item-link">
                        {post.frontmatter.tags[i]}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <hr />
            <Author author={author} date={post.frontmatter.date} />
          </div>
        </div>
      </div>
    );
  }
}

export default PostTemplateDetails;
