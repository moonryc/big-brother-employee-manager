require('dotenv').config({path:'../.env'})
const Company = require('./Company')

const inquirer = require("inquirer");
const {addDepartmentQuestions} = require('../src/questions')

class Department extends Company {

    constructor() {
        super();
        this.db = super.db
    }

    /**
     * Gets an array of Departments and their department ids
     * @returns {Promise<*>}
     */
    static async getAll() {
        try {
            const sql = `SELECT *
                         FROM department`
            return (await (await this.db).query(sql))[0]
        } catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }

    static addNew = async function () {

        try {
            const {name} = await inquirer.prompt(addDepartmentQuestions)
            const sql = `INSERT INTO department (name)
                         VALUES ( ? )`
            const response = (await (await this.db).query(sql, name))
            console.log(`Successfully added Department ${name}`)
        } catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }
}

module.exports = Department;


// (async ()=>{await Department.addNew()})()


// console.log(Department.getAll())
// console.log("++++++++++++++++");
//
// (async function () {
//
//     await console.log(await Department.getAll())
// })()
//
// console.log("++++++++++++++++")

// Department.getAll()