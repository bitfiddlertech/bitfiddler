import React, {Component} from 'react';

class TreeNode extends Component {
  render() {
    var node;
    console.log(this.props);
    if (this.props.node.color === "Black") {
      node = <span className="tree-node black"></span>;
    } else {
      node = <span className="tree-node red"></span>;
    }
    return (
      {node}
    );
  }
}

export default TreeNode;
