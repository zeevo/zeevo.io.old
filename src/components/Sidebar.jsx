import React from 'react';
import get from 'lodash/get';
import { Link } from 'gatsby';
import Menu from './Menu';
import './style/sidebar.scss';

class Sidebar extends React.Component {
  render() {
    const { author, subtitle, menu } = this.props.data.site.siteMetadata;

    const authorBlock = (
      <>
        <Link to="/" style={{}}>
          <img src="/photo.png" className="sidebar__author-photo" alt={author.name} />
        </Link>
        <div>
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h1>
          <p className="sidebar__author-subtitle">{subtitle}</p>
        </div>
      </>
    );

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <div>
            <Menu data={menu} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
