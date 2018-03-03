const shortid = require('shortid');
const PartOne = require('../models').PartOne;
const QuestionPartOne = require('../models').QuestionPartOne;
const appRoot = require('app-root-path');
const env = process.env.NODE_ENV || 'development';
const config = require(appRoot + '/config/wannacry/conf.json')[env];

exports.create = (req, res, next) => {

    const _information = req.body.information;
    const _direction = req.body.direction;
    const _picture_example = req.body.picture_example;
    const _full_audio = req.body.full_audio;
    const _answer_example = req.body.answer_example;

    const _id = shortid.generate();
    const arrPhoto = req.body.arrPhoto;
    const arrOptionA = req.body.arrOptionA;
    const arrOptionB = req.body.arrOptionB;
    const arrOptionC = req.body.arrOptionC;
    const arrOptionD = req.body.arrOptionD;
    const arrAnswer = req.body.arrAnswer;
    var mQuestionPartOne = [];
    for (let i = 1; i <= 10; i++) {
        let tempQues = {};
        tempQues.photo = arrPhoto[i];
        tempQues.optionA = arrOptionA[i];
        tempQues.optionB = arrOptionB[i];
        tempQues.optionC = arrOptionC[i];
        tempQues.optionD = arrOptionD[i];
        tempQues.answer = arrAnswer[i];
        tempQues.idPartOne = _id;
        mQuestionPartOne.push(tempQues);
    }

    const part = {
        id: _id,
        information: _information,
        direction: _direction,
        picture_example: _picture_example,
        answer_example: _answer_example,
        full_audio: _full_audio
    }
    console.log("hello2");
    PartOne.create(part)
    .then(content => {
        console.log("create partone successfully! (not include question)");
        QuestionPartOne.bulkCreate(mQuestionPartOne,{ individualHooks: true })
            .then(ques => {
                res.status(200).json({
                    message: 'Create partone successfully!'
                })
            })
            .catch(err => {
                return res.status(500).json({
                    error: err
                });
            })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
}

exports.getPartOne = (req, res, next) => {

}

exports.updatePartOne = (req, res, next) => {

}