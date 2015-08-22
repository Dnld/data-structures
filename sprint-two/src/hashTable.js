  var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i]) {
    for (var j = 0; j < this._storage[i].length; j++) {
      if (this._storage[i][j][0] === k) {
        this._storage[i][j][1] = v;
        return;
      }
    }
    this._storage[i].push([k, v]);
  } else {
    this._storage[i] = [];
    this._storage[i].push([k, v]);
  }
  console.log(this._storage[i]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0; j < this._storage[i].length; j++) {
    if (this._storage[i][j]) {
      if (this._storage[i][j][0] === k) {
        return this._storage[i][j][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0; j < this._storage[i].length; j++) {
    if (this._storage[i][j][0] === k) {                
      delete this._storage[i][j];
    }
  }

};




// Complexity: What is the time complexity of the above functions?
// insert: constant
// retrieve: constant
// remove: constant
// limitedArray.get: constant;
// limitedArray.set: constant;
// limitedArray.each: linear;
// getIndexBelowMaxForKey: constant for hashtable; linear for itself
