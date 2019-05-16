import React, { Component } from 'react';
import DescriptionBox from '../../pieces/DescriptionBox/DescriptionBox';
import './visualizations.css';

export default class Visualizations extends Component {
  constructor(props) {
    super(props);
    this.showVisualizations = this.showVisualizations.bind(this);

    this.state = {
      visualizations: [
        {
          image: './Bitfiddle.png',
          title: 'Red-black Tree',
          description: 'A tree for storing data'
        },
        {
          image: './Bitfiddle.png',
          title: 'Binary Search Tree',
          description: 'A tree for really storing data'
        },
        {
          image: './Bitfiddle.png',
          title: 'Huffman Code',
          description: 'Zip files'
        }
      ]
    };
  }
  showVisualizations() {
    return this.state.visualizations.map(function(visualization, i) {
      return <DescriptionBox key={i} data={visualization}/>;
    });
  }
  render() {
    return (
      <div>
        <h1 className="title">Visualizations</h1>
        <div className="box-container">
          {this.showVisualizations()}
        </div>
      </div>
    );
  }
}
