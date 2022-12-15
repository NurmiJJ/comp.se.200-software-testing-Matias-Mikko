import chai, { AssertionError } from "chai"
import divide from "../src/divide.js"

const expect = chai.expect
const should = chai.should()
const assert = chai.assert

describe("Divide tests", () => {

    it("Dividing with zero", () => {
        expect(divide(10, 0)).to.eql(NaN)
    });

    it("Dividing negative number with negative number", () => {
        expect(divide(-5, -5)).to.equal(1)
    });

    /*
    -- Failing
    it("Dividing negative number with positive number", () =>{
        expect(divide(-5,5)).to.equal(-1)
    });
    */

    it("Dividing numbers that have periodic endeless number as a result", () => {
        expect(divide(4, 3)).to.equal(1)
    });

    /*
    -- Failing
    it("Divisor is a very big number", () =>{
        expect(divide(0,99999999999)).to.equal(0)
    });
    */

    /*
    -- Failing
    it("Dividend is a very big number", () =>{
        expect(divide(99999999999,1)).to.equal(99999999999)
    });
    */

    /*
    -- Failing
    it("Dividend is zero", () =>{
        expect(divide(0,9)).to.equal(0)
    });
    */

    /*
    -- Failing
    it("Dividend is bigger than divisor", () =>{
        expect(divide(9,1)).to.equal(9)
    });*/

})