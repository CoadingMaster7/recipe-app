import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Topbar from '../Topbar';

const Layout = ({ children }) => (
  <Fragment>
    <Topbar />
    <main>
      {children}
    </main>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
