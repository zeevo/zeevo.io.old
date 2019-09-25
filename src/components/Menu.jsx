import React from 'react';
import { Link } from 'gatsby';
import './style/menu.scss';

class Menu extends React.Component {
  render() {
    const menu = this.props.data;

    const menuBlock = (
      <ul className="menu__list">
        {menu.map(item => {
          let link;
          link = (
            <Link
              to={item.path}
              className="menu__list-item-link"
              activeClassName="menu__list-item-link menu__list-item-link--active"
            >
              {item.label}
            </Link>
          );
          return (
            <li className="menu__list-item" key={item.path}>
              {link}
            </li>
          );
        })}
      </ul>
    );

    return <nav className="menu">{menuBlock}</nav>;
  }
}

export default Menu;
