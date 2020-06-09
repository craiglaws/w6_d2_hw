const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = []
};



Park.prototype.dinosaurCount = function () {
  return this.dinosaurs.length;
};


Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};


Park.prototype.removeDinosaur = function (dinosaur) {
  let index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1)
};


Park.prototype.mostPopularDinosaur = function () {
  let mostpop = this.dinosaurs[0];
  for(dinosaur of this.dinosaurs){
    if(dinosaur.guestsAttractedPerDay > mostpop.guestsAttractedPerDay){
      mostpop = dinosaur
    }
  }
  return mostpop;
};


Park.prototype.findBySpecies = function (species) {
  let foundDinosaurs = [];
  for(dinosaur of this.dinosaurs){
    if(dinosaur.species === species){
      foundDinosaurs.push(dinosaur)
    }
  }
  return foundDinosaurs

  // let foundDinosaurs = this.dinosaurs.filter(function (dinosaur) {
  //   return dinosaur.species === species;
  // });
};


Park.prototype.totalVisitorsByDay = function () {
  let total = 0;
  for(dinosaur of this.dinosaurs){
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
};


Park.prototype.totalVisitorsPerYear = function () {
  return this.totalVisitorsByDay() * 365;
};


Park.prototype.totalRevenuePerYear = function () {
  return this.totalVisitorsPerYear() * this.ticketPrice;
};

Park.prototype.removeBySpecies = function (species) {
  toBeRemoved = this.findBySpecies(species)
  for
};


module.exports = Park;
