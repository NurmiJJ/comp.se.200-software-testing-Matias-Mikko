import chai from "chai"
import filter from "../filter.js"

const expect = chai.expect
const should = chai.should()


const items = [{ 'item': 'es', 'sale': false, 'edible': true }, 
{ 'item': 'playstation5', 'sale': false, 'electronic': true },
{ 'item': 'flextape', 'sale': true, 'shippable': false },
{ 'item': 'xboxx', 'electronic': true, 'shippable': true },
{ 'item': 'xboxx', 'electronic': true, 'shippable': true}]


describe("Filter tests", () => {
    
    it("Item doesn't have the searched property", () =>{
        expect(filter(items[0], ({ sale }) => sale)).to.eql([[]])
    });

    it("Item has the searched property", () =>{
        expect(filter(items, ({ sale }) => sale)).to.eql([{ 'item': 'flextape', 'sale': true, 'shippable': false}])
    });

    it("Item category doen't exist on any item", () =>{
        expect(filter(items, ({ food }) => food)).to.eql([[]])
    });

    it("Items array have a duplicate item", () =>{
        expect(filter(items, ({ shippable }) => shippable)).to.eql([{ 'item': 'xboxx', 'electronic': true, 'shippable': true },
        { 'item': 'xboxx', 'electronic': true, 'shippable': true}])
    });
   })