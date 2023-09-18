export class Node<T> {
    private value: T
    private next: Node<T> | null

    constructor(value: T) {
        this.value = value
        this.next = null
    }

    setNext(next: Node<T> | null): void {
        this.next = next
    }

    getNext(): Node<T> | null {
        return this.next
    }

    getValue(): T {
        return this.value
    }
}
