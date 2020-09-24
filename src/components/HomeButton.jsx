import React from 'react';
import { NavLink } from 'theme-ui';

function HomeButton(props) {
  return (
    <NavLink href="/" {...props}>
      @zeevosec
    </NavLink>
  );
}

export default HomeButton;
