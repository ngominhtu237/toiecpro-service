const express = require('express');
const router  = express.Router();

const Test = require('../controllers').Test;

router.post('/create-test', Test.create);
router.post('/update-part-into-test/:idTest', Test.updatePartIntoTest);

router.get('/getAllTests', Test.getAllTests);
// router.get('/getCompleteTests', Test.getCompleteTests);
router.get('/getTest/:idTest', Test.getDetailsTest);
router.get('/getTest/:idTest/partOne/:idPart', Test.getPartOneInTest);
router.get('/getTest/:idTest/partTwo/:idPart', Test.getPartTwoInTest);
router.get('/getTest/:idTest/partThree/:idPart', Test.getPartThreeInTest);
router.get('/getTest/:idTest/partFour/:idPart', Test.getPartFourInTest);
router.get('/getTest/:idTest/partFive/:idPart', Test.getPartFiveInTest);
router.get('/getTest/:idTest/partSix/:idPart', Test.getPartSixInTest);
router.get('/getTest/:idTest/partSeven/:idPart', Test.getPartSevenInTest);

module.exports = router;