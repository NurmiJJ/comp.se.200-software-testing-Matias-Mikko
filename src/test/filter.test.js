import chai from "chai"
import filter from "../filter.js"

const expect = chai.expect
const should = chai.should()


const items = [{ 'item': 'es', 'sale': false}, 
{ 'item': 'chocolate', 'sale': false, 'sweet': true },
{ 'item': 'mikropizza', 'sale': true, 'shippable': false },
{ 'item': 'gingerbread', 'sweet': true, 'shippable': true },
{ 'item': 'gingerbread', 'sweet': true, 'shippable': true}]


describe("Filter tests", () => {

    it("Item doesn't have the searched property", () =>{
        should.exist(expect(filter(items[0], ({ sale }) => sale)).to.eql([[]]))
    });

    it("Item has the searched property", () =>{
        expect(filter(items, ({ sale }) => sale)).to.eql([{ 'item': 'mikropizza', 'sale': true, 'shippable': false}])
    });

    it("Item category doen't exist on any item", () =>{
        should.exist(expect(filter(items, ({ food }) => food)).to.eql([[]]))
    });

    it("Items array have a duplicate item", () =>{
        expect(filter(items, ({ shippable }) => shippable)).to.eql([{ 'item': 'gingerbread', 'sweet': true, 'shippable': true },
        { 'item': 'gingerbread', 'sweet': true, 'shippable': true}])
    });
   })