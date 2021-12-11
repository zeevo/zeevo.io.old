/** @jsx jsx */
import { jsx } from 'theme-ui';

const ExternalLink = function({ children, ...rest }) {
  return (
    <a sx={{ color: 'primary' }} {...rest}>
      {children}
    </a>
  );
}

export default ExternalLink;
