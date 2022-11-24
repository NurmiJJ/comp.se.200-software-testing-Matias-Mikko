import chai from "chai"
import filter from "../filter.js"

const expect = chai.expect
const should = chai.should()

const users = [{ 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }];

const items = [{ 'item': 'es', 'sale': true }, 
{ 'item': 'playstation5', 'sale': false }]


describe("Filter tests", () => {
    it("Doesn't have the property", () =>{
        
        expect(filter(items, ({ sale }) => !sale)).to.eql([{'item': 'playstation5', 'sale': false }])
   
        //expect(filter(users, ({ active }) => active)).to.equal(new Array({ 'user': 'barney', 'active': true }));
    });
   })