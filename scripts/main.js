var solarSystem = (function(){
  var planets = [ "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  var visitedPlanets = 4;
  var currentSpaceCraft = "";
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
      visitedPlanets = visited;
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
    setFunFacts: function(facts) {
      funFacts = facts
    }
  }
})();


console.log(solarSystem.last_modified_date);

console.log(solarSystem.getPlanets());

solarSystem.planets = [ "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

console.log(solarSystem.planets);

