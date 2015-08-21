var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){

  var passes = false;

  var searchForTarget = function(tree) {
    if (tree.value === target) {
      passes = true;
      return;
    }
    _.each(tree.children, function(child) {
      searchForTarget(child);
    });
  };

  searchForTarget(this);

  return passes;
  
};


// Complexity: What is the time complexity of the above functions?
// addChild: constant time
// contains: polynomial
