var BinarySearchTree = function(value){
  var tree = Object.create(binarySearchTreeMethods);
  tree.value = value;
  tree.right = null;
  tree.left  = null;

  return tree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function (value) {
  var location = this;
  while (location) {
    if (value > location.value) {
      if (location.right === null) {
        location.right = BinarySearchTree(value);
        break;
      } else {
        location = location.right;
        continue;
      }
    } else {
      if (location.left === null) {
        location.left = BinarySearchTree(value);
        break;
      } else {
        location = location.left;
        continue;
      }
    }
  }
};

binarySearchTreeMethods.contains = function (target) {
  var location = this;
  while (location) {
    if (location.value === target) {
      return true;
    }
    if (target > location.value) {
      location = location.right;
      continue;
    } else {
      location = location.left;
      continue;
    }
  }
  return false;
};

binarySearchTreeMethods.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


// Complexity: What is the time complexity of the above functions?
// insert: linear
// contains: logarithmic
// depthFirstLog: linear
 
