import chai from "chai"
import get from "../src/get.js"

const expect = chai.expect
const should = chai.should()
const assert = chai.assert


const items = { 'category': [{ 'SaladFarmer2': { 'price': 2.99 } }] }
const items2 = {}

// const object = { 'a': [{ 'b': { 'c': 3 } }] }
//
// get(object, 'a[0].b.c')
// // => 3
//
// get(object, ['a', '0', 'b', 'c'])
// // => 3
//
// get(object, 'a.b.c', 'default')
// // => 'default'
///

describe("Get tests", () => {

    it("Default value is not set and search value is undefined", () => {
        should.exist(expect(get(items, 'category.SaladFarmer2.price')).to.eql())
    });

    it("Default value is set and search value is undefined", () => {
        should.exist(expect(get(items, 'category.SaladFarmer2.price', 3.99)).to.equal(3.99))
    });

    it("When trying to get from non defined object", () => {
        assert.throws((function () { get(items3, 'category[0].SaladFarmer2.price', 3.99) }), ReferenceError)
    });

    it("When trying to get from empty object", () => {
        should.exist(expect(get(items2, 'category[0].SaladFarmer2.price')).to.equal())
    });

    // EXTRAS which weren't planned
    it("Testing getting with array of steps", () => {
        should.exist(expect(get(items, ['category', '0', 'SaladFarmer2','price'])).to.eql(2.99))
    });

    it("Testing getting from null object", () => {
        should.exist(expect(get(null, ['category', '0', 'SaladFarmer2','price'])).to.eql())
    });

})