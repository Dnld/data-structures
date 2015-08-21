var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.last = 0;
  this.storage = {};
};

Queue.prototype = {
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

Queue.prototype.constructor = Queue;
