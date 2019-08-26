import React from 'react';
import get from 'lodash/get';
import { Link } from 'gatsby';
import Menu from './Menu';
import './style/sidebar.scss';

class Sidebar extends React.Component {
  render() {
    const { location } = this.props;
    const {
      author, subtitle, copyright, menu,
    } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src="https://cdn.discordapp.com/avatars/109673245225025536/f4c92e1248011bd25812344e8ad53a97.png?size=256"
            // src={profilePic}
            className="sidebar__author-photo"
            width="140"
            height="140"
            alt={author.name}
          />
        </Link>
        {isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h1>
        ) : (
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h2>
        )}
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <div>
            <Menu data={menu} />
            {/* <Links data={author} /> */}
            <p className="sidebar__copyright">{copyright}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
