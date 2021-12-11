/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Link } from 'gatsby';
import './style/menu.scss';

const isExternal = (path) => path.startsWith('http');

const Menu = function(props) {
  const { data } = props;

  const menuBlock = (
    <ul className="menu__list">
      {data.map((item) => {
        let link;
        if (isExternal(item.path)) {
          link = (
            <a
              className="menu__list-item-link"
              rel="noopener noreferrer"
              target="_blank"
              href={item.path}
              sx={{ color: 'text' }}
            >
              {item.label}
            </a>
          );
        } else {
          link = (
            <Link
              to={item.path}
              className="menu__list-item-link"
              activeClassName="active"
              sx={{
                color: 'text',
                '&.active': {
                  borderBottom: '1px solid',
                },
                '&:hover': {
                  borderBottom: '1px solid',
                  borderColor: 'text',
                },
              }}
            >
              {item.label}
            </Link>
          );
        }
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

export default Menu;
