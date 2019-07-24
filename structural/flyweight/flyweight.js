class Auto {
	constructor(model) {
		this.model = model;
	}
}

class AutoFactory {
	constructor(name) {
		this.models = {};
	}

	create(name) {
		let model = this.models[name];
		if (model) return model;
		this.models[name] = new Auto(name);
		return this.models[name];
	}
};
