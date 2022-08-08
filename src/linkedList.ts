interface ILinkedList<T> {
  insertFirst(data: T): void;
  insertLast(data: T): void;
  insertAt(data: T, index: number): void;
  indexOf(data: T): number;
  removeAt(index: number): void;
  clearList(): void;
}

class Node<T> {
  constructor(public data: T, public next = null) {
    this.data = data;
    this.next = next;
  }
}

export default class LinkedList<T> implements ILinkedList<T> {
  head: any;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  public insertFirst(data: T) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  public insertLast(data: T) {
    let node = new Node(data);
    let curr;
    if (!this.head) {
      this.head = null;
    } else {
      curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  public insertAt(data: T, index: number) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      return this.insertFirst(data);
    }
    if (index === this.size) {
      return this.insertLast(data);
    }
    const node = new Node(data);
    let curr, prev;
    curr = this.head;
    let count = 0;
    while (count < index) {
      prev = curr;
      count++;
      curr = curr.next;
    }
    node.next = curr;
    prev.next = node;
    this.size++;
  }

  public indexOf(data: T) {
    let curr = this.head,
      index = -1;
    while (curr) {
      if (data === curr.element) {
        return index;
      }
      index++;
      curr = curr.next;
    }
    return -1;
  }

  public removeAt(index: number) {
    if (index > 0 && index > this.size) {
      return;
    }
    let curr = this.head;
    let prev;
    let count: number = 0;
    if (index === 0) {
      this.head = curr.next;
    } else {
      while (count < index) {
        count++;
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
    }
    this.size--;
  }

  public clearList() {
    this.head = null;
    this.size = 0;
  }
}
