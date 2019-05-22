// function RedBlack(key) {
//   var tree = initNode(key);
//   return tree;
// }

export function initNode(key) {
  var n = {};
  n.key = key;
  n.color = "Black";
  n.left = null;
  n.right = null;
  n.p = null;
  return n;
}

export function leftRotate(root, x) {
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

export function rightRotate(root, x) {
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

export function insert(root, z) {
  var y = null;
  var x = root;
  while (x != null) {
    y = x;
    if (z.key < x.key) {
      x = x.left;
      // console.log('1');
    }
    else {
      x = x.right;
      // console.log('2');
    }
    // console.log(x);
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
  root = insertFixup(root, z);
  root = findRoot(root);
  console.log(root);
  return root;
}

export function insertFixup(root, z) {
  while (z.p != null && z.p.color === "Red") {
    var y;
    // console.log(z);
    if (z.p === z.p.p.left) {
      y = z.p.p.right;
      if (y != null && y.color === "Red") {
        // console.log('case 1a');
        z.p.color = "Black";
        y.color = "Black";
        z.p.p.color = "Red";
        z = z.p.p;
        continue;
      } else if (z === z.p.right) {
        // console.log('case 2a');
        z = z.p;
        leftRotate(root, z);
      }
      // console.log('case 3a');
      z.p.color = "Black";
      z.p.p.color = "Red";
      rightRotate(root, z.p.p);
    } else {
      y = z.p.p.left;
      if (y != null && y.color === "Red") {
        // console.log('case 1b');
        z.p.color = "Black";
        y.color = "Black";
        z.p.p.color = "Red";
        z = z.p.p;
        continue;
      } else if (z === z.p.left) {
        // console.log('case 2b');
        z = z.p;
        rightRotate(root, z);
      }
      // console.log('case 3b');
      z.p.color = "Black";
      z.p.p.color = "Red";
      leftRotate(root, z.p.p);
    }
  }
  root = findRoot(root);
  root.color = "Black";
  return root;
}

export function findRoot(node) {
  while (node.p != null)
    node = node.p;
  return node;
}

export function preOrder(root) {
  if (root != null) {
    // console.log(root.key + " ");
    preOrder(root.left);
    preOrder(root.right);
  }
}

// var z = initNode(122);
// var root = initNode(10);
// root = insert(root, z);
// z = initNode(1);
// root = insert(root, z);
// z = initNode(3);
// root = insert(root, z);
// z = initNode(30);
// root = insert(root, z);
// z = initNode(2);
// root = insert(root, z);



// var z = initNode(122);
// insert(t, z);
// var z = initNode(20);
// insert(t, z);
// console.log(root);
// preOrder(root);
