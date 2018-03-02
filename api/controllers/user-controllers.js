const shortid = require('shortid');
const User = require('../models').User;
const appRoot = require('app-root-path');
const env = process.env.NODE_ENV || 'development';
const config = require(appRoot + '/config/wannacry/conf.json')[env];
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

exports.signup = (req, res, next) => {

    const _id = shortid.generate();
    const _username = req.body.username;
    const _password = req.body.password;
    const _phone = req.body.phone;

    User.findOne({
        where : { username: _username }
    })
    .then(found1 => {
        if(!found1) {
            bcrypt.hash(_password, bcrypt.genSaltSync(config.saltRounds), null, (err, hash) => {

                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    
                    User.findOne({
                        where : { phone: _phone }
                    })
                    .then(found2 => {
                        if(!found2) {
                            const user = {
                                id: _id,
                                username: _username,
                                password: hash,
                                fullname: "Ngo Minh Tu",
                                phone: _phone
                            }
                
                            User.create(user)
                                .then(user => {
                                    console.log(user);
                                    res.status(200).json({
                                        message: 'Signup Successfully!'
                                    });
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        error: err
                                    });
                                })
                        } else {
                            res.status(409).json({
                                message: 'Phone number is already registered!'
                            });
                        }
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    })
                }
            })
        } else {
            res.status(409).json({
                message: 'The username already exists!'
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })

}

exports.signin = (req, res, next) => {

    const _username = req.body.username;
    const _password = req.body.password;
    const condition = {
        username: _username
    }

    User.findOne({
            where: condition
        })
        .then(user => {
            bcrypt.compare(_password, user.password, (err, passStatus) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else if (!passStatus) {
                    return res.status(401).json({
                        message: 'Auth failed!'
                    })
                } else {
                    const token = jwt.sign(
                    {
                        username: _username
                    },
                    config.JWT_KEY,
                    { 
                        expiresIn: "1h"
                    });

                    res.status(200).json({
                        message: "LOGIN SUCCESSFULLY!",
                        token: token
                    })
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}

exports.changePassword = (req, res, next) => {

}

exports.updateProfile = (req, res, next) => {
    
}