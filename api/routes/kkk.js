const express = require('express');
const router  = express.Router();
const appRoot = require('app-root-path');
const mPath = appRoot.resolve('/lib/my-module.js');

// may be not needed
router.get('/', (req, res) => {
    res.status(200).json({
        message: mPath,
        name: res.body.name
    })
})


module.exports = router;