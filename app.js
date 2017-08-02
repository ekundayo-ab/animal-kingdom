class Animal {
  constructor(noOfLegs, soundType) {
    this.name = 'Animal';
    this.noOfLegs = noOfLegs;
    this.soundType = soundType;
  }

  getName() {
    return `This animal is a ${this.name}`;
  }

  getLegs() {
    return `${this.name}s have ${this.noOfLegs} legs`;
  }

  getSound() {
    return `${this.name} ${this.soundType}`;
  }
}

class Dog extends Animal {
  constructor() {
    super(4, 'Barks!');
    this.name = 'Dog';
  }

  static snarl() {
    return 'hummmm humyaa!';
  }
}

class Bird extends Animal {
  constructor() {
    super(2, 'Chirps!');
    this.name = 'Bird';
  }

  static fly() {
    return 'flap flap';
  }
}


module.exports = {
  Animal, Dog, Bird,
};
