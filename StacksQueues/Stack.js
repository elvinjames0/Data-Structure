class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
/*
Stacks là LIFO(Last in first out) DataStructure thứ được thêm vào cuối cùng sẽ được xóa đầu tiên
Stacks được dùng để xử lý các tác vụ undo, redo, quay ngược lại trang trước đó
Insertion - O(1)
Removal   - O(1)
Searching - O(N)
Access    - O(N)
*/
