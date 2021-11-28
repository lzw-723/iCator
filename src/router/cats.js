const express = require('express');
const router = express.Router();

const struct = require('../model/struct');
const cat = require('../model/cat');

router.get('/cats', function (req, res) {
    res.send(struct.putData([cat.newSimpleCat(), cat.newSimpleCat()]));
})

router.get('/cats/:cid', function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send(req.params.cid);
})

module.exports = router;