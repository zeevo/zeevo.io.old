import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';

function Tags(props) {
  const { title } = props.data.site.siteMetadata;
  const tags = props.data.allMarkdownRemark.group;

  return (
    <Layout>
      <Helmet title={`All Tags - ${title}`} />
      <h1 className="page__title">Tags</h1>
      <ul className="tags__list">
        {tags.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Tags;

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
