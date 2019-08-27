import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';
import './style/links.scss';
import './style/feed.scss';
import '../assets/fonts/fontello-771c82e0/css/fontello.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Helmet defaultTitle="zeevo | shaneoneill.io" />
        {children}
      </div>
    );
  }
}

export default Layout;
