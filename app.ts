import Stack from "./src/stack";
import Queue from "./src/queue";

// Stack
const s = new Stack<number>();
s.push(5);
s.push(10);
console.log(s);

// Queue
const q = new Queue<number>();
q.enqueue(15);
q.enqueue(20);
q.dequeue();
console.log(q);