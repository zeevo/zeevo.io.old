/** @jsx jsx */
import { NavLink, jsx } from 'theme-ui';
import { Link } from 'gatsby';

const isExternal = (path) => path.startsWith('http');

function CurtainLink({ label, href }) {
  if (isExternal(href)) {
    return (
      <NavLink
        rel="noopener noreferrer"
        target="_blank"
        href={href}
        sx={{
          color: 'text',
        }}
      >
        {label}
      </NavLink>
    );
  }
  return (
    <Link
      to={href}
      sx={{
        color: 'text',
        fontWeight: 700,
        '&:hover': {
          color: 'primary',
        },
      }}
    >
      {label}
    </Link>
  );
}

export default CurtainLink;
