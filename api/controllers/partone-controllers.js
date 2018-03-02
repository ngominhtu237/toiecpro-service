const shortid = require('shortid');
const PartOne = require('../models').PartOne;
const QuestionPartOne = require('../models').QuestionPartOne;
const appRoot = require('app-root-path');
const env = process.env.NODE_ENV || 'development';
const config = require(appRoot + '/config/wannacry/conf.json')[env];

exports.create = (req, res, next) => {

    const listKeyPhotos = ['picture_example', 'photo_1', 'photo_2', 'photo_3', 'photo_4', 'photo_5', 'photo_6', 'photo_7', 'photo_8', 'photo_9', 'photo_10'];
    const _picture_example = req.files.picture_example[0].path;
    const _full_audio = req.files.audio[0].path;

    // DEVELOPMENT
    // const _information = req.body.information;
    // const _direction = req.body.direction;
    // const _answer_example = req.body.answer_example;

    // TEST
    const _information = "TestSpecial"
    const _direction = "Direction";
    const _answer_example = "Answer Example";

    const _id = shortid.generate();
    const mQuestionPartOne = [];
    const arrayPhotoPaths = [];

    for (let i = 1; i <= 10; i++) {
        arrayPhotoPaths[i] = req.files[listKeyPhotos[i]][0].path
    }
    for (let i = 1; i <= 10; i++) {
        let tempQues = {};
        tempQues.photo = arrayPhotoPaths[i];
        tempQues.optionA = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.optionB = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.optionC = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.optionD = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.answer = "B";
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