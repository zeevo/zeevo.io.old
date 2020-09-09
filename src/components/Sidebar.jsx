/** @jsx jsx */
import { jsx } from 'theme-ui';

import Menu from './Menu';
import Avatar from './Avatar';
import './style/sidebar.scss';

function Sidebar(props) {
  const { author, subtitle, menu } = props.data.site.siteMetadata;

  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <Avatar author={author} subtitle={subtitle} />
        <Menu data={menu} />
      </div>
    </div>
  );
}

export default Sidebar;
