const Company = require('./Company')
const db = require("../db/connection");

class Roles extends Company {

    static getAll = async function () {
        try {
            const tempDB = await db
            // console.log(newDB)
            const sql = `SELECT *
                         FROM role`
            return await tempDB.query(sql)
        } catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }

    static addNew = async function (title,salary,department_id) {
        try{
            const params = [title,salary,department_id]
            const tempDB = await db
            const sql = `INSERT INTO role
                     VALUES (?,?,?)`
            await tempDB.query(sql,params)
        }catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }
}

module.export = Roles