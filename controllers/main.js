

const jwt = require('jsonwebtoken')

const {badrequest} = require('../errors')

const login = async (req, res) => {
 
    const { username, password } = req.body
    if (!username || !password) {
      throw new badrequest('Please provide both username and password')
    }
    const id = new Date().getDate()
    const token = jwt.sign(
      { id, username },
      process.env.JWT_SECRET,
      { expiresIn: '59m' } 
    )

    res.status(200).json({ 
      msg: `${username} created token`,
      token 
    })
}



=


const dashboard = async (req,res) => {

 const luckyNumber =  Math.floor(Math.random() * 100)
   console.log(req.user)

  res.status(200).json({msg: `Hello ${req.user.username} your lucky number is ${luckyNumber}`})
}

module.exports = { dashboard,login }
