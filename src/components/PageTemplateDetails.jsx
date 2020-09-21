/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
import './style/pagetemplatedetails.scss';

class PageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.markdownRemark;

    return (
      <div>
        <h1 className="page__title">{page.frontmatter.title}</h1>
        <div
          sx={{
            '& a': {
              color: 'primary',
            },
          }}
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
      </div>
    );
  }
}

export default PageTemplateDetails;
