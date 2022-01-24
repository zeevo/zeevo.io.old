/** @jsx jsx */
import { jsx } from 'theme-ui';
import BorderedBox from './BorderedBox';

const PageHeader = function ({ children }) {
  return (
    <BorderedBox>
      <h1
        sx={{
          marginBottom: 0,
          marginTop: 0,
        }}
      >
        {children}
      </h1>
    </BorderedBox>
  );
};

export default PageHeader;
