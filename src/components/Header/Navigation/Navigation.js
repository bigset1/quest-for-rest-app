import React, {PropTypes} from 'react';
import {Nav} from 'react-bootstrap';
import Link from 'react-router/lib/Link';

function Navigation({className}) {
  return (
    <Nav bsStyle="pills" activeKey={1}>
      <Link to={"/profile"}>Profile</Link>
    </Nav>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default withStyles(s)(Navigation);
