const Company = require('./Company')
const db = require("../db/connection");
const inquirer = require("inquirer");
const Department = require('./Department')

class Roles extends Company {

    constructor() {
        super();
        this.db = super.db
    }

    static getAll = async function () {
        try {
            // console.log(newDB)
            const sql = `
                SELECT role.id, role.title, role.salary, department.name AS department_name
                FROM role
                         LEFT JOIN department ON role.department_id = department.id;`
            return (await (await this.db).query(sql))[0]
        } catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }

    static addNew = async function () {

        try{
            this.addRoleQuestions =[
                {
                    message:"What is the Role title?",
                    name:"title",
                    type:"input",
                    validate:(input)=>{
                        if (input && input.length <31) {
                            return true
                        }
                        console.log("Please enter a valid name less than 30 characters")
                        return false
                    }
                },
                {
                    message:"What is the role's salary",
                    name:"salary",
                    type:"number",
                    validate:(input)=>{
                        if(typeof input === "number" && 9999999999999.99 > input >  -9999999999999.99){
                            return true
                        }
                        console.log("Please enter a valid Salary using numbers in the range of 9,999,999,999,999.99 to -9,999,999,999,999.99")
                        return false
                    }
                },
                {
                    message: "what department is this role",
                    name:"department_id",
                    type: "list",
                    choices:(await Department.getAll()).map(item=>{
                        return {name: item.name, value:item.id}
                    })
                }
            ]
            const {title,salary,department_id} = await inquirer.prompt(this.addRoleQuestions)
            const params = [title,salary,department_id]
            const sql = `INSERT INTO role (title, salary, department_id)
                     VALUES (?,?,?)`
            const response = (await (await this.db).query(sql, params))
            console.log(`Successfully added Role: ${title}`)
        }catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }
}

module.exports = Roles