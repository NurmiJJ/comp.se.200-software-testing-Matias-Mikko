import chai from "chai"
import drop from "../src/drop.js"

const expect = chai.expect
const should = chai.should()
const assert = chai.assert

var items = ["cucumber", "tomato", "potato", "wheat"]
var items2 = []
var items3 = ["tomato"]

describe("Drop tests", () => {

    it("Dropping more than the lenght of the array", () => {
        expect(drop(items,6)).to.eql([])
    });

    it("Dropping with negative number", () => {
        expect(drop(items,-1)).to.eql(items)
    });

    it("Dropping with zero", () => {
        expect(drop(items, 0)).to.eql(items)
    });

    it("Dropping from an empty array", () => {
        expect(drop(items2, 2)).to.eql([])
    });

    // EXTRAS which weren't planned
    it("Dropping without giving the amount to drop", () => {
        expect(drop(items)).to.eql(["tomato", "potato", "wheat"])
    });

    it("Dropping with another array", () => {
        expect(drop(items, items3)).to.eql(items)
    });

    it("Dropping from null", () => {
        expect(drop(null, 1)).to.eql([])
    });

    it("Dropping with null", () => {
        expect(drop(items, null)).to.eql(items)
    });
})