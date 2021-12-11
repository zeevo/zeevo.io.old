/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';

const FlexColumn = function FlexColumn({ sx, children, ...props }) {
  return (
    <Flex sx={{ ...sx, flexDirection: 'column' }} {...props}>
      {children}
    </Flex>
  );
};

export default FlexColumn;
