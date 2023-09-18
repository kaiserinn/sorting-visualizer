import { Node } from './Node';

export class Stack<T> {
  private first: Node<T> | null;
  private size: number;

  constructor() {
    this.first = null;
    this.size = 0;
  }

  getSize(): number {
    return this.size;
  }

  hasPop(): boolean {
    return !!this.first;
  }

  push(value: T): void {
    const newNode = new Node<T>(value);

    if (this.first === null) {
      this.first = newNode;
    } else {
      newNode.setNext(this.first);
      this.first = newNode;
    }

    this.size++;
  }

  pop(): T {
    if (!this.first) throw new Error('Stack is empty');

    const poppedValue = this.first.getValue();

    if (!this.first.getNext()) {
      this.first = null;
    } else {
      this.first = this.first.getNext();
    }

    this.size--;
    return poppedValue;
  }

  swap(index1: number, index2: number): void {
    if (
      index1 < 0 ||
      index1 >= this.size ||
      index2 < 0 ||
      index2 >= this.size
    ) {
      throw new Error('Index out of bounds!');
    } else if (index1 === index2) {
      return;
    }

    if (index1 > index2) [index1, index2] = [index2, index1];

    let nodeBeforeIndex1: Node<T> | null = null;
    let nodeBeforeIndex2: Node<T> | null = null;
    let node1 = this.first;
    let node2 = this.first;

    for (let i = 0; i < index2; i++) {
      if (i < index1) {
        nodeBeforeIndex1 = node1;
        if (node1?.getNext) node1 = node1.getNext();
      }
      if (i < index2) {
        nodeBeforeIndex2 = node2;
        if (node2?.getNext) node2 = node2.getNext();
      }
    }

    if (index1 === 0) {
      this.first = node2;
    } else {
      nodeBeforeIndex1?.setNext(node2);
    }

    let nodeAfterIndex1: Node<T> | null = null;

    if (node1?.getNext()) {
      nodeAfterIndex1 = node1.getNext();
    }

    nodeBeforeIndex2?.setNext(node1);

    if (node2?.getNext()) {
      node1?.setNext(node2.getNext());
    } else {
      node1?.setNext(null);
    }

    if (index2 - index1 === 1) {
      node2?.setNext(node1);
    } else {
      node2?.setNext(nodeAfterIndex1);
    }
  }

  get(index: number): Node<T> {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds');
    }

    let currentNode = this.first as Node<T>;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.getNext() as Node<T>;
    }

    return currentNode;
  }

  toString(): string {
    if (!this.hasPop()) return '{ empty stack }';

    let result = '';

    let currentNode: Node<T> | null = this.first;
    while (currentNode?.getNext()) {
      result += currentNode.getValue() + ' -> ';
      currentNode = currentNode.getNext();
    }

    result += `${currentNode?.getValue()}`;
    return result;
  }

  bubbleSort(): void {
    for (let i = 0; i < this.size - 1; i++) {
      for (let j = 0; j < this.size - i - 1; j++) {
        const current = this.get(j);
        const currentValue = current.getValue();
        const nextValue = current.getNext()!.getValue();
        if (currentValue > nextValue) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  insertionSortOld(): void {
    for (let i = 1; i < this.size; i++) {
      const currentValue = this.get(i).getValue();
      for (let j = i - 1; j >= 0; j--) {
        const beforeValue = this.get(j).getValue();
        if (currentValue < beforeValue) {
          this.swap(i, j);
          i--;
        }
      }
    }
  }

  // insertionSort(): void {
  //     if (!this.first) return;
  //     for (let i = 1; i < this.size; i++) {
  //         let currentValue = this.get(i).getValue()
  //
  //         let current = this.first
  //         for (let i = 0; i < i; i++) {
  //             current = current.getNext() as Node<T>;
  //         }
  //     }
  // }

  selectionSort(): void {
    //
  }
}
