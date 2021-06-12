const express =  require('express');
const userController = require('../controllers/usercontoller');
const router =  express.Router();


router.post('/signup',userController.userSignup);
router.post('/login',userController.userLogin);
router.get('/getinfo',userController.userGetInfo);

module.exports=router;
