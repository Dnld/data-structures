var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.count = 0;
  instance.storage = {};

  var extend = function(obj) {
    for (var key in obj) {
      instance[key] = obj[key];
    }
  };

  extend(stackMethods);

  // console.log(count);

  return instance;
};

var stackMethods = {
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
  }
};


