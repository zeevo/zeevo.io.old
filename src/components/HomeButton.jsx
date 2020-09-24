/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { jsx, NavLink, Image } from 'theme-ui';

function HomeButton(props) {
  return (
    <Link href="/" {...props}>
      <Image
        sx={{
          width: '2rem',
          height: '2rem',
          border: '1px solid',
          borderRadius: '1rem',
          borderColor: 'text',
        }}
        src="/photo.png"
      />
    </Link>
  );
}

export default HomeButton;
