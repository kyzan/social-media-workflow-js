const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_secret = require("../keys.js");
const requireLogin = require("../middleware/requireLogin.js");

router.get('/', (req, res) => {
    res.send("Hello");
})

// router.get('/createPost', requireLogin, (req, res) => {
//     console.log('hello auth');
// });

router.post("/signup", (req, res) => {
    const {name, userName, email, password} = req.body;
    
    if(!name || !email || !userName || !password) {
        return res.status(422).json({error : "Data missing"});
    }

    USER.findOne({$or : [{email:email},{userName:userName}]}).then((savedUser) => {
        if(savedUser) {
            return res.status(422).json({error: "User already exists"});
        } 

        bcrypt.hash(password, 12).then((hash) => {
            const user = new USER({
                name,
                userName,
                email,
                password: hash
            });
            user.save()
            .then(user => {
                res.json({message: "User saved"});
            })
            .catch(err => console.log(err));
        })


    })
    

});

router.post("/signin", (req, res) => {
    const {userName, password} = req.body;

    if(!userName || !password) {
        return res.status(422).json({error: "Please add email and password"});
    }

    USER.findOne({userName: userName}).then((savedUser) => 
    {
        if(!savedUser) {
            return res.status(422).json({error: "Invalid username"});
        }
        bcrypt.compare(password, savedUser.password).then((match) => {
            if(match) {
                // return res.status(200).json({message: "Signed in!"});
                const token = jwt.sign({ _id: savedUser.id }, jwt_secret);
                res.json(token);
                console.log(token);
            } else {
                return res.status(422).json({error: "Invalid password"})
            }
        })
        .catch(err => console.log(err));
    })
});



module.exports = router