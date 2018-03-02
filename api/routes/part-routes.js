const express = require('express');
const router  = express.Router();
const multer = require('multer');
const appRoot = require('app-root-path');
const mPathOne = appRoot.resolve('/public/resource/photo/partone');

// const allowTypes = ['image/png', 'image/jpeg', 'image/gif'];
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, mPathOne);
    },
    filename(req, file, cb) {
        cb(null, file.originalname);
    }
})

// const fileFilter = (req, { mimetype }, cb) =>
//   cb(null, Boolean(allowTypes.indexOf(mimetype) > -1));

  const uploadConfig = {
    fields: 17,
    files: 17,
    fileSize: 100 * 1048576,
    parts: 17
  };

const uploader = multer( {
    storage,
    // fileFilter,
    limits: uploadConfig
})
const PartOneController = require('../controllers').PartOne;
const PartTwoController = require('../controllers').PartTwo;
const PartThreeController = require('../controllers').PartThree;
const PartFourController = require('../controllers').PartFour;
const PartFiveController = require('../controllers').PartFive;
const PartSixController = require('../controllers').PartSix;
const PartSevenController = require('../controllers').PartSeven; 
const listKeyPhotos = ['picture_example', 'photo_1', 'photo_2','photo_3','photo_4','photo_5','photo_6','photo_7','photo_8','photo_9','photo_10'];
router.post('/test-partone', uploader.fields([
    
    { name: 'audio'}


]), (req, res) => {
    res.status(200).json({
        message: req.files
    })
});
router.post('/create-partone', uploader.fields([
    { name: 'picture_example'},
    { name: 'audio'},
    { name: 'photo_1'},
    { name: 'photo_2'},
    { name: 'photo_3'},
    { name: 'photo_4'},
    { name: 'photo_5'},
    { name: 'photo_6'},
    { name: 'photo_7'},
    { name: 'photo_8'},
    { name: 'photo_9'},
    { name: 'photo_10'}
]), PartOneController.create);
router.post('/create-parttwo', PartTwoController.create);
router.post('/create-partthree', PartThreeController.create);
router.post('/create-partfour', PartFourController.create);
router.post('/create-partfive', PartFiveController.create);
router.post('/create-partsix', PartSixController.create);
router.post('/create-partseven', PartSevenController.create);

// may be not needed
router.get('/get-partone', PartOneController.getPartOne);

// update info partone with partID
router.put('/update-partone/:partID', PartOneController.updatePartOne);

module.exports = router;