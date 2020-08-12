import React from 'react';
import get from 'lodash/get';
import { Link } from 'gatsby';
import Menu from './Menu';
import Avatar from './Avatar';
import './style/sidebar.scss';

class Sidebar extends React.Component {
  render() {
    const { author, subtitle, menu } = this.props.data.site.siteMetadata;

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <Avatar author={author} subtitle={subtitle} />
          <div>
            <Menu data={menu} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
