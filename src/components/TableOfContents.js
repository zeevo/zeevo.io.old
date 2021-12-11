/** @jsx jsx */
import { jsx, Link } from 'theme-ui';

const renderItems = (items) => (
  <ol>
    {items.map((item) => (
      <li key={item.url}>
        <Link href={item.url}>{item.title}</Link>
      </li>
    ))}
  </ol>
);

const TableOfContents = function ({ tableOfContents }) {
  return (
    <details open sx={{ borderWidth: '1px', borderColor: 'text', padding: '1rem' }}>
      <summary>Table of Contents</summary>
      {renderItems(tableOfContents.items)}
    </details>
  );
};

export default TableOfContents;
