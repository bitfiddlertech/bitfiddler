import React, { Component } from 'react';
import './DescriptionBox.css';

class DescriptionBox extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log(this.props);
    return (
      <div className="box">
        <h1>{this.props.data.title}</h1>
        <img alt={this.props.data.title}/>
        <p>
          {this.props.data.description}
        </p>
      </div>
    );
  }
}

export default DescriptionBox;
