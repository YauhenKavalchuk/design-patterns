class Auto {
  accept(visitor) {
    visitor(this);
  }
}

class Tesla extends Auto {
  info() {
    return 'It is a Tesla car!';
  }
}

class Bmw extends Auto {
  info() {
    return 'It is a BMW car!';
  }
}

class Audi extends Auto {
  info() {
    return 'It is an Audi car!';
  }
}

function exportVisitor(auto) {
	if (auto instanceof Tesla)
    auto.export = console.log(`Exported data: ${auto.info()}`);
	if (auto instanceof Bmw)
    auto.export = console.log(`Exported data: ${auto.info()}`);
	if (auto instanceof Audi)
    auto.export = console.log(`Exported data: ${auto.info()}`);
};
