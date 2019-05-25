// function RedBlack(key) {
//   var tree = initNode(key);
//   return tree;
// }

  function initNode(key) {
  var n = {};
  n.key = key;
  n.color = "Black";
  n.left = null;
  n.right = null;
  n.p = null;
  return n;
}

  function leftRotate(root, x) {
  var y = x.right;
  x.right = y.left;
  if (y.left != null)
    y.left.p = x;
  y.p = x.p;
  if (x.p === null)
    root = y;
  else if (x === x.p.left)
    x.p.left = y;
  else
    x.p.right = y;
  y.left = x;
  x.p = y;
}

  function rightRotate(root, x) {
  var y = x.left;
  x.left = y.right;
  if (y.right != null)
    y.right.p = x;
  y.p = x.p;
  if (x.p === null)
    root = y;
  else if (x === x.p.right)
    x.p.right = y;
  else
    x.p.left = y;
  y.right = x;
  x.p = y;
}

  function insert(root, z) {
  var y = null;
  var x = root;
  while (x != null) {
    y = x;
    if (z.key < x.key)
      x = x.left;
    else
      x = x.right;
  }
  z.p = y;
  if (y === null)
    root = z;
  else if (z.key < y.key)
    y.left = z;
  else
    y.right = z;
  z.left = null;
  z.right = null;
  z.color = "Red";
  insertFixup(root, z);
  return root;
}

  function insertFixup(root, z) {
  while (z.p != null && z.p.color === "Red") {
    var y;
    if (z.p === z.p.p.left) {
      y = z.p.p.right;
      if (y != null && y.color === "Red") {
        console.log('case 1');
        z.p.color = "Black";
        y.color = "Black";
        z.p.p.color = "Red";
        z = z.p.p;
        continue;
      } else if (z === z.p.right) {
        z = z.p;
        leftRotate(root, z);
      }
      z.p.color = "Black";
      z.p.p.color = "Red";
      rightRotate(root, z.p.p);
    } else if (z.p === z.p.p.right) {
      y = z.p.p.left;
      if (y != null && y.color === "Red") {
        z.p.color = "Black";
        y.color = "Black";
        z.p.p.color = "Red";
        z = z.p.p;
      } else if (z === z.p.left) {
        z = z.p;
        rightRotate(root, z);
      }
      z.p.color = "Black";
      z.p.p.color = "Red";
      leftRotate(root, z.p.p);
    }
  }
  root.color = "Black";
}

function transplant(root, u, v) {
  // console.log(root);
  if (u.p == null)
    root = v;
  else if (u == u.p.left)
    u.p.left = v;
  v.p = u.p;
  // return root;
}

function deleteNode(root, z) {
  var y = z;
  var x;
  var y_original_color = y.color;
  if (z.left == null) {
    x = z.right;
    transplant(root, z, z.right);
  } else if (z.right == null) {
    x = z.left;
    transplant(root, z, z.left);
  } else {
    // y = treeMinimum(z.right);
    console.log(z);
    console.log(y);
    y_original_color = y.color;
    x = y.right;
    if (y.p == z)
      x.p = y;
    else {
      transplant(root, y, y.right);
      y.right = z.right;
      y.right.p = y;
    }
    transplant(root, z, y);
    y.left = z.left;
    y.left.p = y;
    y.color = z.color;
  }
  if (y_original_color == "Black")
    deleteFixup(root, x);
}

function deleteFixup(root, x) {
  while (x != root && x.color == "Black") {
    if (x == x.p.left) {
      var w = x.p.right;
      if (w.color == "Red") {
        w.color = "Black";
        x.p.color = "Red";
        leftRotate(root, x.p);
        w = x.p.right;
      }
      if (w.left.color == "Black" && w.right.color == "Black") {
        w.color = "Red";
        x = x.p;
        continue;
      } else if (w.right.color == "Black") {
        w.left.color = "Black";
        w.color = "Red";
        rightRotate(root, w);
        w = x.p.right;
      }
      w.color = x.p.color;
      x.p.color = "Black";
      w.right.color = "Black";
      leftRotate(root,x.p);
      x = root;
    } else if (x == x.p.right) {
      var w = x.p.left;
      if (w.color == "Red") {
        w.color = "Black";
        x.p.color = "Red";
        rightRotate(root, x.p);
        w = x.p.left;
      }
      if (w.right.color == "Black" && w.left.color == "Black") {
        w.color = "Red";
        x = x.p;
        continue;
      } else if (w.left.color == "Black") {
        w.right.color = "Black";
        w.color = "Red";
        leftRotate(root, w);
        w = x.p.left;
      }
      w.color = x.p.color;
      x.p.color = "Black";
      w.left.color = "Black";
      rightRotate(root,x.p);
      x = root;
    }
  }
  x.color = "Black";
}

function treeMinimum(node) {
  while (node.left != null)
    node = node.left;
  return node;
}

  function preOrder(root) {
  if (root != null) {
    console.log(root.key + " ");
    preOrder(root.left);
    preOrder(root.right);
  }
}

// var u = initNode(1);
// var z = initNode(3);
// var root = initNode(2);
// root = insert(root, u);
// root = transplant(root, u, z);
// console.log(root);
var z = initNode(122);
var root = initNode(10);
root = insert(root, z);
z = initNode(1);
root = insert(root, z);
z = initNode(3);
root = insert(root, z);
z = initNode(30);
root = insert(root, z);
z = initNode(2);
root = insert(root, z);

// console.log(root);
deleteNode(root, z);
// console.log(root)
//
// preOrder(root);
