/** @jsx jsx */
import { useState } from 'react';
import Helmet from 'react-helmet';
import { jsx, Flex, useThemeUI } from 'theme-ui';

import ColorModeToggle from './ColorModeToggle';
import Curtain from './Curtain';
import CurtainLink from './CurtainLink';
import MenuButton from './MenuButton';
import HomeButton from './HomeButton';

import { useSiteMetadata } from '../hooks';

import '../assets/scss/init.scss';
import BorderedBox from './BorderedBox';

const Layout = function (props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const siteMetadata = useSiteMetadata();

  const { menu } = siteMetadata;

  return (
    <div
      sx={{
        mx: 3,
        mb: 3,
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
            <CurtainLink label="Zeevo.io" href="/" />
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
          }}
        >
          <div
            sx={{
              mx: 'auto',
            }}
          >
            {props.children}
          </div>
        </main>
        <BorderedBox st={{ mb: 1, p: 1, mt: 3 }}>
          <footer
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <small>{siteMetadata.copyright}</small>
          </footer>
        </BorderedBox>
      </div>
    </div>
  );
};

export default Layout;
