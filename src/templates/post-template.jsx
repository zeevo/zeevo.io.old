import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PostTemplateDetails from '../components/PostTemplateDetails';
import React from 'react';
import banner from '../assets/images/banner.jpeg';
import { graphql } from 'gatsby';

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const { title: postTitle, description: postDescription } = post.frontmatter;
    const description = postDescription !== null ? postDescription : subtitle;

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${postTitle} - ${title}`}</title>
            <meta name="description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@zeevosec" />
            <meta name="twitter:creator" content="@zeevosec" />
            <meta name="twitter:title" content={postTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={banner} />
          </Helmet>
          <PostTemplateDetails {...this.props} />
        </div>
      </Layout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        author {
          name
          twitter
        }
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
        slug
      }
      frontmatter {
        title
        tags
        date
        description
      }
    }
  }
`;
