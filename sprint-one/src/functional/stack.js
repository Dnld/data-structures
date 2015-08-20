var Stack = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    count++;
    storage[count] = value;
  };

  someInstance.pop = function(){
    if (count) {
      var popped = storage[count];
      count--;
      return popped;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
