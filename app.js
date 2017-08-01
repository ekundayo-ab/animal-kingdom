class Animal {
	constructor(noOfLegs, soundType) {
		this.name = "Animal";
		this.noOfLegs = noOfLegs;
		this.soundType = soundType;
	}

	getName(){
		return "This animal is a " + this.name;
	}

	getLegs(){
		return this.name + "s have " + this.noOfLegs + " legs";
	}

	getSound(){
		return this.name + " " + this.soundType;
	}

}

class Dog extends Animal {
	constructor(noOfLegs, soundType) {
		super(4, "Barks!");
		this.name = "Dog";
	}

	snarl(){
		return "hummmm humyaa!";
	}
}


