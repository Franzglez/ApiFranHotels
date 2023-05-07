const { Router } = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const User = require('../Models/User');
const jwt = require("jsonwebtoken");

const privatKey = "passwordusers";

//Raiz
router.post('/signup', async (req, res) => {
    const { password: passwordPlainText, ...rest } = req.body

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(passwordPlainText, salt)

    const newUser = await User.create({ password, ...rest })

    const token = newUser.generateJWT()

    res.setHeader('x-auth-token', token).json(newUser)
})

router.post('/signin', async (req, res) => {
    const { password: passwordPlainText, username } = req.body

    const user = await User.findOne({ username })

    const isAuth = await bcrypt.compare(passwordPlainText, user.password)

    const token = jwt.sign({ username, name: user.name }, process.env['jwt_privatKey'])

    res.setHeader('x-auth-token', token)
    res.send('Te has logeado')
})


module.exports = router;