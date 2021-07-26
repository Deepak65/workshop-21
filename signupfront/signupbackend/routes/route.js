const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodels')
const bcrypt = require('bcrypt')

router.post('/signup', async (req, res) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)
    const securePassword2 = await bcrypt.hash(req.body.Confirmpassword, saltPassword)
    const signedUpUser = new signUpTemplateCopy({
        fullName:req.body.fullName,
        Mobile:req.body.Mobile,
        email:req.body.email,
        password:securePassword,
        Confirmpassword:securePassword2
    })
    signedUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/sigin')
module.exports = router