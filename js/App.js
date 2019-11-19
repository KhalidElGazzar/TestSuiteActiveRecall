let Person  = require ('./modules').Person;
let Pet     = require ('./modules').Pet;

let John = new Person("John", "Smith", 31);
John.greet();

let Jane = new Person("Jane", "Adams", 33);
Jane.greet();

let Fluffy = new Pet("Fluffy", "cat", 4);
Fluffy.greet();

let PursLoud = new Pet("PursLoud", "dog", 3);
PursLoud.greet();

