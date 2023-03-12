const userModel = require('../models/user')

const express = require('express');
const router = express.Router();

router.post('/register',(req,res)=>{
    const {email,password} = req.body;

    const newUser = new userModel({
        email: email,
        password: password
    });

    var result = newUser.save();

    res.status(200).json({
        result:result
    })
})


module.exports = router;