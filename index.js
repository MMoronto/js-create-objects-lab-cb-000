'use strict';
function Animal(species, name, breed, age, foodRequirements, waterConditions) {
  this.species = species;
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.foodRequirements = foodRequirements;
  this.waterConditions = waterConditions;
}

var dog = new Animal('dog', '')