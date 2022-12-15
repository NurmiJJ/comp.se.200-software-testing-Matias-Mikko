import chai from "chai"
import capitalize from "../src/capitalize.js"

const expect = chai.expect

describe("Capitalize tests", () => {

    it("String with only spaces", () =>{
        expect(capitalize("   ")).to.equal("   ")
    });

    it("String with numbers", () =>{
        expect(capitalize("abc123")).to.equal("Abc123")
    });

    it("String that start a number", () =>{
        expect(capitalize("1a2b3c")).to.equal("1a2b3c")
    });

    it("Normal string", () =>{
        expect(capitalize("pekka")).to.equal("Pekka")
    });

    it("String with special characters", () =>{
        expect(capitalize("äkkiä!")).to.equal("Äkkiä!")
    });
    
});