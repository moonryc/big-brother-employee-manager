const Employee = require("../lib/Employee")
const inquirer = require('inquirer')

jest.mock('inquirer',()=>{
    return{prompt:jest.fn()}
})

describe("Test suit for the Employee Class",()=>{

    it("Get all Employees",async ()=>{
        expect(await Employee.getAll()).toEqual(expect.any(Object))
    })

    it("Test Adding a new Employees",async ()=>{
        const initialNumberOfDepartments = (await Employee.getAll()).length;
        //TODO
        inquirer.prompt.mockResolvedValueOnce({
            firstName:"newPerson",
            lastName:"lastName",
            role_id:"1",
            manager_id:null
        } );
        await Employee.addNew()
        const updatedNumberOfDepartments = (await Employee.getAll()).length;
        expect(typeof initialNumberOfDepartments).toBe(typeof updatedNumberOfDepartments)
        await expect(initialNumberOfDepartments).toBeLessThan(updatedNumberOfDepartments)
    })
})