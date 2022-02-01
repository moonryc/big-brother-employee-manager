const Company = require('./Company')
let db = require('../db/connection')

class Department extends Company {

    constructor() {
        super();
    }

    static getAll = async function () {
        try {
            const tempDB = await db
            // console.log(newDB)
            const sql = `SELECT *
                         FROM department`
            return await tempDB.query(sql)
        } catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }

    static addNew = async function (name) {
        try{
            const tempDB = await db
        const sql = `INSERT INTO department
                     VALUES (?)`
            await tempDB.query(sql,name)
        }catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }


}

module.export = Department

// console.log(Department.getAll())
// console.log("++++++++++++++++");
//
// (async function () {
//
//     await console.log(await Department.getAll())
// })()
//
// console.log("++++++++++++++++")
