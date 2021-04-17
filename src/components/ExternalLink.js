/** @jsx jsx */
import { jsx } from 'theme-ui';

function ExternalLink({ children, ...rest }) {
  return (
    <a sx={{ color: 'primary' }} {...rest}>
      {children}
    </a>
  );
}

export default ExternalLink;
