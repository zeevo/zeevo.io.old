import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import CategoryTemplateDetails from '../components/CategoryTemplateDetails';
import banner from '../assets/images/banner.jpeg';

const CategoryTemplate = function CategoryTemplate(props) {
  const { title, url } = props.data.site.siteMetadata;
  const { category } = props.pageContext;

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>{`${category} - ${title}`}</title>
        <meta name="description" content={`All posts in category ${category}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zeevosec" />
        <meta name="twitter:creator" content="@zeevosec" />
        <meta name="twitter:title" content={`${category} - ${title}`} />
        <meta name="twitter:description" content={`All posts in category ${category}`} />
        <meta name="twitter:image" content={url + banner} />
      </Helmet>
      <CategoryTemplateDetails {...props} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query CategoryPage($category: String) {
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
          rss
        }
      }
    }
    allMdx(
      limit: 1000
      filter: { frontmatter: { category: { eq: $category }, draft: { ne: true } } }
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
            path
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
