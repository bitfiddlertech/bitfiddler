import React, { Component } from 'react';
import './DescriptionBox.css';

class DescriptionBox extends Component {
  constructor(props) {
    super(props);

    this.onBoxClick = this.onBoxClick.bind(this);
  }
  onBoxClick() {
  }
  render() {
    console.log(this.props);
    return (
      <a className="box" href={this.props.data.link}>
        <h1>{this.props.data.name}</h1>
        <img src="Bitfiddle.png" alt={this.props.data.name}/>
        <p>
          {this.props.data.description}
        </p>
      </a>
    );
  }
}

export default DescriptionBox;
