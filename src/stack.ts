interface IStack<T> {
  push(element: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
  isEmpty(): boolean;
  clear(): void;
}

class Stack<T> implements IStack<T> {
  private items: T[];

  constructor(private capacity: number = Infinity) {
    this.items = [];
  }

  public push(element: T) {
    if (this.size() === this.capacity)
      throw new Error("Stack capacity if full. Cannot push elements anymore!");
    this.items.push(element);
  }

  public pop() {
    return this.items.pop();
  }

  public peek() {
    return this.items[this.size() - 1];
  }

  public size() {
    return this.items.length;
  }

  public isEmpty() {
    return this.size() === 0;
  }

  public clear() {
    this.items = [];
  }
}

export default Stack;
