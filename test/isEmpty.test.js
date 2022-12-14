import chai from "chai"
import isEmpty from "../src/isEmpty.js"

const expect = chai.expect
const should = chai.should()
const assert = chai.assert

var nulls = [null, null, null, null, null]
var nulls_map = new Map([[null, null],[null, null],[null, null]]);

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
})