const express = require('express');
const router  = express.Router(); 

const UsersController = require('../controllers').User; 

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /users'
    })
})

router.post('/signup', UsersController.signup);
router.post('/signin', UsersController.signin);

router.get('/:userID', (req, res, next) => {
    const uID = req.params.userID;
    if (uID === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: uID
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/:userID', (req, res, next) => {
    res.status(200).json({
        message: 'Updated User!'
    })
})

router.delete('/:userID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted User!'
    })
})

module.exports = router;