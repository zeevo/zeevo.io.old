/** @jsx jsx */
import { jsx } from 'theme-ui';

const BorderedBox = function ({ children, st }) {
  return (
    <div sx={{ borderWidth: '1px', borderColor: 'text', borderStyle: 'solid', padding: 3, ...st }}>
      {children}
    </div>
  );
};

export default BorderedBox;
