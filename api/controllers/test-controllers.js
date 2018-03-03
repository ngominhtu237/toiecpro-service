const shortid = require('shortid');
const Test = require('../models').Test;
const PartOne = require('../models').PartOne;
const PartTwo = require('../models').PartTwo;
const PartThree = require('../models').PartThree;
const PartFour = require('../models').PartFour;
const PartFive = require('../models').PartFive;
const PartSix = require('../models').PartSix;
const PartSeven = require('../models').PartSeven;
const QuestionPartOne = require('../models').QuestionPartOne;
const QuestionPartTwo = require('../models').QuestionPartTwo;
const QuestionPartThree = require('../models').QuestionPartThree;
const QuestionPartFour = require('../models').QuestionPartFour;
const QuestionPartFive = require('../models').QuestionPartFive;
const QuestionPartSix = require('../models').QuestionPartSix;
const QuestionPartSeven = require('../models').QuestionPartSeven;
const appRoot = require('app-root-path');
const env = process.env.NODE_ENV || 'development';
const config = require(appRoot + '/config/wannacry/conf.json')[env];
const objectAssign = require('object-assign');

exports.create = (req, res, next) => {
    const _test_name = req.body.test_name;
    const _test_description = req.body.test_description;
    const _isMainTest = req.body.isMainTest;
    const _isLocked = req.body.isLocked;
    const _testtype_id = req.body.test_type;

    const _id = shortid.generate();
    const objTest = {
        id: _id,
        test_name: _test_name,
        test_description: _test_description,
        isMainTest: _isMainTest,
        isLocked: _isLocked,
        testtype_id: _testtype_id
    }

    Test.create(objTest)
        .then(result => {
            res.status(200).json({
                message: 'Create test successfully!'
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })

}

// Cần thêm một hàm check xem test đã có đầy đủ part hay chưa !
exports.checkCompleteTest = (req, res, next) => {

}

exports.updatePartIntoTest = (req, res, next) => {
    // must create test before inplementing this function 

    const _id_test = req.params.idTest;
    const _idPartOne = req.body.idpartOne ? req.body.idpartOne : null;
    const _idPartTwo = req.body.idPartTwo ? req.body.idPartTwo : null;
    const _idPartThree = req.body.PartThree ? req.body.PartThree : null;
    const _idPartFour = req.body.idPartFour ? req.body.idPartFour : null;
    const _idPartFive = req.body.idPartFive ? req.body.idPartFive : null;
    const _idPartSix = req.body.idPartSix ? req.body.idPartSix : null;
    const _idPartSeven = req.body.idPartSeven ? req.body.idPartSeven : null;

    let updateValues = {
        idPartOne: _idPartOne,
        idPartTwo: _idPartTwo,
        idPartThree: _idPartThree,
        idPartFour: _idPartFour,
        idPartFive: _idPartFive,
        idPartSix: _idPartSix,
        idPartSeven: _idPartSeven,
    }

    Test.update(updateValues, {
            where: {
                id: _id_test
            }
        })
        .then(result => {
            res.status(200).json({
                message: 'Update test successfully!'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })

}

exports.getTests = (req, res, next) => {

    Test.findAll()
        .then(arrTest => {
            res.status(200).json({
                tests: arrTest
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}

exports.getDetailsTest = (req, res, next) => {

    let _idTest = req.params.idTest;
    Test.findOne({
            id: _idTest
        })
        .then(detailsTest => {
            res.status(200).json(detailsTest);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}

exports.getPartOneInTest = (req, res, next) => {

    getQuestions("One", req, res, next);
}

exports.getPartTwoInTest = (req, res, next) => {

    getQuestions("Two", req, res, next);
}

exports.getPartThreeInTest = (req, res, next) => {

    getQuestions("Three", req, res, next);
}

exports.getPartFourInTest = (req, res, next) => {

    getQuestions("Four", req, res, next);
}

exports.getPartFiveInTest = (req, res, next) => {

    getQuestions("Five", req, res, next);
}

exports.getPartSixInTest = (req, res, next) => {

    getQuestions("Six", req, res, next);
}

exports.getPartSevenInTest = (req, res, next) => {

    getQuestions("Seven", req, res, next);
}

function getQuestions(typePart, req, res, next) {

    const _idTest = req.params.idTest;
    const _idPart = req.params.idPart;
    let PartX;
    let QuestionPartX;
    const optionFindPart = {
        id: _idTest
    }
    let optionFindQues = {};
    switch (typePart) {
        case "One":
            PartX = PartOne;
            QuestionPartX = QuestionPartOne;
            optionFindQues = {
                idPartOne: _idPart
            }
            break;

        case "Two":
            PartX = PartTwo;
            QuestionPartX = QuestionPartTwo;
            optionFindQues = {
                idPartTwo: _idPart
            }
            break;

        case "Three":
            PartX = PartThree;
            QuestionPartX = QuestionPartThree;
            optionFindQues = {
                idPartThree: _idPart
            }
            break;

        case "Four":
            PartX = PartFour;
            QuestionPartX = QuestionPartFour;
            optionFindQues = {
                idPartFour: _idPart
            }
            break;

        case "Five":
            PartX = PartFive;
            QuestionPartX = QuestionPartFive;
            optionFindQues = {
                idPartFive: _idPart
            }
            break;

        case "Six":
            PartX = PartSix;
            QuestionPartX = QuestionPartSix;
            optionFindQues = {
                idPartSix: _idPart
            }
            break;

        case "Seven":
            PartX = PartSeven;
            QuestionPartX = QuestionPartSeven;
            optionFindQues = {
                idPartSeven: _idPart
            }
            break;
    }
    let result = {};

    PartX.findOne(optionFindPart)
        .then(testInfo => {
            QuestionPartX.findAll({
                    where: optionFindQues
                })
                .then(arrQuestionPart => {
                    result = objectAssign(result, testInfo.dataValues, {
                        "question": arrQuestionPart
                    });
                    res.status(200).json(result);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })

}

function insertPart() {

}