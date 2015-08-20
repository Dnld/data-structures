var Queue = function(){
  var last = 0;
  var count = 0; 
  
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value){
    last++;
    count++;
    storage[last] = value;
  };

  someInstance.dequeue = function(){
    if (count) {
      count--;
      return storage[last - count];
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
