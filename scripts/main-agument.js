var solarSystem = (function(SolarSystem) {
  var fiveCloseStars = ["Proxima Centauri", "Barnard's Star", "Luhman 16", "Wolf 359", "Lalande 21185"];
  var ageOfSolarSystem = 5e9;
  var dwarfPlanets = ["Ceres", "Pluto", "Eris", "Makemake", "Haumea"];

  solarSystem.getFiveCloseStars = function() {
    return fiveCloseStars;
  },
  solarSystem.getAgeOfSolarSystem = function() {
    return ageOfSolarSystem;
  },
  solarSystem.setAgeOfSolarSystem = function(age) {
    ageOfSolarSystem = age;
  },
  solarSystem.getDwarfPlanets = function(){
    return dwarfPlanets;
  },
  solarSystem.setDwarfPlanets = function(dwarves) {
    dwarfPlanets = dwarves;
  }
  return solarSystem;
})(solarSystem);

console.log(solarSystem.getAgeOfSolarSystem());
console.log(solarSystem.getPlanets());