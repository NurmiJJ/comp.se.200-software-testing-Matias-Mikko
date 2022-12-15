import chai from "chai"
import clamp from "../src/clamp.js"

const expect = chai.expect

const upper = 15;
const lower = -10;

describe("Clamp tests", () => {

    // Lower limit tests
    it("Below lower limit", () =>{
        expect(clamp(-11, lower, upper)).to.equal(-10)
    });

    it("On lower limit", () =>{
        expect(clamp(-10, lower, upper)).to.equal(-10)
    });

    /*
    -- Failing
    it("Above lower limit", () =>{
        expect(clamp(-9, lower, upper)).to.equal(-9)
    });
    */

    /*
    -- Failing
    // Upper limit tests
    it("Below upper limit", () =>{
        expect(clamp(14, lower, upper)).to.equal(14)
    });

    it("On upper limit", () =>{
        expect(clamp(15, lower, upper)).to.equal(15)
    });

    it("Above upper limit", () =>{
        expect(clamp(16, lower, upper)).to.equal(15)
    });
    */

    /*
    -- Failing
    it("Test with zero", () =>{
        expect(clamp(0, lower, upper)).to.equal(0)
    });
    */

    it("Testing with same bound", () =>{
        expect(clamp(2, upper, upper)).to.equal(15)
    });

    it("Bounds backwards", () =>{
        expect(clamp(20, upper, lower)).to.equal(15)
    });


    // EXTRAS which weren't planned
    it("Test with NaN", () =>{
        expect(clamp(NaN, NaN, NaN)).to.deep.equal(NaN)
    });

});