  var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[i]) {
    if (this._storage[i][0] === k) {
      this._storage[i][1] = v;
    } else {
      var temp = this._storage[i].slice();
      this._storage[i][0] = temp;
      this._storage[i][1] = [k, v];
    }
  } else {
    this._storage[i] = [k, v];
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i]) {
    if (Array.isArray(this._storage[i][0])) {
      if (this._storage[i][0][0] === k) {
        return this._storage[i][0] ? this._storage[i][0][1] : this._storage[i][0];
      } else {
        return this._storage[i][1] ? this._storage[i][1][1] : this._storage[i][1];
      }
    }
  }

  return this._storage[i] ? this._storage[i][1] : this._storage[i];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage[i][0])) {
    if (this.storage[i][0][0] === k) {
      var temp = this._storage[i][1].slice();
      this._storage[i] = temp;
    } else {
      var temp = this._storage[i][0].slice();
      this._storage[i] = temp;
    }
  } else {
    this._storage[i] = null;
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
