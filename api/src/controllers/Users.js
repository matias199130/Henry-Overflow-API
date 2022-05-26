const { Post, Tag, User, Comment} = require('../db');

const getUser = async(req, res, next) => {
    const { idUser } = req.params;
    const {first_name, last_name} = req.query;
   
    try {
        const response = await User.findAll()
        if(idUser){
            let userId = response.filter(el => el.id == idUser);
            userId.length ? res.status(200).send(userId) : res.status(400).send("user not found")
        } 
        // if(first_name && last_name){
        //     let userName = response.filter(el => el.first_name.toLowerCase().includes(first_name.toLowerCase()));
        //     let userLastName = response.filter(el => el.last_name.toLowerCase().includes(last_name.toLowerCase()));
        //     if(userName === userLastName){
        //       userName? res.send(userName) : res.status(400).send("User not found")
        //     }
        //     let fullName = userName.concat(userLastName);
        //     fullName.length ? res.send(fullName) : res.status(400).send("User not found")
        // } 
        if(first_name){
            let userName = response.filter(el => el.first_name.toLowerCase().includes(first_name.toLowerCase()));
            userName.length ? res.send(userName) : res.status(400).send("User not found")
        }
        if(last_name){
            let lastName = response.filter(el => el.last_name.toLowerCase().includes(last_name.toLowerCase()));
            lastName.length ? res.send(lastName) : res.status(400).send("User not found")
        }
        res.json(response)
    } catch (error) {
        next(error)
    }
}


const postUser = async(req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser)
    } catch (error) {
        next(error)
    }
}

const updateUser = (req, res, next) => {
    const { idUser } = req.params;
    const {first_name, last_name, email, password, rating, badges, isAdmin, role, twitter, github, portfolio} = req.body;
    return User.update(
        {first_name, last_name, email, password, rating, badges, isAdmin, role, twitter, github, portfolio},{
            where: {id: idUser},  raw : true 
        },
    ).then(updatedUser => res.send(updatedUser))
    .catch(error => next(error))
}

// const deleteUser = (req, res, next) => {
//     const id = req. params.id;
//     return User.destroy({
//         where: {
//             id
//         }
//     }).then(() => {res.status(200).send("User deleted successfully")})
//     .catch(error => next(error))
// }

module.exports = {
    getUser,
    postUser,
    updateUser,
    // deleteUser
}
