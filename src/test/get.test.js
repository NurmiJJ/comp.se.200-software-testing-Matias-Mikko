import chai from "chai"
import get from "../get.js"

const expect = chai.expect
const should = chai.should()


const items = { 'category': [{ 'SaladFarmer2': { 'price': 2.99 } }] }
const items2 = {}

describe("Get tests", () => {
    
    it("Default value is not set and search value is undefined", () =>{
        expect(get(items , 'category.SaladFarmer2.price')).to.eql()
    });

    it("Default value is set and search value is undefined", () =>{
        expect(get(items , 'category[0].SaladFarmer2.price', 3.99)).to.equal(3.99)
    });

    it("When trying to get from non defined object", () =>{
        should.exist(expect(function() {get(items3 , 'category[0].SaladFarmer2.price', 3.99)}).to.throw(ReferenceError))
    });

    it("When trying to get from empty object", () =>{
        should.exist(expect(get(items2 , 'category[0].SaladFarmer2.price')).to.equal())
    });
})