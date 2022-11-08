import chai from "chai"
import eq from "../eq.js"

const expect = chai.expect


describe("string object is equal", () => {
    it("Testing string object to match", () =>{
        //expect(function() {eq("6","6")})
        expect(eq(2,2)).to.equal(true)
    });
   })