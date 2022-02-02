const Department = require("../lib/Department")
const inquirer = require('inquirer')

jest.mock('inquirer',()=>{
    return{prompt:jest.fn()}
})

describe("Test suit for the Department Class",()=>{

    it("Get all departments",async ()=>{
        expect(await Department.getAll()).toEqual(expect.any(Object))
    })

    it("Test Adding a new department",async ()=>{
        const initialNumberOfDepartments = (await Department.getAll()).length;
        inquirer.prompt.mockResolvedValueOnce({name: 'some@example.com'} );
        await Department.addNew()
        const updatedNumberOfDepartments = (await Department.getAll()).length;
        expect(typeof initialNumberOfDepartments).toBe(typeof updatedNumberOfDepartments)
        await expect(initialNumberOfDepartments).toBeLessThan(updatedNumberOfDepartments)
    })
})