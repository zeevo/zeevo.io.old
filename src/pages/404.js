import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundRoute = function NotFoundRoute() {
  return (
    <Layout>
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">NOT FOUND</h1>
            <div className="page__body">
              <p>That page does not.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundRoute;

export const pageQuery = graphql`
  query NotFoundQuery {
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
            discord {
              name
              url
            }
          }
          rss
        }
      }
    }
  }
`;
