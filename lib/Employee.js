const Company = require('./Company')
const db = require("../db/connection");

class Employee extends Company{

    static getAll = async function () {
        try {
            const tempDB = await db
            // console.log(newDB)
            const sql = `SELECT *
                         FROM employee`
            return await tempDB.query(sql)
        } catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }

    static addNew = async function (firstName,lastName,role_id,manager_id) {
        try{
            const params = [firstName,lastName,role_id,manager_id]
            const tempDB = await db
            const sql = `INSERT INTO employee
                     VALUES (?,?,?,?)`
            await tempDB.query(sql,params)
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

module.export = Employee