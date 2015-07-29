var solarSystem = (function(){
  var planets = [ "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  var visitedPlanets = 4;
  var currentSpaceCraft = ["messanger", "venus express", "mars express"];
  var funFacts = {};

  return {
    last_modified_date: new Date(),

    getPlanets: function(){
      return planets;
    },
    getVisitedPlanets: function(){
      return visitedPlanets;
    },
    setVisitedPlanets: function(visited){
      if (visited < 0 || visited > 8) {
        throw "I dont think so, there are only 8 possible planets!"
      } else {
        visitedPlanets = visited;
      }
    },
    getCurrentSpaceCraft: function(){
      return currentSpaceCraft;
    },
    setCurrentSpaceCraft: function(spaceCraft){
      currentSpaceCraft = spaceCraft;
    },
    getFunFacts: function(){
      return funFacts;
    },
    setFunFacts: function(fact, value) {
      funFacts[fact] = value;
    }
  }
})();


console.log("Date: ", solarSystem.last_modified_date);

console.log("solarSystem.getPlanets(): ", solarSystem.getPlanets());

solarSystem.planets = [ "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

console.log("solarSystem.planets: ", solarSystem.planets);
console.log("solarSystem.getPlanets(): ", solarSystem.getPlanets());


solarSystem.setFunFacts("numerOfMoons", 176);
solarSystem.setFunFacts("numberOfGasGiants", 4);

console.log("Fun Facts: ", solarSystem.getFunFacts());

solarSystem.setVisitedPlanets(9);

