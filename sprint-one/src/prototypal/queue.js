var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.count = 0;
  instance.last = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.last++;
    this.storage[this.last] = value;
  },
  dequeue: function() {
    if (this.count) {
      this.count--;
      return this.storage[this.last - this.count];
    }
  },
  size: function() {
    return this.count;
  },
};


