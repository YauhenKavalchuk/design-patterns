class Сonveyor {

	setBody() {
		console.log('Body set!');
	}

	getEngine() {
        console.log('Dismantle Engine!');
    }

	setEngine() {
		console.log('Engine set!');
	}

	setInterior() {
		console.log('Exterior added!');
	}

	changeInterior() {
		console.log('Update interior!');
	}

	setExterior() {
		console.log('Added interior!');
	}

	setWheels() {
		console.log('Wheels!');
	}

	addElectronics() {
		console.log('Added electronics!');
	}

	paint() {
		console.log('Car painted!');
	}
}

class СonveyorFacade {
	constructor(car) {
		this.car = car;
	}

	assembleCar() {
		this.car.setBody();
		this.car.setEngine();
		this.car.setInterior();
		this.car.setExterior();
		this.car.setWheels();
		this.car.addElectronics();
		this.car.paint();
	}
}
