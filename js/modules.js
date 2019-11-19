function Person(pFName, pLName,  pAge) {
    this.fName = pFName;
    this.lName = lName;
    this.age = pAge;

    greet() {
        console.log(`Hello, my name is ${this.fName + this.lName} and I am ${this.age} years old`);
    }
}

function Pet(pName, pSpecies, pAge) {
    this.name = pName;
    this.species = pSpecies;
    this.age = pAge;

    greet() {
        if (this.species == 'cat')
            console.log(`Meoooow from ${this.name} the ${this.species}`);
        else if (this.species == 'dog')
            console.log(`Raf Raaf from ${this.name} the ${this.species}`);

    }
}

modules.export = [
    Pet(), 
    Person()
];