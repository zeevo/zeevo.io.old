/** @jsx jsx */
import { jsx } from 'theme-ui';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/Feed';

import { useSiteMetadata } from '../hooks';

import banner from '../assets/images/banner.jpeg';
import PageHeader from '../components/PageHeader';
import BorderedBox from '../components/BorderedBox';

const Index = function Index(props) {
  const siteMetadata = useSiteMetadata();
  const { title, subtitle, url, author } = siteMetadata;
  const posts = props.data.allMdx.edges;

  return (
    <Layout isHomePage>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={subtitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zeevosec" />
        <meta name="twitter:creator" content="@zeevosec" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={subtitle} />
        <meta name="twitter:image" content={url + banner} />
        <html lang="en" />
      </Helmet>
      <PageHeader>Posts</PageHeader>
      <BorderedBox st={{ marginTop: 3, marginBottom: 3 }}>
        <Feed posts={posts} author={author} subtitle={subtitle} />
      </BorderedBox>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        url
        title
        subtitle
        copyright
        profilePic
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
            discord {
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
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
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
