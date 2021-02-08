/** @jsx jsx */
import { useState } from 'react';
import Helmet from 'react-helmet';
import { jsx, Flex, useThemeUI } from 'theme-ui';
import { Link } from 'gatsby';

import ColorModeToggle from './ColorModeToggle';
import Curtain from './Curtain';
import CurtainLink from './CurtainLink';
import MenuButton from './MenuButton';
import HomeButton from './HomeButton';

import useSiteMetadata from '../hooks/use-site-metadata';

import '../assets/scss/init.scss';
import '../assets/fonts/fontello-771c82e0/css/fontello.css';

function Layout(props) {
  const { isHomePage, pageName } = props;

  const { theme, colorMode } = useThemeUI();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const siteMetadata = useSiteMetadata();

  const menu = siteMetadata.menu;

  const titleStyles = {
    fontSize: '18px',
    fontWeight: 700,
    color: theme.colors.text,
    my: 0,
    lineHeight: 1.65,
    '&:hover': {
      color: 'primary',
    },
  };

  const titleCard = isHomePage ? (
    <h1 sx={{ ...titleStyles }}>Zeevo.io</h1>
  ) : (
    <h4 sx={titleStyles}>Zeevo.io</h4>
  );

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
          maxWidth: '40rem',
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
            <Link to="/">{titleCard}</Link>
            {menu.map((item) => (
              <CurtainLink key={`${item.label}${item.path}`} label={item.label} href={item.path} />
            ))}
            <ColorModeToggle />
          </nav>

          {/** Mobile menu */}
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
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <small>{siteMetadata.copyright}</small>
          {pageName === 'About me' ? <Link to="/routines">Routines</Link> : null}
        </footer>
      </div>
    </div>
  );
}

export default Layout;
