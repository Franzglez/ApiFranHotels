// Using ES6 imports
const mongoose = require('mongoose');
const { pick } = require('lodash');

const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({ 
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: {type: String, required: true},
  phone: {type: String, required: true},
  name: String,
  country: String,
  isAdmin: Boolean,
  reservaHotel: String,
  

})

userSchema.methods.generateJWT = function () {
  return jwt.sign(
    pick(this, ['name', 'username']),
    process.env['jwt_privateKey']
  )
}


const User = mongoose.model('User', userSchema)

module.exports = User
