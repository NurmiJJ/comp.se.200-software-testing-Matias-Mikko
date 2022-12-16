import chai from "chai"
import memoize from "../src/memoize.js"

const expect = chai.expect

const object = { 'a': 1, 'b': 2 }
const other = ["abc", "123"]

describe("Memoize tests", () => {

    it("Testing the memoize", () =>{
        const values = memoize(memoize)
        values.cache.set(object, ['a', 'b'])

        expect(values(object)).to.eql(['a', 'b'])
    });

    it("Modify cache with unoriginal size", () =>{
        const values = memoize(memoize)
        values.cache.set(object, ['a'])

        expect(values(object)).to.deep.equal(['a'])
    });

    it("Modify cache to null", () =>{
        const values = memoize(memoize)
        values.cache.set(other, null)

        expect(values(other)).to.equal(null)
    });

    it("Modify cache with same values", () =>{
        const values = memoize(memoize)
        values.cache.set(other, ['abc', "123"])

        expect(values(other)).to.deep.equal(['abc', "123"])
    });


    // EXTRAS which weren't planned
    it("Value is not a function", () =>{
        expect(function() {memoize("abc")}).to.throw(TypeError)
    });
    
});