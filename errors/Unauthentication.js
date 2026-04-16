
const CustomAPIError = require('./custom-error')



const { StatusCodes } = require('http-status-codes') // ✅ capital S and C! 
class Unauthentication extends CustomAPIError {
  constructor(message) { 
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = Unauthentication