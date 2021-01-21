/** @jsx jsx */
import { useState } from 'react';
import Helmet from 'react-helmet';
import { jsx, Flex, useThemeUI } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';

import ColorModeToggle from './ColorModeToggle';
import Curtain from './Curtain';
import CurtainLink from './CurtainLink';
import MenuButton from './MenuButton';
import HomeButton from './HomeButton';

import '../assets/scss/init.scss';
import '../assets/fonts/fontello-771c82e0/css/fontello.css';

function Layout(props) {
  const { colorMode } = useThemeUI();
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

  const menu = site.siteMetadata.menu;

  return (
    <div
      sx={{
        mx: 3,
        ...(colorMode === 'cyber' && { fontFamily: "'Roboto Mono', monospace !important" }),
      }}
    >
      <Curtain onClose={() => setMobileMenuOpen(false)} isOpen={mobileMenuOpen}>
        {menu.map((item) => (
          <CurtainLink key={`${item.label}${item.path}`} label={item.label} href={item.path} />
        ))}
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
        <Helmet defaultTitle="zeevo.io" />
        <header
          sx={{
            width: '100%',
            variant: 'layout.header',
            py: 3,
          }}
        >
          {/** NavBar */}
          <nav
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              variant: 'nav',
              '@media screen and (max-width: 724px)': {
                display: 'none',
              },
            }}
          >
            <HomeButton />
            {menu.map((item) => (
              <CurtainLink key={`${item.label}${item.path}`} label={item.label} href={item.path} />
            ))}
            <ColorModeToggle />
          </nav>

          {/** NavBar Menu */}
          <nav
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              as: 'nav',
              '@media screen and (min-width: 724px)': {
                display: 'none',
              },
            }}
          >
            <Flex sx={{ flex: 1 }}>
              <HomeButton />
            </Flex>
            <Flex sx={{ flex: 1, justifyContent: 'center' }}>
              <ColorModeToggle />
            </Flex>
            <Flex sx={{ flex: 1, justifyContent: 'flex-end' }}>
              <MenuButton onClick={() => setMobileMenuOpen(true)} />
            </Flex>
          </nav>
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
