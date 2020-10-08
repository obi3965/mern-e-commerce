const JWT = require('jsonwebtoken')
const expressJwt = require('express-jwt');

const User = require('../models/user')
const { errorHandler } = require('../helpers/dbErrorHandler')


exports.signup = (req,res) =>{
    const user = new User(req.body)

    user.save((err, user)=>{
        if(err){
            return res.status(400).json({
                err: errorHandler(err)
            })
        }
        user.salt = undefined
        user.hashed_password = undefined
        res.json({
            user
        })
    })
}


//LOGIN ROUTE FOR USERS
exports.signin = (req,res) => {
//Find the user based on email
const { email, password } = req.body
User.findOne({email}, (err, user)=>{
 if(err || !user){
     return res.status(400).json({
         error: 'user not exist with that email and password'
     })
 }
 //if user is found make sure the email and password match

 //create authenticate method in user model
 if(!user.authenticate(password)){
     if(err || !user){
         return res.status(400).json({
             error: 'user with that email not exist'
         })
     }
 }
 //generate a signed token with user id and secret
 const token = JWT.sign({_id: user._id}, process.env.JWT_TOKEN)
  //persist the token as 't' in cokkie with expiry date
  res.cookie('t', token, { expire: new Date() + process.env.EXPIRES_IN})
  //return token and user to client
  const { _id, name, email, role } = user
  return res.status(200).json({
      token,
      user:{ _id, name, email, role}
  })
})
}



//SIGNOUT ROUTE
exports.signout = (req,res) =>{
    res.clearCookie('t');
    res.json({message: "you are signed out now"})
}


exports.requireSignin = expressJwt({
    secret: process.env.JWT_TOKEN,
    algorithms: ["HS256"], // added later
    userProperty: "auth",
  });



  //authentication middleware
  exports.isAuth = (req,res, next) =>{
      let user = req.profile && req.auth && req.profile._id == req.auth._id
      if(!user){
          return res.status(403).json({
              error:'Acces Denied'
          })
      }
      next()
  }

  exports.isAdmin = (req, res, next) =>{
      if(req.profile.role === 0){
          return res.status(403).json({
              error:'Admin Acces Denied'
          })
      }
      next()
  }