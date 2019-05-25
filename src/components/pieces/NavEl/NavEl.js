import React from 'react';
import './NavEl.css';

class NavEl extends React.Component {
  render() {
    return(
      <li className="nav-li nav-el nav-el-underscore">
        <a className="" href={this.props.navElement.href}><b>{this.props.navElement.name}</b></a>
      </li>
    );
  }
}

export default NavEl;
