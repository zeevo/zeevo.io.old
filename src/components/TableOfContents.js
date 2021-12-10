/** @jsx jsx */
import React from 'react';
import { jsx, Link } from 'theme-ui';

const renderItems = (items) => {
  return (
    <ol>
      {items.map((item) => {
        return (
          <li key={item.url}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        );
      })}
    </ol>
  );
};

function TableOfContents({ tableOfContents }) {
  return (
    <details open={true} sx={{ borderWidth: '1px', borderColor: 'text', padding: '1rem' }}>
      <summary>Table of Contents</summary>
      {renderItems(tableOfContents.items)}
    </details>
  );
}

export default TableOfContents;
