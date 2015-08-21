var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype = {
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function() {
    if (this.count) {
      var popped = this.storage[this.count];
      this.count--;
      return popped;
    }
  },
  size: function() {
    return this.count;
  },
};

Stack.prototype.constructor = Stack;
