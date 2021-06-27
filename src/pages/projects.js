/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import banner from '../assets/images/banner.jpeg';

import '../components/style/pagetemplatedetails.scss';
import useSiteMetadata from '../hooks/use-site-metadata';

function Projects() {
  const siteMetadata = useSiteMetadata();
  const { theme } = useThemeUI();
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
          {/* <h1 className="page__title">{pageTitle}</h1> */}
          <ul
            sx={{
              listStyle: 'none',
              paddingLeft: 0,
              flexDirection: 'column',
            }}
          >
            {projects.map((project) => (
              <li>
                <a
                  href={project.href}
                  sx={{
                    border: `2px solid ${theme.colors.text}`,
                    paddingLeft: '1rem',
                    height: '2.1875rem',
                    lineHeight: '2.1875rem',
                    width: '100%',
                    display: 'inline-block',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: 'text',
                    '&:hover': {
                      backgroundColor: 'primary',
                      color: 'muted',
                    },
                    cursor: 'pointer',
                  }}
                >
                  {project.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
