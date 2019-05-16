import React, { Component } from 'react';
import NavBar from "./components/pieces/NavBar/NavBar";
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Index from './components/pages/Index/index.component';
import Visualizations from './components/pages/Visualizations/visualizations.component';

const navElements = [
  {
    id: 1,
    name: "Visualizations",
    href: "/visualizations"
  },
  {
    id: 2,
    name: "Tutorials",
    href: "/tutorials"
  },
  {
    id: 3,
    name: "Success in CS",
    href: "/success-in-cs"
  },
  {
    id: 4,
    name: "About",
    href: "/about"
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar navElements={navElements}></NavBar>

          <Switch>
            <Route exact path="/" component={ Index }/>
            <Route path="/visualizations" component={ Visualizations }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
