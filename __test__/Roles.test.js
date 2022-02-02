const Roles = require("../lib/Roles")
const inquirer = require('inquirer')

jest.mock('inquirer',()=>{
    return{prompt:jest.fn()}
})

describe("Roles test suit",()=>{
    it("Get all Roles",async ()=>{
        expect(await Roles.getAll()).toEqual(expect.any(Object))
    })

    it("Test Adding a new Roles",async ()=>{
        const initialNumberOfDepartments = (await Roles.getAll()).length;
        //TODO
        inquirer.prompt.mockResolvedValueOnce({
            title:"test",
            salary:"1500",
            department_id:"1"
        } );
        await Roles.addNew()
        const updatedNumberOfDepartments = (await Roles.getAll()).length;
        expect(typeof initialNumberOfDepartments).toBe(typeof updatedNumberOfDepartments)
        await expect(initialNumberOfDepartments).toBeLessThan(updatedNumberOfDepartments)
    })
})