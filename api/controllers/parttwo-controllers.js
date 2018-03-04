const shortid = require('shortid');
const PartTwo = require('../models').PartTwo;
const QuestionPartTwo = require('../models').QuestionPartTwo;
const appRoot = require('app-root-path');
const env = process.env.NODE_ENV || 'development';
const config = require(appRoot + '/config/wannacry/conf.json')[env];


exports.create = (req, res, next) => {

    const _information = req.body.information;
    const _direction = req.body.direction;
    const _full_audio = req.body.full_audio;

    const _id = shortid.generate();
    const arrQuestionName = req.body.arrQuestionName;
    const arrOptionA = req.body.arrOptionA;
    const arrOptionB = req.body.arrOptionB;
    const arrOptionC = req.body.arrOptionC;
    const arrAnswer = req.body.arrAnswer;
    var mQuestionPartTwo = [];
    
    for(let i=1; i<=30; i++) {
        let tempQues = {};
        tempQues.question_name = arrQuestionName[i];
        tempQues.optionA = arrOptionA[i];
        tempQues.optionB = arrOptionB[i];
        tempQues.optionC = arrOptionC[i];
        tempQues.answer = arrAnswer[i];
        tempQues.idPartTwo = _id;
        mQuestionPartTwo.push(tempQues);
    }

    const part = {
        id : _id,
        information: _information,
        direction: _direction,
        full_audio: _full_audio
    }
    console.log("OKpart2");
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
