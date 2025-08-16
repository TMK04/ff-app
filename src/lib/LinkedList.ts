export class ListNode<T> {
	data: T;
	next!: ListNode<T>;

	constructor(data: T, next?: ListNode<T>) {
		this.data = data;
		this.next = typeof next === 'undefined' ? this : next;
	}
}

export class SinglyCircularLinkedList<T> {
	head!: ListNode<T>;
	tail!: ListNode<T>;
	obj_id_node: Record<string, ListNode<T>>;

	constructor() {
		this.obj_id_node = {};
	}

	insert(id: string, data: T) {
		const list_node = new ListNode(data);
		this.obj_id_node[id] = list_node;
		if (!this.head) {
			this.head = list_node;
			this.tail = list_node;
		} else {
			this.tail.next = list_node;
			list_node.next = this.head;
			this.tail = list_node;
		}
	}
}
