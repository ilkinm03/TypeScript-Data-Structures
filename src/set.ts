class Set<T> {
  items: { [key: string]: T };
  constructor() {
    this.items = {};
  }

  add(value: any): boolean {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  has(value: T) {
    return value in this.items;
  }

  delete(value: any): boolean {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  clear(): void {
    this.items = {};
  }

  size(): number {
    return Object.keys(this.items).length;
  }

  values(): T[] {
    let values: T[] = [];
    for (let i = 0, keys = Object.keys(this.items); i < keys.length; i++) {
      values.push(this.items[keys[i]]);
    }
    return values;
  }

  union(otherSet: Set<T>): Set<T> {
    let unionSet = new Set<T>();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  }

  intersection(otherSet: Set<T>): Set<T> {
    let intersectionSet = new Set<T>();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }

  difference(otherSet: Set<T>): Set<T> {
    let differenceSet = new Set<T>();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  }

  subset(otherSet: Set<T>) {
    if (this.size() > otherSet.size()) return false;
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        return false;
      }
    }
    return true;
  }
}

export default Set;
