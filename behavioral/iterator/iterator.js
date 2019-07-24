class ArrayIterator {
	constructor(el) {
		this.index = 0;
		this.elements = el;
	}

	next() {
		return this.elements[this.index++];
	}

	hasNext() {
		return this.index < this.elements.length;
	}
};

class ObjectIterator {
	constructor(el) {
		this.index = 0;
		this.keys = Object.keys(el),
		this.elements = el;
	}

	next() {
		return this.elements[this.keys[this.index++]];
	}

	hasNext() {
		return this.index < this.keys.length;
	}
};
