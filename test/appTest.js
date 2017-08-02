/* eslint-env mocha */
const assert = require('chai').assert;
const Dog = require('../app.js').Dog;
const Bird = require('../app.js').Bird;

const dog = new Dog(4, 'Barks');
const bird = new Bird(2, 'Chirps');

describe('Animal', () => {
  describe('check if animal is a dog', () => {
    it('should return animal is a dog', () => {
      assert.equal(dog.getName(), 'This animal is a Dog');
    });
  });

  describe('check if animal is a bird', () => {
    it('should return animal is a bird', () => {
      assert.equal(bird.getName(), 'This animal is a Bird');
    });
  });

  describe('check if dog\'s no of leg is correct', () => {
    it('should return 4 legs for dog', () => {
      assert.equal(dog.getLegs(), 'Dogs have 4 legs');
    });
  });

  describe('check if bird\'s no of leg is correct', () => {
    it('should return 2 legs for birds', () => {
      assert.equal(bird.getLegs(), 'Birds have 2 legs');
    });
  });

  describe('check for dog\'s sound', () => {
    it('should return barks', () => {
      assert.equal(dog.getSound(), 'Dog Barks!');
    });
  });

  describe('check for bird\'s sound', () => {
    it('should return chirps', () => {
      assert.equal(bird.getSound(), 'Bird Chirps!');
    });
  });

  describe('check for dog\'s character', () => {
    it('should return hummmm humyaa', () => {
      assert.equal(dog.snarl(), 'hummmm humyaa!');
    });
  });

  describe('check for bird\'s character', () => {
    it('should return flap flap', () => {
      assert.equal(bird.fly(), 'flap flap');
    });
  });
});

