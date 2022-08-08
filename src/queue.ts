interface IQueue<T> {
  enqueue(element: T): void;
  dequeue(): T | undefined;
  front(): T | undefined;
  isEmpty(): boolean;
  size(): number;
  clear(): void;
}

class Queue<T> {
  private items: T[];

  constructor(private capacity: number = Infinity) {
    this.items = [];
  }

  public enqueue(element: T) {
    this.items.push(element);
  }

  public dequeue() {
    return this.items.shift();
  }

  public front() {
    return this.items[0];
  }

  public isEmpty() {
    return this.size() === 0;
  }

  public size() {
    return this.items.length;
  }

  public clear() {
    this.items = [];
  }
}

export default Queue;
