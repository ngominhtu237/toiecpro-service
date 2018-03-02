const shortid = require('shortid');
const PartSix = require('../models').PartSix;
const QuestionPartSix = require('../models').QuestionPartSix;
const appRoot = require('app-root-path');
const env = process.env.NODE_ENV || 'development';
const config = require(appRoot + '/config/wannacry/conf.json')[env];


exports.create = (req, res, next) => {

    const _information = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    const _direction = "Lorem ipsum dolor sit amet, labitur vivendo consectetuer ea pro, has eu regione ocurreret. Eum ex liber soluta feugait. Ei vix erat interpretaris. Quo et quas quando impetus.";

    const _id = shortid.generate();
    const mQuestionPartSix = [];
    for(let i=0; i<12; i++) {
        let tempQues = {};
        tempQues.first_part_question = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor quam in sapien ultrices hendrerit. ";
        tempQues.last_part_question = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor quam in sapien ultrices hendrerit. ";
        tempQues.optionA = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.optionB = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.optionC = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.optionD = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
        tempQues.answer = "D";
        tempQues.idPartSix = _id;
        mQuestionPartSix.push(tempQues);
    }

    const part = {
        id : _id,
        information: _information,
        direction: _direction,
    }

    PartSix.create(part)
    .then(content => {
        console.log("create partsix successfully! (not include question)");
        QuestionPartSix.bulkCreate(mQuestionPartSix,{ individualHooks: true })
            .then(ques => {
                res.status(200).json({
                    message: 'Create partsix successfully!'
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
