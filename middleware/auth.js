

   const { unauthentication } = require("../errors")
   const jwt = require('jsonwebtoken')


   const authmiddleware = async(req,res,next) => {
   const authHeader = req.headers.authorization;

   if (!authHeader || !authHeader.startsWith('Bearer ')) {
   throw new unauthentication('No token provided')
   }

   const token  = authHeader.split(' ')[1]
   try {
   const decoded = jwt.verify(token,process.env.JWT_SECRET)
   const {id, username} = decoded
   req.user = {id, username}
   next()
   }
   catch (error) {
   throw new unauthentication('Not authorised to access this route')
   }

   }

   module.exports = authmiddleware
