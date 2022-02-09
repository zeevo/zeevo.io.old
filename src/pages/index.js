/** @jsx jsx */
import { jsx } from 'theme-ui';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/Feed';
import BorderedBox from '../components/BorderedBox';
import PageHeader from '../components/PageHeader';
import Link from '../components/Link';

import { useSiteMetadata } from '../hooks';

import banner from '../assets/images/banner.jpeg';
import Projects from '../components/Projects';

const Index = function Index({ data }) {
  const siteMetadata = useSiteMetadata();
  const { title, subtitle, url, author, projects } = siteMetadata;
  const posts = data.allMdx.edges;

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
      <PageHeader>
        I build things with computer code.{' '}
        <Link
          to="/contact"
          sx={{
            color: 'text',
            textDecoration: 'underline',
            '&:hover': {
              color: 'primary',
            },
          }}
        >
          Need something built?
        </Link>
      </PageHeader>
      <BorderedBox>
        <h2
          sx={{
            marginTop: 0,
            marginBottom: 3,
          }}
        >
          Recent Posts
        </h2>
        <Feed posts={posts} author={author} subtitle={subtitle} />
        <Link to="/posts">All Posts</Link>
      </BorderedBox>
      <BorderedBox>
        <h2
          sx={{
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          Follow me on Twitter <Link to={author.socials.twitter.url}>@zeevosec</Link>
        </h2>
      </BorderedBox>
      <BorderedBox st={{ marginTop: 3 }}>
        <h2
          sx={{
            marginTop: 0,
            marginBottom: 3,
          }}
        >
          Projects
        </h2>
        <Projects projects={projects} reduced />
      </BorderedBox>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    allMdx(
      limit: 3
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
