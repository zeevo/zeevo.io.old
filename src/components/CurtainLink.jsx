/** @jsx jsx */
import { NavLink, jsx } from 'theme-ui';
import { Link } from 'gatsby';

const isExternal = path => path.startsWith('http');

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
    <Link to={href}>
      <NavLink
        sx={{
          color: 'text',
        }}
      >
        {label}
      </NavLink>
    </Link>
  );
}

export default CurtainLink;
