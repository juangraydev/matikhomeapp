const express = require("express");
let router = express.Router();
const bcrypt = require('bcrypt');
let { addUser, getUserByEmail } = require('../../shared/constant/sqlContant');
const db = require('../../config/database');
const { genToken } = require('../../shared/util/genToken');

router
    .route("/signin")
    .post(async (req, res) => {
        
        try {
            console.log(req.body.email)
            const data = await db.query(getUserByEmail(req.body.email));
            
            const user = data[0][0];
            console.log(user)
            if(user){
                bcrypt.compare(req.body.password, user.password, function(err, result) {
                
                    if (result){
                        let userToken = genToken(user.id);
                        res.status(200).json({token: userToken, display: user.display, email: user.email});
                    }else {
                        res.status(401).send();
                    }
                });
            }else {
                res.status(401).send();
            }
        } catch(e) {
            console.log(e);
            res.status(500).send({"error": e});
        }
    })

router
    .route("/signup")
    .post( async(req, res) => {
        const {displayName, email, password} = req.body;
        console.log(req.body);
        try {
            const hashedPassword = await new Promise((resolve, reject) => {
                bcrypt.hash(password, 10, function(err, hash) {
                    if (err){
                        reject(err)
                    }else{
                        resolve(hash)
                    }
                });
            })
            await db.query(addUser({displayName , email, hashedPassword}));

            const data = await db.query(getUserByEmail(email));
            let user = data[0][0];
            let userToken = genToken(user.id);
            res.status(200).json({token: userToken, display: user.display, email: user.email});
                    

        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }

    })

module.exports = router;