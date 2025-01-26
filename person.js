// As assignments take different example and practice with below concept:
// ● Class with constructor
// ● class parameter properties :
// ● Write logic for Remove duplicate items from an array ?
// Ex : var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log("Class with constructor");
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person1 = new Person('Alice', 30);
person1.greet(); 

console.log("================================================================");

console.log("Class parameter properties");
class Car {
    constructor({ brand, model, year }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);

    }
}
const car = new Car({ brand: 'Toyota', model: 'Camry', year:2020 });
car.displayInfo();


console.log("=================================================================");

console.log("Remove Duplicates");
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
  
var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
var uniqueArr = removeDuplicates(inputArr);
console.log(`Original array: ${inputArr}`); 
console.log(`After removing duplicate array: ${uniqueArr}`);

