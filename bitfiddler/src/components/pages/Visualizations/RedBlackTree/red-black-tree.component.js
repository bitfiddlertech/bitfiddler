import React, { Component } from 'react';
import '../../../../index.css';
import * as rb from './red-black-tree-methods.js';

import '../../../pieces/TreeNode/TreeNode.css';
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
      root = this.findRoot(root);
      root = rb.insert(root, z);
    }
    this.setState({
      root: root,
      size: this.state.size + 1,
      key: ""
    });
    root = this.findRoot(root);
    this.setTreeDisplayPosition(root);
    this.displayTree(root, 1);
  }
  onChangeKey(e) {
    this.setState({
      key: e.target.value
    });
  }
  displayNode(root) {
    var svg = d3.select("#svg");
    d3.select("#node-"+root.key).remove();
    d3.select("#line-"+root.key).remove();
    var node = svg.append("g");
    node.attr("id", "node-"+root.key);
    var color = root.color === "Black" ? "#777" : "#f33";
    if (root.p != null) {
      // d3.select("#node-"+root.p.key).remove();
      var parentColor = root.p.color === "Black" ? "#777" : "#f33";
      node.append("line")
        .attr("x1", root.p.width)
        .attr("y1", root.p.height)
        .attr("x2", root.width)
        .attr("y2", root.height)
        .attr("id", "line-"+root.key)
        .style("stroke", "black")
        .style("stroke-width", "2")
        .style("position", "relative")
        .style("z-index", "-1");
      node.append("circle")
        .attr("cx", root.p.width)
        .attr("cy", root.p.height)
        .attr("r", 25)
        .style("fill", parentColor)
        .style("position", "relative")
        .style("z-index", "1");
      node.append("text")
        .attr("x", root.p.width)
        .attr("y", root.p.height)
        .style("position", "relative")
        .style("z-index", "2")
        .text(root.p.key);
    }
    node.append("circle")
      .attr("cx", root.width)
      .attr("cy", root.height)
      .attr("r", 25)
      .style("fill", color)
      .style("position", "relative")
      .style("z-index", "1");
    node.append("text")
      .attr("x", root.width)
      .attr("y", root.height)
      .style("position", "relative")
      .style("z-index", "2")
      .text(root.key);
  }
  displayTree(root, firstRun) {
    if (firstRun === 1) {
      d3.selectAll("g").remove();
      firstRun = 0;
    }
    if (root != null) {
      this.displayNode(root);
      this.displayTree(root.right, firstRun);
      this.displayTree(root.left, firstRun);
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
    if (root != null) {
      if (root.p == null) {
        root.width = 500;
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
        // double grandparent to parent width if parent has two children
        if (root.p.right != null && root.p.left != null && root.p.p != null) {
          // TODO: modularize
          if (root.p == root.p.p.right) {
            root.p.width = root.p.width + 60;
            root.p.right.width = root.p.right.width + 60;
            root.p.left.width = root.p.left.width + 60;
          } else if (root.p == root.p.p.left) {
            root.p.width = root.p.width - 60;
            root.p.right.width = root.p.right.width - 60;
            root.p.left.width = root.p.left.width - 60;
          }
        }
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
        <button onClick={this.addNode} type="submit" className="btn btn-success">Submit</button>
        <br></br>
        <svg id="svg" height="1000" width="1000"></svg>
      </div>
    );
  }
}
