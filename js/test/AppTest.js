// Here we will place unit tests for the functions in modules

const Modules = require('../modules');
// const Mocha = require('mocha');
const assert = require('chai').assert;

// create Test suite for Person class
describe('TS01: Person Test suite', function() {
    // create test cases for Person class

    // create a new object for peson
    let fNameUnderTest  = 'Chris';
    let lNameUnderTest  = 'Adams';
    let ageUnderTest    = 27;

    let Chris = new Modules.Person(fNameUnderTest, lNameUnderTest, ageUnderTest);

    describe ('TS01A: Testing the data types', function () {
            it('TS01.TC01: Unit Test case for Person - Testing the person\'s first name is string.', function(){
                assert.typeOf(Chris.fName, 'string'); 
            })

            it('TS01.TC02: Unit Test case for Person - Testing the person\'s last name is string.', function(){
                assert.typeOf(Chris.lName, 'string'); 
            })

            it('TS01.TC03: Unit Test case for Person - Testing the person\'s age is number.', function(){
                assert.typeOf(Chris.age, 'number'); 
            })
        }
    )

    describe ('TS01B: Testing the values', function () {
            it('TS01.TC04: Unit Test case for Person - Testing the person\'s first name.', function(){
                assert.equal(Chris.fName, fNameUnderTest); 
            })
        
            it('TS01.TC05: Unit Test case for Person - Testing the person\'s last name.', function(){
                assert.equal(Chris.lName, lNameUnderTest); 
            })
        
            it('TS01.TC06: Unit Test case for Person - Testing the person\'s age.', function(){
                assert.equal(Chris.age, ageUnderTest); 
            })
        }
    )

    
})