
const connection = require('../config/database')


const getalluser = async () => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users u`)
        return results
}

const getuserbyid = async (userid) => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users u WHERE id = ?`, [userid]
    )
    let user = results && results.length >0? results[0] : {}
    return user
}

const updateUserById = async (email, name, city, userId)=>{
    let [results, fields] = await connection.query(
        `UPDATE Users 
SET email = ? , name = ?,city = ?
WHERE id =?`, [email, name, city, userId]);
}

const deleteUserById = async (id) =>{
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`, [id]
    )
}

module.exports = {
    getalluser, getuserbyid,updateUserById, deleteUserById
}