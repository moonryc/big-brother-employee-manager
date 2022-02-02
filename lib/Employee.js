const Company = require('./Company')
const inquirer = require("inquirer");
const {addEmployeeQuestions} = require('../src/questions')


class Employee extends Company{

    constructor() {
        super();
        this.db = super.db
    }

    static getAll = async function () {
        try {
            const sql = `SELECT *
                         FROM employee`
            return (await (await this.db).query(sql))[0]
        } catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }

    static addNew = async function () {
        try{
            const {firstName, lastName,role_id,manager_id} = await inquirer.prompt(addEmployeeQuestions)
            const params = [firstName,lastName,role_id,manager_id]

            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                     VALUES (?,?,?,?)`
            const response = (await (await this.db).query(sql,params))
            console.log(`Successfully added Employee ${firstName} ${lastName}`)
        }catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }

    static updateEmployeeRole = function () {
        //TODO
    }

}

module.exports = Employee