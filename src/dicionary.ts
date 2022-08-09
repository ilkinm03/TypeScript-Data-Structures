class Dictionary<T> {
  private items: { [key: string]: T };

  constructor() {
    this.items = {};
  }

  set(key: string, value: T): void {
    this.items[key] = value;
  }

  has(key: string): boolean {
    return key in this.items;
  }

  delete(key: string): boolean {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  get(key: string): T | undefined {
    return this.has(key) ? this.items[key] : undefined;
  }

  values(): T[] {
    let values: T[] = [];
    for (let k in this.items) {
      this.has(k) && values.push(this.items[k]);
    }
    return values;
  }

  keys(): string[] {
    return Object.keys(this.items);
  }

  getItems(): { [key: string]: T } {
    return this.items;
  }

  clear(): void {
    this.items = {};
  }
}

export default Dictionary;
