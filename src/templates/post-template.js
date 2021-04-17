import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostTemplateDetails from '../components/PostTemplateDetails';
import banner from '../assets/images/banner.jpeg';

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle, url } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const { title: postTitle, description: postDescription } = post.frontmatter;
    const description = postDescription !== null ? postDescription : subtitle;

    return (
      <Layout>
        <div>
          <Helmet>
            <html lang="en" />
            <title>{`${postTitle} - ${title}`}</title>
            <meta name="description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@zeevosec" />
            <meta name="twitter:creator" content="@zeevosec" />
            <meta name="twitter:title" content={postTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={url + banner} />
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
        url
        title
        subtitle
        copyright
        author {
          name
          socials {
            twitter {
              name
              url
            }
            github {
              name
              url
            }
          }
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
