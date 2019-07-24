class CarAccess {
	open() {
		console.log('Opening car door')
	}

	close() {
		console.log('Closing the car door')
	}
};

class SecuritySystem {
	constructor(door) {
		this.door = door;
	}

	open(password) {
		if (this.authenticate(password)) {
			this.door.open();
		} else {
			console.log('Access denied!');
		}
	}

	authenticate(password) {
		return password === 'Ilon';
	}

	close() {
		this.door.close()
	}
};
