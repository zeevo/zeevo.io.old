/** @jsx jsx */
import Helmet from 'react-helmet';
import { NavLink, jsx } from 'theme-ui';
import { useStaticQuery, graphql, Link } from 'gatsby';

import ColorModeToggle from './ColorModeToggle';

import '../assets/scss/init.scss';
import './style/links.scss';
import './style/feed.scss';
import '../assets/fonts/fontello-771c82e0/css/fontello.css';

const isExternal = path => path.startsWith('http');

function Layout(props) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copyright
          menu {
            label
            path
          }
        }
      }
    }
  `);

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        maxWidth: '42rem',
        margin: 'auto',
      }}
    >
      <Helmet defaultTitle="zeevo | shaneoneill.io" />
      <header
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          variant: 'layout.header',
          py: 2,
          mx: 2,
        }}
      >
        {site.siteMetadata.menu.map(item => {
          if (isExternal(item.path)) {
            return (
              <a rel="noopener noreferrer" target="_blank" href={item.path} sx={{ color: 'text' }}>
                <NavLink
                  sx={{
                    color: 'text',
                  }}
                >
                  {item.label}
                </NavLink>
              </a>
            );
          }
          return (
            <Link to={item.path}>
              <NavLink
                sx={{
                  color: 'text',
                }}
              >
                {item.label}
              </NavLink>
            </Link>
          );
        })}
        <ColorModeToggle />
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
          mx: 2,
        }}
      >
        <div
          sx={{
            mx: 'auto',
            py: 3,
          }}
        >
          {props.children}
        </div>
      </main>
      <footer
        sx={{
          width: '100%',
          mx: 2,
        }}
      >
        <footer>{site.siteMetadata.copyright}</footer>
      </footer>
    </div>
  );
}

export default Layout;
