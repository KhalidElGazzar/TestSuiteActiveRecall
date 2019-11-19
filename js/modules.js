function Person(pFName, pLName,  pAge) {
    this.fName = pFName;
    this.lName = pLName;
    this.age = pAge;

    this.greet = function() {
        console.log(`Hello, my name is ${this.fName} ${this.lName} and I am ${this.age} years old`);
    }
}

function Pet(pName, pSpecies, pAge) {
    this.name = pName;
    this.species = pSpecies;
    this.age = pAge;

    this.greet = function() {
        if (this.species == 'cat')
            console.log(`Meoooow .. I am ${this.name} the ${this.species} & I am ${this.age} years old`);
        else if (this.species == 'dog')
            console.log(`Raf Raaf .. I am ${this.name} the ${this.species} & I am ${this.age} years old`);

    }
}

module.exports = {
    Person, 
    Pet
};