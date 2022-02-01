const Department = require("../lib/Department")

describe("Test suit for the Department Class",()=>{

    it("Get all departments",async ()=>{

        // const spy = jest.spyOn(Department,"getAll")

        console.log(Department.getAll())

        expect(await Department.getAll()).toBeDefined()
        // expect(spy).toEqual(expect.any(Object))

    })



})