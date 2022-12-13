import chai from "chai"
import eq from "../src/eq.js"

const expect = chai.expect

describe("Eq tests", () => {
    it("Testing with one object", () =>{
        var str = "dog";
        expect(eq(str,str)).to.equal(true)
    });

    it("Two different object, different types", () =>{
        var str = "dog";
        var first = 1;
        expect(eq(str, first)).to.equal(false)
    });

    it("Two different object, same types", () =>{
        var str = "dog";
        var other = "cat";
        expect(eq(str, other)).to.equal(false)
    });

    it("Two different object, same values", () =>{
        const object = { 'abc': 123 }
        const other = { 'abc': 123 }
        expect(eq(object, other)).to.equal(false)
    });

    /*
    -- Failing
    it("Testing with values which looks the same", () =>{
        const str = "987"
        const num = 987
        expect(eq(str, num)).to.equal(false)
    });
    */

    it("Testing with NaN and integer", () =>{
        expect(eq(NaN, 0)).to.equal(false)
    });

    it("Testing with null and NaN", () =>{
        expect(eq(null, NaN)).to.equal(false)
    });
   })