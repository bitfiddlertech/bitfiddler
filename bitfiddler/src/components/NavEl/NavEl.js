import React from 'react';
import './NavEl.css';

class NavEl extends React.Component {
  render() {
    return(
      <li className="nav-li">
        <a className="nav-el" href={this.props.navElement.href}>{this.props.navElement.name}</a>
      </li>
    );
  }
}

export default NavEl;
