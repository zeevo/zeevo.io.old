import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import '../assets/scss/init.scss';
import './style/links.scss';
import './style/feed.scss';
import '../assets/fonts/fontello-771c82e0/css/fontello.css';

function Layout(props) {
  const { children } = props;

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);

  return (
    <>
      <div className="layout">
        <Helmet defaultTitle="zeevo | shaneoneill.io" />
        {children}
      </div>
      <footer className="footer">{site.siteMetadata.copyright}</footer>
    </>
  );
}

export default Layout;
