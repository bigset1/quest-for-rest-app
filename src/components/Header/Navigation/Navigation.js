import React, {PropTypes} from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import Link from 'react-router/lib/Link';

function Navigation({className}) {
  return (
    <ul className="nav nav-pills">
      <li>
        <Link to={"/profile"}> test </Link>
      </li>
    </ul>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default Navigation;
