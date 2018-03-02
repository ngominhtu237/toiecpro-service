const shortid = require('shortid');
const PartOne = require('../models').PartOne;
const QuestionPartOne = require('../models').QuestionPartOne;
const appRoot = require('app-root-path');
const env = process.env.NODE_ENV || 'development';
const config = require(appRoot + '/config/wannacry/conf.json')[env];


exports.create = (req, res, next) => {

    const _information = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    const _direction = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";
    const _picture_example = "http://toeicpro.com/uploads/2014/09/example.png";
    const _answer_example = "Statement (C)";
    const _full_audio = "http://toeicpro.com/uploads/2014/09/example.mp3";

    const _id = shortid.generate();
    const mQuestionPartOne = [];
    for(let i=0; i<10; i++) {
        let tempQues = {};
        tempQues.picturePO = "http://toeicpro.com/uploads/2014/09/example.png";
        tempQues.optionA = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.optionB = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.optionC = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.optionD = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.answer = "B";
        tempQues.idPartOne = _id;
        mQuestionPartOne.push(tempQues);
    }

    const part = {
        id : _id,
        information: _information,
        direction: _direction,
        picture_example: _picture_example,
        answer_example: _answer_example,
        full_audio: _full_audio
    }

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