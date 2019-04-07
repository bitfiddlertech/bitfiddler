import React, { Component } from 'react';
import NavBar from "./components/NavBar/NavBar";
import logo from './logo.svg';
import './App.css';

const navElements = [
  {
    id: 1,
    name: "Visualizations",
    href: "/"
  },
  {
    id: 2,
    name: "About",
    href: "/about"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1 className="bitfiddler-title">bitfiddler</h1>*/}
        <NavBar navElements={navElements}></NavBar>
        <h2>
            Tired of scouring the web to find practice problems, visualizations,
            and code examples for your CS courses?
        </h2>
        <h1>We're here to help</h1>
      </div>
    );
  }
}

export default App;
