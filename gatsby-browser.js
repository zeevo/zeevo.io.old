/* eslint-disable import/prefer-default-export */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import TableOfContents from './src/components/TableOfContents';

import './src/styles/global.css';

const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MDXProvider components={{ TableOfContents }} {...props}>
    {element}
  </MDXProvider>
);

export { wrapPageElement };
