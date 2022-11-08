import chai from "chai"
import eq from "../eq.js"

const expect = chai.expect


describe("string object is equal", () => {
    it("Testing string object to match", () =>{
        //expect(function() {eq("6","6")})
        expect(eq("3","3")).to.equal(true)
    });
   })