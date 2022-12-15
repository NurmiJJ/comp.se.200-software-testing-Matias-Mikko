import chai from "chai"
import memoize from "../src/memoize.js"

const expect = chai.expect

const object = { 'a': 1, 'b': 2 }
const other = { 'c': 3, 'd': 4 }

describe("Memoize tests", () => {

    it("Testing the memoize", () =>{
        const values = memoize(memoize)
        values.cache.set(object, ['a', 'b'])

        expect(values(object)).to.eql(['a', 'b'])
    });

});