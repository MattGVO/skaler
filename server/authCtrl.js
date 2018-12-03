const bcrypt = require('bcryptjs');
require('dotenv').config();

const { HOME_PATH } = process.env;

module.exports = {
    async signup(req,res) {
        let {email, password} = req.body
        let db = req.app.get('db');
        let [foundUser] = await db.user.find_user([email])
        if (foundUser) return res.status(200).send({message: 'That email has already been registered'})
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let [registeredUser] = await db.user.create_user([email, hash]);
        req.session.user = registeredUser;
        res.status(200).send({message: 'loggedIn'});
    },
    async login(req,res) {
        let {email, password} = req.body
        let db = req.app.get('db');
        let [foundUser] = await db.user.find_user([email])
        if (foundUser) {
            let result = bcrypt.compareSync(password, foundUser.userhash)
            if (result) {
                req.session.user = foundUser;
                res.status(200).send({message: 'loggedIn'})
            } else {
                res.status(401).send({message: 'Incorrect password'})
            }
        }else {
            res.status(401).send({message: 'That has not been registered yet.'})
        }
    },
    userData(req,res) {
        if (req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(200)
        }
    },
    logout(req,res) {
        req.session.destroy();
        res.status(200).send('Thank for to come to my site!')
        res.redirect(HOME_PATH)
    },
    
}