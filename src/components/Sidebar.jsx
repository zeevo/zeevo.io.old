/** @jsx jsx */
import { jsx, useColorMode, IconButton, Flex, Box, NavLink } from 'theme-ui';

import React from 'react';
import Menu from './Menu';
import Avatar from './Avatar';
import './style/sidebar.scss';

function Sidebar(props) {
  const [colorMode, setColorMode] = useColorMode();
  const { author, subtitle, menu } = props.data.site.siteMetadata;

  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <Avatar author={author} subtitle={subtitle} />
        <Menu data={menu} />
        <IconButton
          sx={{ cursor: 'pointer', float: 'right' }}
          aria-label="Toggle dark mode"
          onClick={() => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default');
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentcolor"
          >
            <circle r={11} cx={12} cy={12} fill="none" stroke="currentcolor" strokeWidth={2} />
          </svg>
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
