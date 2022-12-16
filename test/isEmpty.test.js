import chai from "chai"
import isEmpty from "../src/isEmpty.js"

const expect = chai.expect
const should = chai.should()
const assert = chai.assert

var nulls = [null, null, null, null, null]
var nulls_map = new Map([[null, null],[null, null],[null, null]]);

var man = {name: 'aman'}

describe("isEmpty tests", () => {

    it("Null value", () => {
        expect(isEmpty(null)).to.equal(true)
    });

    it("Array with only null values", () => {
        expect(isEmpty(nulls)).to.equal(false)
    });

    it("Map with only null keys and values", () => {
        expect(isEmpty(nulls_map)).to.equal(false)
    });

    it("Empty String", () => {
        expect(isEmpty("")).to.equal(true)
    });

    it("Empty String with one space", () => {
        expect(isEmpty(" ")).to.equal(false)
    });

    // EXTRAS which weren't planned
    it("Undefined object", () => {
        expect(isEmpty()).to.equal(true)
    });

    it("Empty Array", () => {
        expect(isEmpty([])).to.equal(true)
    });
    it("Empty Map", () => {
        expect(isEmpty([{}])).to.equal(false)
    });

    it("Number", () => {
        expect(isEmpty(123)).to.equal(true)
    });

    it("Trying to get key which doesn't exist in the map", () => {
        expect(isEmpty(nulls_map.get(" "))).to.equal(true)
    });

    it("Trying to get value which doesn't exist in the array", () => {
        expect(isEmpty(nulls[6])).to.equal(true)
    });

    it("boolean", () => {
        expect(isEmpty(true)).to.equal(true)
    });

    it("Prototype test", () => {
        function Person () {
            this.name = 'Pekka',
            this.age = 23
        }
        
        const person = new Person();
        Person.prototype.gender = 'male';
    
        expect(isEmpty(Object.getPrototypeOf(person))).to.equal(false)
    });

    it("Testing with object", () => {
        expect(isEmpty(man)).to.equal(false)
    });

})