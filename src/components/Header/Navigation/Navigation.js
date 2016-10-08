import React, {PropTypes} from 'react';
import Link from 'react-router/lib/Link';

function Navigation({className}) {
  return (
    <ul className="nav nav-pills">
      <li>
        <Link to={"/"}> Home </Link>
      </li>
      <li>
        <Link to={"/profile"}> Profile </Link>
      </li>
      <li>
        <Link to={"/create-quest"}> CreateQuest </Link>
      </li>
    </ul>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default Navigation;
