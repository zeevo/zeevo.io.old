import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import TagTemplateDetails from '../components/TagTemplateDetails';
import banner from '../assets/images/banner.jpeg';

const TagTemplate = (props) => {
  const { title, url } = props.data.site.siteMetadata;
  const { tag } = props.pageContext;

  return (
    <Layout>
      <Helmet>
        <title>{`${tag} - ${title}`}</title>
        <meta name="description" content={`All posts tagged as ${tag}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zeevosec" />
        <meta name="twitter:creator" content="@zeevosec" />
        <meta name="twitter:title" content={`${tag} - ${title}`} />
        <meta name="twitter:description" content={`All posts tagged as ${tag}`} />
        <meta name="twitter:image" content={url + banner} />
      </Helmet>
      <TagTemplateDetails {...props} />
    </Layout>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        url
        title
        subtitle
        copyright
        menu {
          label
          path
        }
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
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { tags: { in: [$tag] }, layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
