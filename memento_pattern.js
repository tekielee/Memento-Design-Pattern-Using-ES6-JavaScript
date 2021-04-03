class Memento {
	constructor(state) {
		this.state = state;
	}
	
	getState() {
		return this.state;
	}
}

class Originator {
	constructor() {
		this.state;
	}
	
	setState(state) {
		this.state = state;
	}
	
	getState() {
		return this.state;
	}
	
	saveStateToMemento() {
		return new Memento(this.state);
	}
	
	getStateFromMemento(memento) {
		this.state = memento.getState();
	}
}

class CareTaker {
	constructor() {
		this.memento_list = [];
	}
	
	add(memento) {
		this.memento_list.push(memento);
	}
	
	get(memento) {
		return this.memento_list[memento];
	}
}

const originator = new Originator();
const careTaker = new CareTaker();
      
originator.setState("State #1");

originator.setState("State #2");
careTaker.add(originator.saveStateToMemento());
      
originator.setState("State #3");
careTaker.add(originator.saveStateToMemento());
      
originator.setState("State #4");
console.log('Current State: ' + originator.getState());		
      
originator.getStateFromMemento(careTaker.get(0));
console.log('First saved State: ' + originator.getState());
originator.getStateFromMemento(careTaker.get(1));
console.log('Second saved State: ' + originator.getState());