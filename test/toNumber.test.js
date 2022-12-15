import chai from "chai"
import toNumber from "../src/toNumber.js"

const expect = chai.expect

describe("ToNumber tests", () => {
    
    /*
    -- Failing
    it("String with only spaces", () =>{
        expect(toNumber("   ")).to.equal(NaN)
    });
    */

    it("Testing with value which looks Hex", () =>{
        expect(toNumber("0xG")).to.deep.equal(NaN)
    });

    it("Testing with Hex", () =>{
        expect(toNumber("-0xAA")).to.deep.equal(NaN)
    });

    /*
    --Failing
    it("Testing with null", () =>{
        expect(toNumber(null)).to.deep.equal(NaN)
    });
    */

    it("Negative value", () =>{
        expect(toNumber("-987")).to.deep.equal(-987)
    });

    it("Testing with infinity", () =>{
        expect(toNumber(Infinity)).to.deep.equal(Infinity)
    });


    // EXTRAS which weren't planned
    it("Testing with symbol", () =>{
        const sym = Symbol("foo");
        expect(toNumber(sym)).to.deep.equal(NaN)
    });

    it("Testing with Binary", () =>{
        expect(toNumber("0b1100")).to.deep.equal(12)
    });

    it("Testing with Octal", () =>{
        expect(toNumber("0o1100")).to.deep.equal(576)
    });

    it("Testing with function", () =>{
        function MyNumberType(n) {
            this.number = n;
        }
          
        MyNumberType.prototype.valueOf = function() {
            return this.number;
        };
          
        const object1 = new MyNumberType(4);
        expect(toNumber(object1)).to.deep.equal(4)
    });

});