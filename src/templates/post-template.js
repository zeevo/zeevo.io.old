import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostTemplateDetails from '../components/PostTemplateDetails';
import banner from '../assets/images/banner.jpeg';

const PostTemplate = function PostTemplate(props) {
  const { title, subtitle, url } = props.data.site.siteMetadata;
  const post = props.data.mdx;
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
        <PostTemplateDetails {...props} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PostByPath($id: String!) {
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
    mdx(id: { eq: $id }) {
      id
      body
      tableOfContents
      frontmatter {
        title
        tags
        category
        date
        description
      }
    }
  }
`;

export default PostTemplate;
