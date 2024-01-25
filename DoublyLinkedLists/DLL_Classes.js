class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length == 0) return undefined;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let tail = this.tail;
      this.tail = tail.prev;
      this.tail.next = null;
      tail.prev = null;
    }
    this.length--;
    return tail;
  }
  shift() {
    if (this.length === 0) return undefined;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let head = this.head;
      this.head = head.next;
      this.head.prev = null;
      head.next = null;
    }
    this.length--;
    return head;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return null;
    let current;
    if (index <= this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
      return current;
    }
  }
  set(value, index) {
    if (index < 0 || index > this.length) return false;
    let node = this.get(index);
    node.val = value;
    return true;
  }
  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.unshift(value);
    if (index == this.length) return !!this.push(value);
    let newNode = new Node(value);
    let node = this.get(index - 1);
    let temp = node.next;
    node.next = newNode;
    newNode.next = temp;
    temp.prev = newNode;
    newNode.prev = node;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index == 0) return !!this.shift();
    if (index == this.length) return !!this.pop();
    let node = this.get(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
    return node;
  }
}
let list = new DoublyLinkedList();
list.push(0); //prev
list.push(1); //node
list.push(2); //next
list.push(3);
list.remove(1);
console.log(list);
