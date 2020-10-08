const express = require('express');

const { signup, signin, signout, requireSignin } = require('../controllers/authController')
const { userSignUpValidator, isRequestValidated } = require('../validator/index')

const router = express.Router();

router.post('/signup', userSignUpValidator,isRequestValidated, signup)
router.post("/signin", signin);
router.get("/signout", signout);

// router.get('/hello', requireSignin, (req,res)=>{
//     res.send('hello')
// })


module.exports = router;