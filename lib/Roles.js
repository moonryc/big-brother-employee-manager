const Company = require('./Company')
const db = require("../db/connection");
const {addRoleQuestions} = require('../src/questions')
const inquirer = require("inquirer");

class Roles extends Company {

    constructor() {
        super();
        this.db = super.db
    }

    static getAll = async function () {
        try {
            const tempDB = await db
            // console.log(newDB)
            const sql = `SELECT *
                         FROM role`
            return (await (await this.db).query(sql))[0]
        } catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }

    static addNew = async function () {
        try{
            const {title,salary,department_id} = await inquirer.prompt(addRoleQuestions)
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