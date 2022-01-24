/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';
import { Link as GLink } from 'gatsby';

const Link = function ({ children, to }) {
  const { theme } = useThemeUI();
  return (
    <GLink to={to} sx={{ ...theme.styles.a }}>
      {children}
    </GLink>
  );
};

export default Link;
