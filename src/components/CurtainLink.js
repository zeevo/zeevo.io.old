/** @jsx jsx */
import { NavLink, jsx, useThemeUI } from 'theme-ui';
import { Link } from 'gatsby';

const isExternal = (path) => path.startsWith('http');

function CurtainLink({ label, href }) {
  const { theme } = useThemeUI();
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
      activeStyle={{ color: theme.colors.primary }}
    >
      {label}
    </Link>
  );
}

export default CurtainLink;
