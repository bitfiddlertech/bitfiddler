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
        continue;
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

  function preOrder(root) {
  if (root != null) {
    console.log(root.key + " ");
    preOrder(root.left);
    preOrder(root.right);
  }
}

var z = initNode(66);
var root = initNode(12);
root = insert(root, z);
z = initNode(55);
root = insert(root, z);
// z = initNode(3);
// root = insert(root, z);
// z = initNode(30);
// root = insert(root, z);
// z = initNode(2);
// root = insert(root, z);

console.log(root);

preOrder(root);
