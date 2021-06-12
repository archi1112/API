// buisness login written in controller
const HttpError = require('../utilities/http-error');

const adminSignup = (req,res,next) => {
    console.log(req.body);
    res.JSON({"message":"user signed up"});
}

const adminLogin = (req,res,next) => {
    console.log(req.body);
    res.status(300).JSON({"message":"user logged up"});
}

exports.adminLogin = adminLogin;
exports.adminSignup = adminSignup;