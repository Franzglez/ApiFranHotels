// Using ES6 imports
const mongoose = require('mongoose');
const { pick } = require('lodash');

const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  "name": String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },

})

userSchema.methods.generateJWT = function () {
  return jwt.sign(
    pick(this, ['name', 'username']),
    process.env['jwt_privateKey']
  )
}


const User = mongoose.model('User', userSchema)

module.exports = User
