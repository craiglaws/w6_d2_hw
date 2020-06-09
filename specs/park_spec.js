const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park;
let dinosaur1;
let dinosaur2;
let dinosaur3;

  beforeEach(function () {
    park = new Park("Jurassic Park", 10)
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 30);
    dinosaur3 = new Dinosaur('bronchosaurus', 'herbivore', 100);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1)
    const actual = park.dinosaurCount();
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurCount();
    assert.strictEqual(actual, 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, dinosaur3)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findBySpecies("t-rex");
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalVisitorsByDay()
    assert.strictEqual(actual, 180)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 65700);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalRevenuePerYear()
    assert.strictEqual(actual, 657000)
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeBySpecies("velociraptor")
    const actual = park.dinosaurCount();
    assert.strictEqual(actual, 2)
  });

});
