class HashMap<T> {
  private table: (T | undefined)[];

  constructor() {
    this.table = [];
  }

  private hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }

  public put(key: string, value: T): void {
    let position = this.hash(key);
    console.log(position, " - ", key);
    this.table[position] = value;
  }

  public remove(key: string): void {
    this.table[this.hash(key)] = undefined;
  }

  public get(key: string): T | undefined {
    return this.table[this.hash(key)];
  }
}

export default HashMap;
