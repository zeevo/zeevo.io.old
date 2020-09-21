/** @jsx jsx */
import { useState } from 'react';
import Helmet from 'react-helmet';
import { NavLink, IconButton, jsx } from 'theme-ui';
import { useStaticQuery, graphql, Link } from 'gatsby';

import ColorModeToggle from './ColorModeToggle';

import '../assets/scss/init.scss';
import './style/links.scss';
import './style/feed.scss';
import '../assets/fonts/fontello-771c82e0/css/fontello.css';
import Curtain from './Curtain';

const isExternal = path => path.startsWith('http');

function Layout(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const menu = site.siteMetadata.menu.map(item => {
    if (isExternal(item.path)) {
      return (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={item.path}
          sx={{
            color: 'text',
            '@media screen and (max-width: 724px)': {
              display: 'none',
            },
          }}
        >
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
      <Link
        to={item.path}
        sx={{
          '@media screen and (max-width: 724px)': {
            display: 'none',
          },
        }}
      >
        <NavLink
          sx={{
            color: 'text',
          }}
        >
          {item.label}
        </NavLink>
      </Link>
    );
  });

  return (
    <div sx={{ mx: 3 }}>
      <Curtain onClose={() => setMobileMenuOpen(false)} isOpen={mobileMenuOpen}>
        {menu}
      </Curtain>
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
          }}
        >
          <Link to="/">
            <NavLink
              sx={{
                color: 'text',
              }}
            >
              @zeevosec
            </NavLink>
          </Link>

          {menu}
          <ColorModeToggle
            sx={{
              '@media screen and (max-width: 724px)': {
                display: 'none',
              },
            }}
          />
          <IconButton
            onClick={() => setMobileMenuOpen(true)}
            sx={{
              '@media screen and (min-width: 724px)': {
                display: 'none',
              },
            }}
          >
            <svg
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </IconButton>
        </header>
        <main
          sx={{
            width: '100%',
            flex: '1 1 auto',
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
          }}
        >
          <footer>{site.siteMetadata.copyright}</footer>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
