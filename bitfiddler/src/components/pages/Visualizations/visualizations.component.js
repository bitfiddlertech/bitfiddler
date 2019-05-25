import React, { Component } from 'react';
import DescriptionBox from '../../pieces/DescriptionBox/DescriptionBox';
import './visualizations.css';
import '../../../index.css';

export default class Visualizations extends Component {
  constructor(props) {
    super(props);
    this.showVisualizations = this.showVisualizations.bind(this);
    this.visualizationClick = this.visualizationClick.bind(this);

    this.state = {
      visualizations: [
        {
          name: 'Red-Black Tree',
          image: 'Bitfiddle.png',
          link: '/red-black-tree',
          description: 'A tree for storing dat tree for storing data tree for storing data tree for storing data tree for storing data tree for storing data tree for storing data tree for storing dataa'
        },
        {
          name: 'Binary Search Tree',
          image: 'Bitfiddle.png',
          link: '/binary-search-tree',
          description: 'A tree for really storing data'
        },
        {
          name: 'Huffman Code',
          image: 'Bitfiddle.png',
          link: '/huffman-code',
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
  visualizationClick() {

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
