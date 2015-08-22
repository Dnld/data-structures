var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item){
  delete this._storage[item];
};

// Complexity: What is the time complexity of the above functions?
// add: constant;
// contains: constant;
// remove: constant;
//
// Because this is implemented as an object, it uses the features of a hash table, 
// thus achieving constant time complexity.
