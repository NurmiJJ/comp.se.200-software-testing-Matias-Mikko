import chai from "chai"
import drop from "../src/drop.js"

const expect = chai.expect
const should = chai.should()
const assert = chai.assert

var items = ["cucumber", "tomato", "potato", "wheat"]
var items2 = []

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


})