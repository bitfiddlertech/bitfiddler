import React from 'react';
import './NavBar.css';
import NavEl from '../NavEl/NavEl';
import logo from '../../../Bitfiddle.png';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav-ul">
          <li className="title-nav-li">
            <a href="/" >
              <img className="logo" src={logo} width="50" height="50" alt="Bitfiddler logo"/>
            </a>
          </li>
          {
            this.props.navElements.map(navElement =>
            {
              return <NavEl key={navElement.id} navElement={navElement}/>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default NavBar;
