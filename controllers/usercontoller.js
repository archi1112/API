const HttpError = require('../utilities/http-error');

const userSignup = (req,res,next) => {
    console.log(req.body);
    res.JSON({"message":"user signed up"});
}

const userLogin = (req,res,next) => {
    console.log(req.body);
    res.status(300).JSON({"message":"user logged up"});
}

const userGetInfo = (req,res,next) =>{
    res.JSON({"user":{"NAME":"ARCHI","AGE":18}});
}

exports.userSignup = userSignup;
exports.userLogin = userLogin;
exports.userGetInfo = userGetInfo;