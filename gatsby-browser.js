/* eslint-disable import/prefer-default-export */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Flex, Link } from 'theme-ui';
import TableOfContents from './src/components/TableOfContents';
import FlexColumn from './src/components/FlexColumn';
import TwoHundredFiftyChallengeLinks from './src/components/250ChallengeLinks';

import './src/styles/global.css';

const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MDXProvider
    components={{ TableOfContents, Flex, FlexColumn, Link, TwoHundredFiftyChallengeLinks }}
    {...props}
  >
    {element}
  </MDXProvider>
);

export { wrapPageElement };
