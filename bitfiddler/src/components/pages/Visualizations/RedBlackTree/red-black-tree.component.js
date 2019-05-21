import React, { Component } from 'react';
import '../../../../index.css';
import * as rb from './red-black-tree-methods.js';

// import TreeNode from '../../../pieces/TreeNode/TreeNode';
import '../../../pieces/TreeNode/TreeNode.css';
// import Snap from 'snapsvg-cjs';
// import anime from 'animejs/lib/anime.es.js';
import * as d3 from 'd3';


export default class RedBlackTree extends Component {
  constructor(props) {
    super(props);
    this.addNode = this.addNode.bind(this);
    this.onChangeKey = this.onChangeKey.bind(this);
    this.displayTree = this.displayTree.bind(this);
    this.displayNode = this.displayNode.bind(this);
    this.findRoot = this.findRoot.bind(this);
    this.findDepth = this.findDepth.bind(this);
    this.setTreeDisplayPosition = this.setTreeDisplayPosition.bind(this);

    this.state = {
      root: {},
      key: "",
      nodeHeight: 0,
      nodeWidth: 0,
      size: 0
    };
  }
  addNode(e) {
    var root = this.state.root;
    if (this.state.key === "")
      return;
    if (this.state.size === 0)
      root = rb.initNode(Number(this.state.key));
    else {
      var z = rb.initNode(Number(this.state.key));
      root = rb.insert(root, z);
    }
    this.setState({
      root: root,
      size: this.state.size + 1,
      key: ""
    });
    root = this.findRoot(root);
    this.setTreeDisplayPosition(root);
    // console.log(root);
    this.displayTree(root);
  }
  onChangeKey(e) {
    this.setState({
      key: e.target.value
    });
  }
  displayNode(root) {
    var svg = d3.select("#svg");
    var node = svg.append("g");
    node.attr("id", "node-"+root.key);
    var color = root.color === "Black" ? "#777" : "#f33";
    // var startWidth, startHeight;
    // var depth = this.findDepth(root);
    // if (root.p == null) {
    //   startWidth = 300;
    //   startHeight = 50;
    //   this.setState({
    //     nodeWidth: startWidth,
    //     nodeHeight: startHeight
    //   });
    // } else if (root.p.right == root) {
    //   startWidth = this.state.nodeWidth + 60;
    //   startHeight = this.state.nodeHeight + (60 * depth);
    //   this.setState({
    //     nodeWidth: startWidth,
    //     nodeHeight: startHeight
    //   });
    // } else if (root.p.left == root) {
    //   startWidth = this.state.nodeWidth - 60;
    //   startHeight = this.state.nodeHeight + (60 * depth);
    //   this.setState({
    //     nodeWidth: startWidth,
    //     nodeHeight: startHeight
    //   });
    // }
    node.append("circle")
      .attr("cx", root.width)
      .attr("cy", root.height)
      .attr("r", 25)
      .style("fill", color);
    node.append("text")
      .attr("x", root.width)
      .attr("y", root.height)
      .text(root.key);
    // var node2 = svg.append("g");
    // node2.append("circle")
    //   .attr("cx", startWidth + 60)
    //   .attr("cy", startHeight + 60)
    //   .attr("r", 25)
    //   .style("fill", color);
    // var node3 = svg.append("g");
    // node3.append("circle")
    //   .attr("cx", startWidth - 60)
    //   .attr("cy", startHeight + 60)
    //   .attr("r", 25)
    //   .style("fill", color);
    // var node4 = svg.append("g");
    // node4.append("circle")
    //   .attr("cx", startWidth - 120)
    //   .attr("cy", startHeight + 120)
    //   .attr("r", 25)
      // .style("fill", color);
    // node.transition()
    //   .duration(1000)
    //   .attr("transform", "translate(200, 200)")

  }
  displayTree(root) {
    if (root != undefined) {
      this.displayNode(root);
      this.displayTree(root.right);
      this.displayTree(root.left);
    }
  }
  findRoot(node) {
    while (node.p != null)
      node = node.p;
    return node;
  }
  findDepth(node) {
    var depth = 0;
    while (node.p != null) {
      node = node.p;
      depth += 1;
    }
    return depth;
  }
  setTreeDisplayPosition(root) {
    // console.log(root);
    if (root != null) {
      if (root.p == null) {
        root.width = 300;
        root.height = 50;
        root.depth = 1;
        this.setState({
          root: root
        });
      } else {
        if (root.p.right != null && root == root.p.right)
          root.width = root.p.width + 60;
        else if (root.p.left != null && root == root.p.left)
          root.width = root.p.width - 60;
        root.height = root.p.height + 60;
        root.depth = root.p.depth + 1;
        this.setState({
          root: root
        });
      }
      this.setTreeDisplayPosition(root.left);
      this.setTreeDisplayPosition(root.right);
    }
  }
  render() {
    return(
      <div>
        <h1 className="title">Red-Black Tree Visualization</h1>
        <input
          type="text"
          placeholder="Enter Number"
          value={this.state.key}
          onChange={this.onChangeKey}
        />
        <button onClick={this.addNode} className="btn btn-success">Submit</button>
        <br></br>
        <svg id="svg" height="600" width="600">

        </svg>
      </div>
    );
  }
}
