const connection = require('../config/database')
const { getalluser, getuserbyid, updateUserById, deleteUserById } = require('../services/CRUD')

const getHomePage = async (req, res) => {
    let results = await getalluser()
    return res.render('home.ejs', { listusers: results })
}
const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}

const postcreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // connection.query(
    //     `INSERT INTO Users (email,name,city)
    //     VALUES ( ?, ?, ?)`,
    //     [email,name,city]
    // )
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email,name,city)  VALUES ( ?, ?, ?)`, [email, name, city]
    )
    return results
}

const getupdatepage = async (req, res) => {
    const userid = req.params.id

    let user = await getuserbyid(userid)
    res.render('edit.ejs', { useredit: user })
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;

    let name = req.body.name;

    let city = req.body.city;

    let userId = req.body.userId;


    await updateUserById(email, name, city, userId)



    // res.send(`updated`)
    res.redirect('/')
}


const postHandlerDeleteUser = async (req, res) => {
    const id = req.body.userId;

    console.log('aaaaaaaaaaaaaaa', id);

    await deleteUserById(id);

    res.redirect('/')

}
const postDeleteUser = async (req, res) => {


    const userid = req.params.id

    let user = await getuserbyid(userid)

    res.render('delete.ejs', { useredit: user })
}
module.exports = {
    getHomePage, postcreateUser,
    getCreatePage, getupdatepage, postUpdateUser, postDeleteUser, postHandlerDeleteUser
}