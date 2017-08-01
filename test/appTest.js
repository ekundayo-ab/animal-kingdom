const assert = require('chai').assert;
const Animal = require('../app.js').Animal;
const Dog = require('../app.js').Dog;
const Bird = require('../app.js').Bird;

let dog = new Dog(4, "Barks");
let bird = new Bird(2, "Chirps");

describe("Animal", function() {

	describe("check if animal is a dog", function(){
		it("should return animal is a dog", function(){
			assert.equal(dog.getName(), "This animal is a Dog");
		});
	});

	describe("check if animal is a bird", function(){
		it("should return animal is a bird", function(){
			assert.equal(bird.getName(), "This animal is a Bird");
		});
	});

	describe("check if dog's no of leg is correct", function(){
		it("should return 4 legs for dog", function(){
			assert.equal(dog.getLegs(), "Dogs have 4 legs");
		});
	});

	describe("check if bird's no of leg is correct", function(){
		it("should return 2 legs for birds", function(){
			assert.equal(bird.getLegs(), "Birds have 2 legs");
		});
	});

	describe("check for dog's sound", function(){
		it("should return barks", function(){
			assert.equal(dog.getSound(), "Dog Barks!");
		});
	});

	describe("check for bird's sound", function(){
		it("should return chirps", function(){
			assert.equal(bird.getSound(), "Bird Chirps!");
		});
	});

	describe("check for dog's character", function(){
		it("should return snarl", function(){
			assert.equal(dog.snarl(), "hummmm humyaa!");
		});
	});

	describe("check for bird's character", function(){
		it("should return snarl", function(){
			assert.equal(bird.fly(), "flap flap");
		});
	});

});

