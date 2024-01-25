class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    //https://stackoverflow.com/questions/64476223/linkedlist-push-method-in-javascript-with-a-tail
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head; // trỏ đến cùng 1 đối tượng trong bộ nhớ
      // lần push thứ 1
    } else {
      this.tail.next = newNode;
      // do trỏ đến cùng 1 đối tượng trong bộ nhớ nên khi tail thay đổi thì head cũng thay đổi ( lần push thứ 2 ) -
      // do trỏ đến cùng 1 đối tượng ( newNode ) ở lần 2 nên --
      this.tail = newNode;
      // tail lúc này không còn trỏ đến cùng 1 đối tượng với head nữa -
      // mà nó sẽ trỏ đến đối tượng mới thêm vào => newNode -
    }
    this.length++;
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  set(value, index) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.unshift(val);
    if (index == this.length) return !!this.push(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index == 0) return !!this.shift();
    if (index == this.length - 1) return !!this.pop();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("HEAD");
list.push("something");
list.push("TAIL");
list.reverse();
// xem lại reverse
console.log(list);
// head hello something tail
/*
{ val : HELLO , next : null}
{ val : GOODBYE , next : null}
{ val : Tail , next : null}

{
node  head: { val : HELLO , next : { val : GOODBYE , next : { val : Tail , next : null} } }
  tail: { val : Tail , next : null}
  length: 3
}


{
  head: { val: Tail , next: null};
  tail: { val: HELLO , next :{ val: GOODBYE, next: { val: Tail, next: null} } }
}
next = { val : GOODBYE , next : { val : Tail , next : null} }
node.next = null;
prev = { val : HELLO , next : { val : GOODBYE , next : { val : Tail , next : null} } }
node = { val : GOODBYE , next : { val : Tail , next : null} }
*/
