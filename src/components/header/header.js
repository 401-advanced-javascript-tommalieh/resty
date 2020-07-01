import React from 'react';
import './header.scss';
import {Link, NavLink} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return(
      <nav>
        <h1>RESTy</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <NavLink to='/history'>History</NavLink>
          </li>

        </ul>
      </nav>
    );
  }
}

export default Header;