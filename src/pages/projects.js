/** @jsx jsx */
import Helmet from 'react-helmet';
import { jsx } from 'theme-ui';
import React from 'react';
import banner from '../assets/images/banner.jpeg';
import Layout from '../components/Layout';
import ProjectLink from '../components/ProjectLink';
import '../components/style/pagetemplatedetails.scss';
import { useSiteMetadata } from '../hooks';

function Projects() {
  const siteMetadata = useSiteMetadata();
  const { title, subtitle, url, projects } = siteMetadata;

  const pageTitle = 'Projects';
  const description = 'Projects I have written entirely or have contributed to at a great extent';

  return (
    <Layout>
      <div>
        <Helmet>
          <html lang="en" />
          <title>{`${pageTitle} - ${title}`}</title>
          <meta name="description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@zeevosec" />
          <meta name="twitter:creator" content="@zeevosec" />
          <meta name="twitter:title" content={`${pageTitle} - ${title}`} />
          <meta name="twitter:description" content={subtitle} />
          <meta name="twitter:image" content={url + banner} />
        </Helmet>
        <div>
          <ul
            sx={{
              listStyle: 'none',
              paddingLeft: 0,
              flexDirection: 'column',
            }}
          >
            {projects.map((project) => (
              <li key={project.href}>
                <ProjectLink project={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
