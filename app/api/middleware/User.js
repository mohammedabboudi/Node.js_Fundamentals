


const logger = function (req, res, next){

    console.log(`heloooooo from the logger...`);
    next();
}

// const userCredentialsHolder = function (req, res, next){

//     let userCredentials = {

//         firstName : req.body.firstName,
//         lastName : req.body.lastName,
//         age : req.body.age,
//         password : req.body.password

//     }
// }


module.exports = { logger };