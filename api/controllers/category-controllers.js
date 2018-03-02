const shortid = require('shortid');
const Category = require('../models').TestType;
const appRoot = require('app-root-path');
const env = process.env.NODE_ENV || 'development';
const config = require(appRoot + '/config/wannacry/conf.json')[env];


exports.create = (req, res, next) => {

    const _category_name = "Reading";

    const objCategory = {
        type_name: _category_name,
    }

    Category.findOne({
            where: objCategory
        })
        .then(found1 => {
            if (!found1) {

                Category.create(objCategory)
                    .then(content => {
                        res.status(200).json({
                            message: 'create category successfully!'
                        })
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    })
            } else {
                res.status(409).json({
                    message: 'The category already exists!'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
}

exports.get = (req, res, next) => {

    Category.findAll()
        .then(arrCategory => {
            res.status(200).json({
                category: arrCategory
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}