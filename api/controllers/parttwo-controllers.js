const shortid = require('shortid');
const PartTwo = require('../models').PartTwo;
const QuestionPartTwo = require('../models').QuestionPartTwo;
const appRoot = require('app-root-path');
const env = process.env.NODE_ENV || 'development';
const config = require(appRoot + '/config/wannacry/conf.json')[env];


exports.create = (req, res, next) => {

    const _information = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    const _direction = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";
    const _full_audio = "http://toeicpro.com/uploads/2014/09/example.mp3";

    const _id = shortid.generate();
    const mQuestionPartTwo = [];
    for(let i=0; i<30; i++) {
        let tempQues = {};
        tempQues.optionA = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.optionB = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.optionC = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.answer = "B";
        tempQues.idPartTwo = _id;
        mQuestionPartTwo.push(tempQues);
    }

    const part = {
        id : _id,
        information: _information,
        direction: _direction,
        full_audio: _full_audio
    }

    PartTwo.create(part)
    .then(content => {
        console.log("create parttwo successfully! (not include question)");
        QuestionPartTwo.bulkCreate(mQuestionPartTwo,{ individualHooks: true })
            .then(ques => {
                res.status(200).json({
                    message: 'Create parttwo successfully!'
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
