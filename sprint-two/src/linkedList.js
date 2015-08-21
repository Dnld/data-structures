var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (!this.tail) {
      this.tail = Node(value);
      this.head = this.tail;
    } else {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function(){
    var temp = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    }
    return temp.value;
  };

  list.contains = function(target){
    var node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// Complexity: What is the time complexity of the above functions?
// addToTail: constant
// removeHead: constant
// contains: linear
